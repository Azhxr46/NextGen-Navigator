import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from '../components/NextGenEmblem';
import {
  FileText,
  Printer,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Layers,
  Plus,
  Trash2,
  Compass,
  Download,
  Eye,
  Edit2
} from 'lucide-react';

export const PortfolioResumePage: React.FC = () => {
  const { studentProfile, updateStudentProfile, showToast, t, language } = useApp();

  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  // Input states for builder
  const [techSkillInput, setTechSkillInput] = useState('');
  const [softSkillInput, setSoftSkillInput] = useState('');
  const [langInput, setLangInput] = useState('');

  // Education state
  const [eduSchool, setEduSchool] = useState('');
  const [eduDegree, setEduDegree] = useState('');
  const [eduYear, setEduYear] = useState('');
  const [eduScore, setEduScore] = useState('');

  // Project state
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectSkills, setProjectSkills] = useState('');

  // Certification state
  const [certName, setCertName] = useState('');
  const [certIssuer, setCertIssuer] = useState('');
  const [certYear, setCertYear] = useState('');

  // Optional Experience
  const [expRole, setExpRole] = useState('');
  const [expOrg, setExpOrg] = useState('');
  const [expDuration, setExpDuration] = useState('');
  const [expDesc, setExpDesc] = useState('');

  // Handlers
  const handleAddTechSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!techSkillInput.trim()) return;
    const next = [
      ...studentProfile.skillsInventory,
      { skillName: techSkillInput.trim(), level: 'Intermediate' as const, source: 'Learned', verified: true }
    ];
    updateStudentProfile({ skillsInventory: next });
    setTechSkillInput('');
    showToast({ type: 'success', title: 'Technical Skill Added', message: techSkillInput });
  };

  const handleAddSoftSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!softSkillInput.trim()) return;
    const current = studentProfile.softSkillsInventory || [];
    if (!current.includes(softSkillInput.trim())) {
      updateStudentProfile({ softSkillsInventory: [...current, softSkillInput.trim()] });
    }
    setSoftSkillInput('');
    showToast({ type: 'success', title: 'Soft Skill Added', message: softSkillInput });
  };

  const handleAddLanguage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!langInput.trim()) return;
    const current = studentProfile.languagesKnown || ['English'];
    if (!current.includes(langInput.trim())) {
      updateStudentProfile({ languagesKnown: [...current, langInput.trim()] });
    }
    setLangInput('');
    showToast({ type: 'success', title: 'Language Added', message: langInput });
  };

  const handleAddEducation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eduSchool.trim() || !eduDegree.trim()) return;
    const current = studentProfile.educationHistory || [];
    updateStudentProfile({
      educationHistory: [
        ...current,
        {
          schoolOrCollege: eduSchool.trim(),
          qualification: eduDegree.trim(),
          yearOfPassing: eduYear.trim() || '2026',
          gradePercentage: eduScore.trim() || 'N/A'
        }
      ]
    });
    setEduSchool('');
    setEduDegree('');
    setEduYear('');
    setEduScore('');
    showToast({ type: 'success', title: 'Education Entry Added', message: eduDegree });
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle.trim()) return;
    updateStudentProfile({
      projectsLogged: [
        ...studentProfile.projectsLogged,
        {
          id: `proj-${Date.now()}`,
          title: projectTitle.trim(),
          description: projectDesc.trim(),
          skillsUsed: projectSkills.split(',').map(s => s.trim()).filter(Boolean)
        }
      ]
    });
    setProjectTitle('');
    setProjectDesc('');
    setProjectSkills('');
    showToast({ type: 'success', title: 'Project Added to Resume', message: projectTitle });
  };

  const handleAddCertification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certName.trim()) return;
    const current = studentProfile.certifications || [];
    updateStudentProfile({
      certifications: [
        ...current,
        { name: certName.trim(), issuer: certIssuer.trim() || 'Online Course', year: certYear.trim() || '2026' }
      ]
    });
    setCertName('');
    setCertIssuer('');
    setCertYear('');
    showToast({ type: 'success', title: 'Certification Logged', message: certName });
  };

  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expRole.trim() || !expOrg.trim()) return;
    const current = studentProfile.experienceLogged || [];
    updateStudentProfile({
      experienceLogged: [
        ...current,
        { roleTitle: expRole.trim(), organization: expOrg.trim(), duration: expDuration.trim(), description: expDesc.trim() }
      ]
    });
    setExpRole('');
    setExpOrg('');
    setExpDuration('');
    setExpDesc('');
    showToast({ type: 'success', title: 'Experience Added', message: expRole });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fade-up">
      {/* Header */}
      <div className="no-print flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5E5E7] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
            <FileText className="w-3.5 h-3.5" />
            <span>{t.resume.title}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
            {t.resume.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            {t.resume.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab(activeTab === 'editor' ? 'preview' : 'editor')}
            className="btn-secondary"
          >
            {activeTab === 'editor' ? <Eye className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
            <span>{activeTab === 'editor' ? t.resume.previewTab : t.resume.editorTab}</span>
          </button>
          <button
            onClick={handlePrint}
            className="btn-primary"
          >
            <Printer className="w-4 h-4" />
            <span>{t.resume.exportPdf}</span>
          </button>
        </div>
      </div>

      {/* Main Builder & Preview Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Modular Editors (Hidden in print) */}
        {activeTab === 'editor' && (
          <div className="no-print lg:col-span-6 space-y-6">
            {/* 1. Basic Info */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft space-y-4">
              <h3 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider">
                1. {t.resume.personalInfo}
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={studentProfile.fullName}
                    onChange={e => updateStudentProfile({ fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">City & State</label>
                  <input
                    type="text"
                    value={studentProfile.city || ''}
                    onChange={e => updateStudentProfile({ city: e.target.value })}
                    placeholder="e.g. Bangalore, Karnataka"
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* 2. Technical Skills */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider">
                  2. {t.resume.techSkillsTitle}
                </h3>
                <span className="text-[11px] text-slate-400">e.g. Python, CAD, Electrical Wiring</span>
              </div>
              <form onSubmit={handleAddTechSkill} className="flex gap-2 text-xs">
                <input
                  type="text"
                  value={techSkillInput}
                  onChange={e => setTechSkillInput(e.target.value)}
                  placeholder="e.g. Python Programming, HTML/CSS, Arduino"
                  className="flex-1 p-2.5 rounded-xl border border-slate-300"
                />
                <button type="submit" className="btn-primary py-2 px-4 text-xs">
                  {t.resume.addTechSkillBtn}
                </button>
              </form>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {studentProfile.skillsInventory.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-[#FAF6F0] text-slate-800 border border-[#E5E5E7] text-xs flex items-center gap-1.5">
                    <span>{s.skillName}</span>
                    <button
                      onClick={() => updateStudentProfile({ skillsInventory: studentProfile.skillsInventory.filter((_, idx) => idx !== i) })}
                      className="text-slate-400 hover:text-rose-500 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Soft Skills */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider">
                  3. {t.resume.softSkillsTitle}
                </h3>
                <span className="text-[11px] text-slate-400">e.g. Leadership, Empathy, Public Speaking</span>
              </div>
              <form onSubmit={handleAddSoftSkill} className="flex gap-2 text-xs">
                <input
                  type="text"
                  value={softSkillInput}
                  onChange={e => setSoftSkillInput(e.target.value)}
                  placeholder="e.g. Active Listening, Team Collaboration, Time Management"
                  className="flex-1 p-2.5 rounded-xl border border-slate-300"
                />
                <button type="submit" className="btn-primary py-2 px-4 text-xs">
                  {t.resume.addSoftSkillBtn}
                </button>
              </form>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(studentProfile.softSkillsInventory || ['Analytical Thinking', 'Team Collaboration']).map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-[#FAF6F0] text-slate-800 border border-[#E5E5E7] text-xs flex items-center gap-1.5">
                    <span>{s}</span>
                    <button
                      onClick={() => updateStudentProfile({ softSkillsInventory: (studentProfile.softSkillsInventory || []).filter((_, idx) => idx !== i) })}
                      className="text-slate-400 hover:text-rose-500 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Education History */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft space-y-4">
              <h3 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider">
                4. {t.resume.educationTitle}
              </h3>
              <form onSubmit={handleAddEducation} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={eduSchool}
                    onChange={e => setEduSchool(e.target.value)}
                    placeholder={t.resume.schoolNamePlaceholder}
                    className="p-2.5 rounded-xl border border-slate-300"
                  />
                  <input
                    type="text"
                    required
                    value={eduDegree}
                    onChange={e => setEduDegree(e.target.value)}
                    placeholder="Class 10 / Class 12 / Diploma / B.E."
                    className="p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={eduYear}
                    onChange={e => setEduYear(e.target.value)}
                    placeholder="Year (e.g. 2024 or 2026 Expected)"
                    className="p-2.5 rounded-xl border border-slate-300"
                  />
                  <input
                    type="text"
                    value={eduScore}
                    onChange={e => setEduScore(e.target.value)}
                    placeholder="Score / Percentage (e.g. 88% or 9.2 CGPA)"
                    className="p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <button type="submit" className="btn-secondary w-full py-2 text-xs">
                  {t.resume.addEducationBtn}
                </button>
              </form>
            </div>

            {/* 5. Projects & Capstones */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft space-y-4">
              <h3 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider">
                5. {t.resume.projectsSection}
              </h3>
              <form onSubmit={handleAddProject} className="space-y-3 text-xs">
                <input
                  type="text"
                  required
                  value={projectTitle}
                  onChange={e => setProjectTitle(e.target.value)}
                  placeholder="Project Title (e.g. Solar-Powered Automatic Irrigation Model)"
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
                <textarea
                  rows={2}
                  value={projectDesc}
                  onChange={e => setProjectDesc(e.target.value)}
                  placeholder="Brief description of what you designed, built, or analyzed..."
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
                <input
                  type="text"
                  value={projectSkills}
                  onChange={e => setProjectSkills(e.target.value)}
                  placeholder="Skills Used (e.g. Arduino, Physics, C++, Circuitry)"
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
                <button type="submit" className="btn-secondary w-full py-2 text-xs">
                  {t.resume.addProject}
                </button>
              </form>
            </div>

            {/* 6. Certifications */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft space-y-4">
              <h3 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider">
                6. {t.resume.certificationsSection}
              </h3>
              <form onSubmit={handleAddCertification} className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={certName}
                    onChange={e => setCertName(e.target.value)}
                    placeholder="Course/Cert Name (e.g. Python for Data Science)"
                    className="p-2.5 rounded-xl border border-slate-300"
                  />
                  <input
                    type="text"
                    value={certIssuer}
                    onChange={e => setCertIssuer(e.target.value)}
                    placeholder="Issuer (e.g. NPTEL / IIT Madras)"
                    className="p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <button type="submit" className="btn-secondary w-full py-2 text-xs">
                  {t.resume.addCertificationBtn}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Right Side: Live Printable Resume Preview */}
        <div className={`${activeTab === 'editor' ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl mx-auto w-full'}`}>
          <div className="bg-white rounded-3xl border border-[#E5E5E7] p-8 sm:p-12 shadow-card print-page space-y-8 font-sans text-slate-800">
            {/* Resume Header */}
            <div className="border-b-2 border-[#7A1C33] pb-6 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#4A0817] tracking-tight">
                    {studentProfile.fullName || 'Student Name'}
                  </h1>
                  <p className="text-xs font-semibold text-[#7A1C33] uppercase tracking-wider mt-1">
                    {studentProfile.classLevel} • Aspiring Professional
                  </p>
                </div>
                <div className="hidden sm:block">
                  <NextGenEmblem size={44} />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2">
                <span>Location: {studentProfile.city || 'Karnataka, India'}</span>
                <span>•</span>
                <span>Languages: {(studentProfile.languagesKnown || ['English', 'Hindi', 'Kannada']).join(', ')}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-extrabold text-[#7A1C33] uppercase tracking-wider border-b border-slate-200 pb-1">
                Profile Objective
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Motivated learner with academic interests in {(studentProfile.preferredSubjects.length > 0 ? studentProfile.preferredSubjects.slice(0, 3).join(', ') : 'Science, Mathematics and Technology')}. Demonstrated practical curiosity in {(studentProfile.selfReportedStrengths.length > 0 ? studentProfile.selfReportedStrengths.slice(0, 2).join(' and ') : 'problem solving and creative systems')}. Focused on structured educational milestones and skill building.
              </p>
            </div>

            {/* Education History */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold text-[#7A1C33] uppercase tracking-wider border-b border-slate-200 pb-1">
                Education
              </h2>
              {(studentProfile.educationHistory && studentProfile.educationHistory.length > 0) ? (
                <div className="space-y-2 text-xs">
                  {studentProfile.educationHistory.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-slate-900 block">{edu.qualification}</span>
                        <span className="text-slate-600">{edu.schoolOrCollege}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-slate-800 block">{edu.yearOfPassing}</span>
                        <span className="text-slate-500 text-[11px]">{edu.gradePercentage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{studentProfile.classLevel}</span>
                    <span className="text-slate-600">{studentProfile.schoolName || 'High School / Pre-University'}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-slate-800 block">2026</span>
                    <span className="text-slate-500 text-[11px]">{studentProfile.academicScoreRange}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-extrabold text-[#7A1C33] uppercase tracking-wider border-b border-slate-200 pb-1">
                Technical & Practical Skills
              </h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {studentProfile.skillsInventory.length > 0 ? (
                  studentProfile.skillsInventory.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-[#FAF6F0] text-slate-800 border border-[#E5E5E7] font-medium">
                      {s.skillName}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500 italic">No technical skills added yet.</span>
                )}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-extrabold text-[#7A1C33] uppercase tracking-wider border-b border-slate-200 pb-1">
                Core Strengths & Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {(studentProfile.softSkillsInventory || ['Analytical Thinking', 'Team Collaboration', 'Problem Solving']).map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            {studentProfile.projectsLogged && studentProfile.projectsLogged.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-xs font-extrabold text-[#7A1C33] uppercase tracking-wider border-b border-slate-200 pb-1">
                  Projects & Practical Work
                </h2>
                <div className="space-y-3 text-xs">
                  {studentProfile.projectsLogged.map((p, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">{p.title}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{p.description}</p>
                      {p.skillsUsed && p.skillsUsed.length > 0 && (
                        <div className="text-[11px] text-[#7A1C33] font-semibold">
                          Tools: {p.skillsUsed.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {studentProfile.certifications && studentProfile.certifications.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-xs font-extrabold text-[#7A1C33] uppercase tracking-wider border-b border-slate-200 pb-1">
                  Certifications & Courses
                </h2>
                <div className="space-y-1.5 text-xs">
                  {studentProfile.certifications.map((c, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="font-semibold text-slate-800">{c.name} — <span className="text-slate-500 font-normal">{c.issuer}</span></span>
                      <span className="text-slate-500 font-mono">{c.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verification Footer on Resume */}
            <div className="pt-6 border-t border-slate-200 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Verified Student Dossier • NextGen Navigators Platform</span>
              <span>Generated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
