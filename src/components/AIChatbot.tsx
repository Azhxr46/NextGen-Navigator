import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from './NextGenEmblem';
import {
  MessageSquare,
  Sparkles,
  Send,
  X,
  Volume2,
  VolumeX,
  Bot,
  User,
  ShieldCheck,
  Maximize2,
  Minimize2,
  RotateCcw,
  Copy,
  Check,
  Compass,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { speakText, isSpeaking, stopSpeaking } from '../utils/speechSynthesis';
import { getLocalizedCareerGuidance } from '../utils/translations';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  model?: string;
  isFactNotice?: boolean;
  isGeminiLive?: boolean;
  isFallback?: boolean;
}

const STORAGE_KEY = 'nextgen_gemini_chat_history_v2';

export const AIChatbot: React.FC = () => {
  const {
    isChatbotOpen,
    setIsChatbotOpen,
    studentProfile,
    allCareers,
    topRecommendations,
    t,
    language,
    showToast
  } = useApp();

  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSpeakingId, setActiveSpeakingId] = useState<string | null>(null);

  // Load chat history from localStorage or initialize with welcome message
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      // ignore
    }
    return [
      {
        id: 'msg-welcome',
        sender: 'assistant',
        text: t.chatbot.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        model: 'gemini-3.8-flash',
        isFactNotice: true,
        isGeminiLive: true
      }
    ];
  });

  // Sync messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      // storage quota
    }
  }, [messages]);

  // When language changes, update the initial greeting if only welcome message exists
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === 'msg-welcome') {
        return [{
          id: 'msg-welcome',
          sender: 'assistant',
          text: t.chatbot.welcomeMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          model: 'gemini-3.8-flash',
          isFactNotice: true,
          isGeminiLive: true
        }];
      }
      return prev;
    });
  }, [language, t.chatbot.welcomeMessage]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickChips = t.chatbot.quickChips || [
    'What can I do after Class 10?',
    'How do I enter AI or Cybersecurity?',
    'Affordable & zero-debt college pathways',
    'Which scholarships match my profile?',
    'KCET, JEE & NEET prep strategy'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Append user message immediately
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsTyping(true);

    // Format continuous conversation history for backend (last 8 turns)
    const historyPayload = updatedMessages.slice(-8).map(m => ({
      role: m.sender === 'user' ? 'user' : 'model',
      text: m.text
    }));

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          history: historyPayload,
          language,
          studentContext: {
            fullName: studentProfile.fullName,
            classLevel: studentProfile.classLevel,
            preferredSubjects: studentProfile.preferredSubjects,
            strengths: studentProfile.selfReportedStrengths,
            budgetTier: studentProfile.budgetTier
          },
          careerContext: {
            topMatch: topRecommendations[0]?.career?.title,
            catalogCount: allCareers.length
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.text) {
          const assistantMsg: ChatMessage = {
            id: `assistant-${Date.now()}`,
            sender: 'assistant',
            text: data.text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            model: data.model || 'gemini-3.8-flash',
            isFactNotice: true,
            isGeminiLive: Boolean(data.isGeminiLive),
            isFallback: Boolean(data.isFallback)
          };
          setMessages(prev => [...prev, assistantMsg]);
          setIsTyping(false);
          return;
        }
      }
    } catch (err) {
      console.warn('Network request to /api/gemini/chat failed, using localized fallback intelligence.', err);
    }

    // Local fallback if offline or unexpected network timeout
    setTimeout(() => {
      const fallbackText = getLocalizedCareerGuidance(text, language, studentProfile, allCareers, topRecommendations);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        model: 'nextgen-offline-fallback',
        isFactNotice: true,
        isFallback: true
      };
      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleClearChat = () => {
    const welcomeMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: t.chatbot.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      model: 'gemini-3.8-flash',
      isFactNotice: true,
      isGeminiLive: true
    };
    setMessages([welcomeMsg]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
    showToast({
      type: 'info',
      title: t.chatbot.clearChat,
      message: t.chatbot.chatCleared
    });
  };

  const handleCopyText = (msgId: string, text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedId(msgId);
      setTimeout(() => setCopiedId(null), 2000);
      showToast({
        type: 'success',
        title: t.chatbot.copy,
        message: t.chatbot.copied
      });
    } catch (e) {
      // clipboard fallback
    }
  };

  const handleToggleSpeak = (msgId: string, text: string) => {
    if (activeSpeakingId === msgId && isSpeaking()) {
      stopSpeaking();
      setActiveSpeakingId(null);
    } else {
      setActiveSpeakingId(msgId);
      const speakLang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
      speakText(text, () => setActiveSpeakingId(null), speakLang);
    }
  };

  // Helper to format markdown-style text (bold headers, bullet points, numbers) cleanly
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();

      // Empty line
      if (!trimmed) {
        return <div key={idx} className="h-2" />;
      }

      // Bullet points
      if (trimmed.startsWith('•') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletText = trimmed.replace(/^[•\-\*]\s*/, '');
        return (
          <div key={idx} className="flex items-start gap-2 pl-1 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C33] mt-1.5 shrink-0" />
            <span className="flex-1">{formatInlineEmphasis(bulletText)}</span>
          </div>
        );
      }

      // Numbered lists (e.g. "1. ")
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
      if (numMatch) {
        return (
          <div key={idx} className="flex items-start gap-2 pl-1 py-0.5">
            <span className="font-bold text-[#7A1C33] text-[11px] shrink-0 min-w-[1.2rem]">
              {numMatch[1]}.
            </span>
            <span className="flex-1">{formatInlineEmphasis(numMatch[2])}</span>
          </div>
        );
      }

      // Standard text line
      return (
        <p key={idx} className="py-0.5">
          {formatInlineEmphasis(line)}
        </p>
      );
    });
  };

  // Inline formatting helper for **bold text**
  const formatInlineEmphasis = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-extrabold text-[#4A0817]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  if (!isChatbotOpen) {
    return (
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#4A0817] via-[#580C1F] to-[#7A1C33] text-white shadow-[0_8px_24px_rgba(74,8,23,0.45)] hover:shadow-[0_12px_32px_rgba(74,8,23,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group border border-[#FFF8F0]/20 no-print"
        title={t.chatbot.title}
        aria-label={t.chatbot.title}
      >
        <div className="relative">
          <Sparkles className="w-5 h-5 text-[#FAF6F0] group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#4A0817] animate-pulse" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-extrabold tracking-tight text-white leading-tight">
            {t.chatbot.title}
          </span>
          <span className="text-[10px] text-[#FAF6F0]/80 font-medium">
            {t.chatbot.onlineBadge}
          </span>
        </div>
      </button>
    );
  }

  return (
    <div
      className={`fixed z-50 transition-all duration-300 shadow-[0_20px_60px_rgba(20,2,6,0.35)] bg-white border border-[#E5E5E7] flex flex-col no-print ${
        isExpanded
          ? 'inset-3 md:inset-8 rounded-3xl'
          : 'bottom-3 right-3 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[460px] h-[84vh] sm:h-[640px] max-h-[720px] rounded-3xl'
      }`}
    >
      {/* Premium Chatbot Header */}
      <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#4A0817] via-[#580C1F] to-[#4A0817] text-white rounded-t-3xl flex items-center justify-between border-b border-[#580C1F] shadow-xs">
        <div className="flex items-center gap-3">
          <div className="relative">
            <NextGenEmblem size={34} />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#4A0817]" title="Gemini AI Active" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="text-xs sm:text-sm font-extrabold tracking-tight text-white">
                {t.chatbot.title}
              </h3>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#7A1C33] text-[#FAF6F0] font-bold rounded-md border border-[#FAF6F0]/15">
                {t.chatbot.onlineBadge}
              </span>
            </div>
            <p className="text-[10px] text-[#FAF6F0]/75 tracking-tight flex items-center gap-1 mt-0.5">
              <span>{t.chatbot.modelLabel}</span>
              <span>•</span>
              <span className="text-emerald-300 font-medium">{t.chatbot.continuousHint}</span>
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleClearChat}
            className="p-1.5 rounded-xl hover:bg-white/10 text-[#FAF6F0] transition"
            title={t.chatbot.clearChat}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-xl hover:bg-white/10 text-[#FAF6F0] transition hidden sm:inline-flex"
            title={isExpanded ? 'Minimize' : 'Maximize'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsChatbotOpen(false)}
            className="p-1.5 rounded-xl hover:bg-white/10 text-[#FAF6F0] transition"
            title={t.actions.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Disclaimers & Model Badge */}
      <div className="bg-[#FAF6F0] px-3.5 py-1.5 border-b border-[#E5E5E7] text-[10px] text-slate-600 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 font-medium truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-[#7A1C33] shrink-0" />
          <span className="truncate">{t.disclaimers.salaryNotice}</span>
        </span>
        <span className="text-[10px] text-slate-400 font-mono shrink-0">
          {language.toUpperCase()} • v3.8
        </span>
      </div>

      {/* Scrollable Conversation Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-gradient-to-b from-slate-50/60 to-white">
        {messages.map(msg => {
          const isUser = msg.sender === 'user';
          const isSpeakingNow = activeSpeakingId === msg.id;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} group animate-fade-up`}
            >
              <div className="flex items-end gap-2 max-w-[90%] sm:max-w-[85%]">
                {!isUser && (
                  <div className="w-7 h-7 rounded-xl bg-[#FAF6F0] border border-[#E5E5E7] flex items-center justify-center shrink-0 mb-1 shadow-2xs">
                    <NextGenEmblem size={18} />
                  </div>
                )}

                <div
                  className={`rounded-2xl p-3.5 space-y-2 shadow-xs leading-relaxed text-xs ${
                    isUser
                      ? 'bg-gradient-to-br from-[#580C1F] to-[#7A1C33] text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-[#E5E5E7] rounded-bl-xs'
                  }`}
                >
                  {/* Message Body with Clean Formatting */}
                  <div className="space-y-1">
                    {renderFormattedContent(msg.text)}
                  </div>

                  {/* Assistant Footer Actions (Copy & Read Aloud) */}
                  {!isUser && (
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                      <div className="flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>Google Gemini AI</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleCopyText(msg.id, msg.text)}
                          className="p-1 rounded-md hover:bg-slate-100 text-slate-500 hover:text-[#7A1C33] transition"
                          title={t.chatbot.copy}
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          onClick={() => handleToggleSpeak(msg.id, msg.text)}
                          className={`p-1 rounded-md hover:bg-slate-100 transition ${
                            isSpeakingNow ? 'text-[#7A1C33] bg-[#F9EBEF]' : 'text-slate-500 hover:text-[#7A1C33]'
                          }`}
                          title={isSpeakingNow ? t.chatbot.stopSpeaking : t.chatbot.readAloud}
                        >
                          {isSpeakingNow ? (
                            <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Timestamp */}
              <span className={`text-[10px] text-slate-400 mt-1 px-1.5 ${isUser ? 'text-right' : 'text-left pl-9'}`}>
                {msg.timestamp}
              </span>
            </div>
          );
        })}

        {/* Real-time Typing Wave Animation */}
        {isTyping && (
          <div className="flex items-end gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-xl bg-[#FAF6F0] border border-[#E5E5E7] flex items-center justify-center shrink-0 shadow-2xs">
              <NextGenEmblem size={18} />
            </div>
            <div className="bg-white border border-[#E5E5E7] rounded-2xl rounded-bl-xs p-3.5 shadow-xs flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#7A1C33] animate-pulse" />
              <div className="flex items-center gap-1 px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C33] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C33] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C33] animate-bounce" />
              </div>
              <span className="text-[11px] text-slate-500 font-medium pl-1 italic">
                {language === 'kn'
                  ? 'ಜೆಮಿನಿ ಮಾರ್ಗದರ್ಶನ ಸಿದ್ಧಪಡಿಸುತ್ತಿದೆ...'
                  : language === 'hi'
                  ? 'जेमिनी मार्गदर्शन तैयार कर रहा है...'
                  : 'Gemini is formulating verified guidance...'}
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Inquiry Chips Carousel */}
      <div className="p-2.5 bg-[#FAF6F0]/80 border-t border-[#E5E5E7] overflow-x-auto flex gap-2 no-scrollbar">
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip)}
            disabled={isTyping}
            className="shrink-0 px-3 py-1.5 rounded-full bg-white hover:bg-[#F9EBEF] text-[#4A0817] hover:text-[#7A1C33] border border-[#E5E5E7] hover:border-[#F2D3DC] text-[11px] font-semibold transition-all shadow-2xs active:scale-95 disabled:opacity-50"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Field Bar */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 sm:p-3.5 bg-white border-t border-[#E5E5E7] rounded-b-3xl flex items-center gap-2"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={inputMessage}
            onChange={e => setInputMessage(e.target.value)}
            disabled={isTyping}
            placeholder={t.chatbot.inputPlaceholder}
            className="w-full pl-3.5 pr-8 py-2.5 rounded-2xl border border-slate-300 text-xs text-[#4A0817] placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1C33] focus:border-transparent transition"
          />
          {inputMessage.length > 0 && (
            <button
              type="button"
              onClick={() => setInputMessage('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={!inputMessage.trim() || isTyping}
          className="p-2.5 sm:px-4 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#580C1F] to-[#7A1C33] hover:from-[#4A0817] hover:to-[#580C1F] text-white disabled:opacity-40 transition-all shadow-xs flex items-center gap-1.5 font-bold text-xs shrink-0"
          title={t.chatbot.send}
        >
          <span className="hidden sm:inline">{t.chatbot.send}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
