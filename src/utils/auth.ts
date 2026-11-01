import { User, AuthSession, AdminAuditLog } from '../types';

const USERS_STORAGE_KEY = 'nextgen_registered_users';
const SESSIONS_STORAGE_KEY = 'nextgen_active_sessions';
const AUDIT_LOG_KEY = 'nextgen_admin_audit_logs';
const RATE_LIMIT_KEY = 'nextgen_auth_rate_limits';

/**
 * Modern Cryptographic Password Hashing using Web Crypto API (PBKDF2-SHA256)
 * Salted with 16 bytes and 10,000 iterations
 */
export async function hashPassword(password: string, providedSalt?: string): Promise<{ hash: string; salt: string }> {
  const encoder = new TextEncoder();
  const salt = providedSalt || Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0')).join('');
  
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: 10000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256
  );

  const hash = Array.from(new Uint8Array(derivedBits))
    .map(b => b.toString(16).padStart(2, '0')).join('');

  return { hash, salt };
}

export async function verifyPassword(password: string, storedHash: string, salt: string): Promise<boolean> {
  const { hash } = await hashPassword(password, salt);
  return hash === storedHash;
}

/**
 * Rate Limiter for Login Protection
 * Max 5 failed attempts within 15 minutes
 */
export function checkRateLimit(identifier: string): { allowed: boolean; remainingSeconds?: number } {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const limits: Record<string, { count: number; lockedUntil: number }> = raw ? JSON.parse(raw) : {};
    const record = limits[identifier];
    const now = Date.now();

    if (record && record.lockedUntil > now) {
      return { allowed: false, remainingSeconds: Math.ceil((record.lockedUntil - now) / 1000) };
    }
    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}

export function recordFailedAttempt(identifier: string): void {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const limits: Record<string, { count: number; lockedUntil: number }> = raw ? JSON.parse(raw) : {};
    const now = Date.now();
    const current = limits[identifier] || { count: 0, lockedUntil: 0 };
    current.count += 1;

    if (current.count >= 5) {
      current.lockedUntil = now + 15 * 60 * 1000; // 15-minute lockout
    }
    limits[identifier] = current;
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(limits));
  } catch {}
}

export function resetRateLimit(identifier: string): void {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    if (!raw) return;
    const limits = JSON.parse(raw);
    delete limits[identifier];
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(limits));
  } catch {}
}

/**
 * User Storage & Registration
 */
export function getRegisteredUsers(): User[] {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

export function saveRegisteredUsers(users: User[]): void {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch {}
}

/**
 * Audit Logging for Administrative Actions
 */
export function logAdminAction(adminEmail: string, action: string, details: string): void {
  try {
    const raw = localStorage.getItem(AUDIT_LOG_KEY);
    const logs: AdminAuditLog[] = raw ? JSON.parse(raw) : [];
    const newLog: AdminAuditLog = {
      id: `audit-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      adminEmail,
      action,
      details,
      timestamp: new Date().toISOString(),
      ipAddress: '127.0.0.1'
    };
    logs.unshift(newLog);
    // Keep last 150 audit records
    localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(logs.slice(0, 150)));
  } catch {}
}

export function getAdminAuditLogs(): AdminAuditLog[] {
  try {
    const raw = localStorage.getItem(AUDIT_LOG_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

