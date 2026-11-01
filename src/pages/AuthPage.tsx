import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from '../components/NextGenEmblem';
import { Lock, Mail, User, ShieldAlert, ArrowRight, CheckCircle2, AlertCircle, Info, Loader2 } from 'lucide-react';

interface AuthPageProps {
  initialMode?: 'login' | 'register' | 'admin';
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialMode = 'login' }) => {
  const { loginStudent, registerStudent, loginAdmin, setCurrentRoute, t, language } = useApp();

  const [mode, setMode] = useState<'login' | 'register' | 'admin'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      if (mode === 'register') {
        const res = await registerStudent(fullName, email, password);
        if (!res.success) {
          setErrorMessage(res.message);
        }
      } else if (mode === 'login') {
        const res = await loginStudent(email, password);
        if (!res.success) {
          setErrorMessage(res.message);
        }
      } else if (mode === 'admin') {
        const res = await loginAdmin(email, password);
        if (!res.success) {
          setErrorMessage(res.message);
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 animate-fade-up">
      <div className="max-w-md w-full space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E5E7] shadow-soft">
        {/* Logo and Heading */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <NextGenEmblem size={52} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0817] tracking-tight">
            {mode === 'admin'
              ? t.auth.adminLoginTitle
              : mode === 'register'
              ? t.auth.studentRegisterTitle
              : t.auth.studentLoginTitle}
          </h2>
          <p className="text-xs text-slate-600">
            {mode === 'admin'
              ? t.auth.adminLoginSubtitle
              : mode === 'register'
              ? t.auth.studentRegisterSubtitle
              : t.auth.studentLoginSubtitle}
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex rounded-xl bg-[#FAF6F0] p-1 border border-[#E5E5E7]">
          <button
            type="button"
            onClick={() => { setMode('login'); setErrorMessage(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
              mode === 'login'
                ? 'bg-white text-[#7A1C33] shadow-sm'
                : 'text-slate-600 hover:text-[#7A1C33]'
            }`}
          >
            {t.nav.login}
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setErrorMessage(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
              mode === 'register'
                ? 'bg-white text-[#7A1C33] shadow-sm'
                : 'text-slate-600 hover:text-[#7A1C33]'
            }`}
          >
            {t.nav.register}
          </button>
          <button
            type="button"
            onClick={() => { setMode('admin'); setErrorMessage(''); }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
              mode === 'admin'
                ? 'bg-[#4A0817] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#7A1C33]'
            }`}
          >
            {t.nav.admin}
          </button>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
            <span className="leading-relaxed">{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.auth.fullNameLabel}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder={t.auth.fullNamePlaceholder}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A1C33]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {mode === 'admin' ? (language === 'kn' ? 'ನಿರ್ವಾಹಕರ ಇಮೇಲ್ / ಹೆಸರು' : language === 'hi' ? 'व्यवस्थापक उपयोगकर्ता नाम / ईमेल' : 'Admin Username / Email') : t.auth.emailLabel}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type={mode === 'admin' ? 'text' : 'email'}
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={mode === 'admin' ? 'admin@nextgennavigators.in' : t.auth.emailPlaceholder}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A1C33]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.auth.passwordLabel}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A1C33]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-xl font-bold text-xs text-white transition flex items-center justify-center gap-2 ${
                mode === 'admin'
                  ? 'bg-[#4A0817] hover:bg-[#330510]'
                  : 'bg-[#7A1C33] hover:bg-[#580C1F]'
              } ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.common.loading}</span>
                </>
              ) : (
                <>
                  <span>
                    {mode === 'admin'
                      ? t.auth.adminSignInBtn
                      : mode === 'register'
                      ? t.auth.registerBtn
                      : t.auth.signInBtn}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Security & Privacy Notice */}
        <div className="text-center pt-4 border-t border-slate-100 space-y-2">
          <p className="text-[11px] text-slate-500">
            {t.auth.adminNotice}
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <button
              onClick={() => setCurrentRoute('landing')}
              className="text-slate-500 hover:text-[#7A1C33] font-medium"
            >
              {t.nav.home}
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setCurrentRoute('contact')}
              className="text-slate-500 hover:text-[#7A1C33] font-medium"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

