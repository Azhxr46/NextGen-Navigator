import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * NextGen Navigators - Centralized Supabase Client Configuration
 * 
 * Instructions:
 * 1. Create a Supabase project at https://supabase.com
 * 2. In your Supabase Dashboard, go to Settings -> API
 * 3. Replace the placeholders below or define them in your `.env` file:
 *    - VITE_SUPABASE_URL
 *    - VITE_SUPABASE_ANON_KEY (or VITE_SUPABASE_PUBLISHABLE_KEY)
 */

export const SUPABASE_URL_PLACEHOLDER = 'YOUR_SUPABASE_URL';
export const SUPABASE_KEY_PLACEHOLDER = 'YOUR_SUPABASE_PUBLISHABLE_KEY';

// Resolve configuration from environment variables or designated placeholders
export const supabaseUrl: string =
  (import.meta.env.VITE_SUPABASE_URL as string) ||
  (import.meta.env.VITE_PUBLIC_SUPABASE_URL as string) ||
  SUPABASE_URL_PLACEHOLDER;

export const supabaseAnonKey: string =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) ||
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string) ||
  (import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY as string) ||
  SUPABASE_KEY_PLACEHOLDER;

/**
 * Deterministically checks whether Supabase credentials have been configured with a real project.
 * Returns FALSE when using default placeholders, empty values, or invalid URLs.
 */
export const isSupabaseConfigured = (): boolean => {
  if (!supabaseUrl || !supabaseAnonKey) return false;
  if (
    supabaseUrl === SUPABASE_URL_PLACEHOLDER ||
    supabaseAnonKey === SUPABASE_KEY_PLACEHOLDER ||
    supabaseUrl.trim() === '' ||
    supabaseAnonKey.trim() === ''
  ) {
    return false;
  }

  try {
    const parsed = new URL(supabaseUrl);
    return parsed.protocol === 'https:' && parsed.hostname.length > 3;
  } catch {
    return false;
  }
};

/**
 * Initialized Supabase client instance.
 * Uses real credentials when configured, or a safe stub endpoint to prevent boot crashes
 * when placeholder credentials are in place.
 */
export const supabase: SupabaseClient = createClient(
  isSupabaseConfigured() ? supabaseUrl : 'https://placeholder.supabase.co',
  isSupabaseConfigured() ? supabaseAnonKey : 'placeholder-anon-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

