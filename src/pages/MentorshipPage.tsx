import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mentor } from '../types';
import {
  Users,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  Video,
  ExternalLink,
  X,
  Mail,
  Plus
} from 'lucide-react';

export const MentorshipPage: React.FC = () => {
  const { allMentors, mentorshipSessions, requestSession, studentProfile, showToast, setCurrentRoute, userRole, t, language } = useApp();

  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [topic, setTopic] = useState('');
  const [requestedDate, setRequestedDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('05:00 PM IST');
  const [studentQuestion, setStudentQuestion] = useState('');

  const handleOpenBookingModal = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setTopic(`${t.mentorship.title}: ${mentor.sector}`);
    setRequestedDate(new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMentor) return;

    if (!studentQuestion.trim()) {
      showToast({ type: 'warning', title: t.common.error, message: t.auth.fillAllFields });
      return;
    }

    requestSession({
      studentId: studentProfile.id,
      studentName: studentProfile.fullName || 'Student',
      mentorId: selectedMentor.id,
      mentorName: selectedMentor.name,
      mentorRole: selectedMentor.title,
      mentorOrg: selectedMentor.organization,
      topic,
      requestedDate,
      preferredTime,
      studentQuestion
    });

    showToast({ type: 'success', title: t.common.success, message: t.mentorship.bookingSuccess });
    setSelectedMentor(null);
    setStudentQuestion('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fade-up">
      {/* Header */}
      <div className="space-y-3 border-b border-[#E5E5E7] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
          <Users className="w-3.5 h-3.5" />
          <span>{t.mentorship.title}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
          {t.mentorship.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
          {t.mentorship.subtitle}
        </p>
      </div>

      {/* Directory Content */}
      {allMentors.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 sm:p-16 border border-[#E5E5E7] shadow-soft text-center space-y-5 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF6F0] text-[#7A1C33] flex items-center justify-center mx-auto border border-[#E5E5E7]">
            <Users className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-[#4A0817]">
              {t.mentorship.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.disclaimers.emptyDirectoryNotice}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
            {userRole === 'admin' ? (
              <button
                onClick={() => setCurrentRoute('admin-dashboard')}
                className="btn-primary"
              >
                <Plus className="w-4 h-4" />
                <span>{language === 'kn' ? 'ಆಡ್ಮಿನ್ ಮೂಲಕ ಮಾರ್ಗದರ್ಶಕರನ್ನು ಸೇರಿಸಿ' : language === 'hi' ? 'व्यवस्थापक कंसोल के माध्यम से मेंटर जोड़ें' : 'Add Verified Mentor via Admin Console'}</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentRoute('contact')}
                className="btn-primary"
              >
                <Mail className="w-4 h-4" />
                <span>{t.nav.contact}</span>
              </button>
            )}
            <button
              onClick={() => setCurrentRoute('explorer')}
              className="btn-secondary"
            >
              <span>{t.nav.explorer}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMentors.map(mentor => (
            <div
              key={mentor.id}
              className="interactive-card bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft hover:shadow-card hover:border-[#9B314B]/30 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-[#E5E5E7]"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#7A1C33] uppercase">
                      {mentor.sector}
                    </span>
                    <h3 className="text-base font-bold text-[#4A0817]">
                      {mentor.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {mentor.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {mentor.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {mentor.expertiseTags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF6F0] text-slate-700 font-medium border border-[#E5E5E7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E7] flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {mentor.experienceYears}+ {t.mentorship.yearsExp}
                </span>
                <button
                  onClick={() => handleOpenBookingModal(mentor)}
                  className="btn-primary py-2 px-3.5 text-xs"
                >
                  <span>{t.mentorship.requestSessionBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Booking Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-[#E5E5E7] shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#E5E5E7] pb-3">
              <h3 className="text-base font-bold text-[#4A0817]">
                {t.mentorship.modalTitle}: {selectedMentor.name}
              </h3>
              <button
                onClick={() => setSelectedMentor(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">{t.mentorship.sessionPurpose}</label>
                <input
                  type="text"
                  required
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">{t.mentorship.selectDate}</label>
                  <input
                    type="date"
                    required
                    value={requestedDate}
                    onChange={e => setRequestedDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">{t.mentorship.selectTime}</label>
                  <input
                    type="text"
                    value={preferredTime}
                    onChange={e => setPreferredTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">{t.mentorship.purposePlaceholder}</label>
                <textarea
                  rows={3}
                  required
                  value={studentQuestion}
                  onChange={e => setStudentQuestion(e.target.value)}
                  placeholder={language === 'kn' ? 'ಕಾಲೇಜು ಪ್ರವೇಶ, ಪರೀಕ್ಷಾ ತಯಾರಿ ಅಥವಾ ಕೌಶಲ್ಯಗಳ ಬಗ್ಗೆ ಕೇಳಿ...' : language === 'hi' ? 'कॉलेज की तैयारी, कट-ऑफ अंक, या कौशल रोडमैप के बारे में पूछें...' : 'Ask about college preparation, entrance cutoff marks, or skill roadmaps...'}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMentor(null)}
                  className="btn-ghost"
                >
                  {t.actions.cancel}
                </button>
                <button type="submit" className="btn-primary">
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.mentorship.confirmBooking}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
