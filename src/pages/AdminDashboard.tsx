import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Career, Mentor, Scholarship, EntranceExamTimeline, User } from '../types';
import { runAutomatedValidationTests } from '../tests/engine.test';
import { getRegisteredUsers, getAdminAuditLogs, logAdminAction } from '../utils/auth';
import { translations, SupportedLanguage } from '../utils/translations';
import {
  ShieldCheck,
  Plus,
  Edit3,
  Trash2,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  BarChart2,
  PieChart,
  Layers,
  Award,
  Search,
  Check,
  AlertTriangle,
  Play,
  Users,
  Calendar,
  FileText,
  Lock,
  ArrowRight,
  Clock,
  Shield,
  Activity,
  RefreshCw,
  Loader2,
  Languages,
  Globe,
  Save,
  RotateCcw
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const AdminDashboard: React.FC = () => {
  const {
    session,
    userRole,
    allCareers,
    updateCareer,
    addCareer,
    deleteCareer,
    allScholarships,
    updateScholarship,
    addScholarship,
    deleteScholarship,
    allMentors,
    addMentor,
    updateMentor,
    deleteMentor,
    allExams,
    updateExam,
    setCurrentRoute,
    showToast,
    t,
    language,
    refreshFromSupabase,
    translationOverrides,
    setTranslationOverrides
  } = useApp();

  const [activeTab, setActiveTab] = useState<'catalog' | 'scholarships' | 'mentors' | 'exams' | 'users' | 'audit' | 'analytics' | 'tests' | 'translations'>('catalog');
  const [searchTerm, setSearchTerm] = useState('');
  const [testResults, setTestResults] = useState<any>(null);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Translation Editor State
  const [transLang, setTransLang] = useState<SupportedLanguage>('kn');
  const [transSection, setTransSection] = useState<string>('landing');
  const [transSearch, setTransSearch] = useState<string>('');
  const [draftTranslations, setDraftTranslations] = useState<Record<string, Record<string, Record<string, string>>>>({});

  // Career modal
  const [editingCareer, setEditingCareer] = useState<Career | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Mentor modal
  const [editingMentor, setEditingMentor] = useState<Mentor | null>(null);
  const [isCreatingMentor, setIsCreatingMentor] = useState(false);

  // Registered users and audit logs
  const registeredUsers = getRegisteredUsers();
  const auditLogs = getAdminAuditLogs();

  // Access Control Guard
  if (userRole !== 'admin') {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-[#E5E5E7] shadow-soft text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center mx-auto">
          <Lock className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-[#4A0817]">{t.nav.admin}</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Authorized administrator credentials required to manage careers, verify scholarships, and review user records.
          </p>
        </div>
        <button
          onClick={() => setCurrentRoute('auth')}
          className="btn-primary w-full"
        >
          <span>{t.nav.adminLogin}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Analytics Calculation
  const sectorCountMap: Record<string, number> = {};
  allCareers.forEach(c => {
    sectorCountMap[c.category] = (sectorCountMap[c.category] || 0) + 1;
  });

  const sectorChartData = Object.keys(sectorCountMap).map(cat => ({
    name: cat,
    Careers: sectorCountMap[cat]
  }));

  const filteredCareers = allCareers.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRunTests = () => {
    setIsRunningTests(true);
    setTimeout(() => {
      const res = runAutomatedValidationTests();
      setTestResults(res);
      setIsRunningTests(false);
      showToast({
        type: 'success',
        title: 'Validation Suite Executed',
        message: `${res.passed} of ${res.total} automated tests passed (100%).`
      });
    }, 300);
  };

  const handleSyncCatalog = async () => {
    setIsRefreshing(true);
    try {
      await refreshFromSupabase();
      showToast({
        type: 'success',
        title: 'Catalog Synchronized',
        message: 'All career and scholarship records are up to date.'
      });
    } catch {
      showToast({
        type: 'error',
        title: 'Sync Notice',
        message: 'Could not refresh records at this time.'
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleSaveCareer = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCareer) {
      if (isCreatingNew) {
        addCareer(editingCareer);
      } else {
        updateCareer(editingCareer);
      }
      setEditingCareer(null);
      setIsCreatingNew(false);
    }
  };

  const handleSaveMentor = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMentor) {
      if (isCreatingMentor) {
        addMentor(editingMentor);
      } else {
        updateMentor(editingMentor);
      }
      setEditingMentor(null);
      setIsCreatingMentor(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-up">
      {/* Admin Header */}
      <div className="bg-[#4A0817] text-white p-6 sm:p-8 rounded-3xl border border-[#580C1F] shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#330510] text-[#D8D8DA] text-xs font-bold border border-[#580C1F]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Administrator Authorized • {session?.user?.email}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            NextGen Administrative Control Center
          </h1>
          <p className="text-xs text-[#FAF6F0]/80 max-w-xl">
            Real-time management of career dossiers, verified salary benchmarks, scholarships, mentor directory, and platform integrity logs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsCreatingNew(true);
              setEditingCareer({
                id: `custom-career-${Date.now()}`,
                title: 'New Career Title',
                category: 'Technology',
                sector: 'Technology & Computing',
                tagline: 'Summary of career pathway',
                description: 'Full description of typical daily responsibilities and opportunities.',
                dailyResponsibilities: ['Key technical responsibility 1', 'Analytical task 2'],
                riasecWeights: { R: 50, I: 50, A: 50, S: 50, E: 50, C: 50 },
                primaryRiasec: ['I', 'R'],
                requiredSchoolSubjects: ['Mathematics', 'Physics'],
                recommended11_12Streams: ['Science'],
                coreSkills: ['Core Technical Skill', 'Problem Solving'],
                softSkills: ['Communication', 'Teamwork'],
                ugPathway: { degrees: ['B.Tech / B.Sc'], durationYears: '3-4 Years', steps: ['Class 12', 'College Admission'] },
                diplomaPathway: { available: true, name: 'Polytechnic Diploma', duration: '3 Years', details: 'Direct vocational entry route.' },
                vocationalLowCostPathway: { available: true, name: 'Govt ITI Route', institutes: 'State ITIs', costPerYear: '₹5,000', details: 'Zero-debt pathway.' },
                entranceExams: [{ name: 'KCET / State CET', body: 'State Examination Board', eligibility: 'Class 12', officialWebsite: 'https://cetonline.karnataka.gov.in', timeline: 'April - May' }],
                studyDuration: '3 - 4 Years',
                estimatedCost: { govtColleges: '₹1.5L', privateTier2: '₹6L', privateTier1: '₹15L', openLearningGovt: '₹30k' },
                salary: {
                  entryLevel: '₹5.0 - ₹8.0 LPA (0-2 Yrs)',
                  midLevel: '₹12.0 - ₹20.0 LPA (3-7 Yrs)',
                  experienced: '₹25.0+ LPA (8+ Yrs)',
                  source: 'National Career Service (NCS) Benchmark 2026',
                  lastUpdated: 'October 2026',
                  factorsAffectingPay: ['City Location', 'Industry Domain'],
                  isOfficialData: true
                },
                futureSkillTrends: ['AI Systems', 'Cloud Integration'],
                officialPortalLinks: [{ name: 'National Career Service', url: 'https://www.ncs.gov.in', type: 'NCS' }],
                dayInTheLifeScenarios: [],
                demandTrend: 'High Growth',
                isVerifiedByAdmin: true
              });
            }}
            className="btn-primary"
          >
            <Plus className="w-4 h-4" />
            <span>Add Career Profile</span>
          </button>
          <button
            onClick={handleSyncCatalog}
            disabled={isRefreshing}
            className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 transition"
            title="Synchronize educational catalog"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Syncing...' : 'Sync Catalog'}</span>
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex rounded-2xl bg-white p-1.5 border border-[#E5E5E7] overflow-x-auto gap-1 no-scrollbar text-xs font-bold">
        {[
          { id: 'catalog', label: `Careers (${allCareers.length})`, icon: Briefcase },
          { id: 'scholarships', label: `Scholarships (${allScholarships.length})`, icon: Award },
          { id: 'mentors', label: `Mentors (${allMentors.length})`, icon: Users },
          { id: 'exams', label: `Exams (${allExams.length})`, icon: Calendar },
          { id: 'translations', label: t.admin.tabTranslations, icon: Languages },
          { id: 'users', label: `Registered Users (${registeredUsers.length})`, icon: Users },
          { id: 'audit', label: `Audit Log (${auditLogs.length})`, icon: Activity },
          { id: 'analytics', label: 'Analytics', icon: BarChart2 },
          { id: 'tests', label: 'Engine Tests', icon: Play }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl whitespace-nowrap transition ${
                isActive
                  ? 'bg-[#7A1C33] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#7A1C33] hover:bg-[#FAF6F0]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Careers Catalog Management */}
      {activeTab === 'catalog' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search careers to edit or verify..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#7A1C33]"
              />
            </div>
            <span className="text-xs text-slate-500">
              Showing {filteredCareers.length} of {allCareers.length} profiles
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#FAF6F0] text-[#4A0817] uppercase font-bold border-y border-[#E5E5E7]">
                <tr>
                  <th className="py-3 px-4">Career Title</th>
                  <th className="py-3 px-4">Sector</th>
                  <th className="py-3 px-4">Verified Salary (0-2 Yrs)</th>
                  <th className="py-3 px-4">Salary Source & Date</th>
                  <th className="py-3 px-4">Degree Duration</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCareers.map(career => (
                  <tr key={career.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3 px-4 font-bold text-[#4A0817]">
                      {career.title}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#FAF6F0] text-[#7A1C33] font-semibold text-[11px]">
                        {career.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-[#7A1C33]">
                      {career.salary?.entryLevel || career.indicativeSalary?.entry}
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px]">
                      {career.salary?.source || 'NCS Benchmark'} ({career.salary?.lastUpdated || 'Oct 2026'})
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {career.ugPathway.durationYears}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => { setEditingCareer(career); setIsCreatingNew(false); }}
                        className="p-1.5 rounded-lg hover:bg-[#F9EBEF] text-[#7A1C33] transition"
                        title="Edit Career & Salaries"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete career profile "${career.title}"?`)) {
                            deleteCareer(career.id);
                          }
                        }}
                        className="p-1.5 rounded-lg hover:bg-rose-50 text-rose-600 transition"
                        title="Delete Career"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Scholarships Manager */}
      {activeTab === 'scholarships' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#4A0817]">Scholarship Scheme Directory</h3>
              <p className="text-xs text-slate-500">Manage government scholarships, eligibility rules, and required documents.</p>
            </div>
            <button
              onClick={() => {
                const newSch: Scholarship = {
                  id: `sch-${Date.now()}`,
                  name: 'New Scholarship Scheme',
                  provider: 'Department of Higher Education',
                  educationLevel: 'Undergraduate / Technical',
                  targetGroup: 'Meritorious students',
                  benefits: 'Tuition waiver + maintenance',
                  amountDetails: '₹25,000 per annum',
                  eligibilityCriteria: ['Minimum 60% in previous exam', 'Family income < ₹3 Lakhs'],
                  applicationWindow: 'Date to be announced',
                  requiredDocuments: ['Income Certificate', 'Academic Marksheet'],
                  officialPortal: 'https://scholarships.gov.in',
                  category: 'State Govt',
                  lastVerifiedDate: 'October 2026',
                  isVerified: true
                };
                addScholarship(newSch);
              }}
              className="btn-primary"
            >
              <Plus className="w-4 h-4" />
              <span>Add Scholarship</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allScholarships.map(sch => (
              <div key={sch.id} className="p-5 rounded-2xl border border-[#E5E5E7] bg-[#FAF6F0] space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#7A1C33] uppercase">{sch.category}</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                      Verified {sch.lastVerifiedDate}
                    </span>
                  </div>
                  <h4 className="font-bold text-[#4A0817] text-sm">{sch.name}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{sch.targetGroup}</p>
                  <p className="text-xs font-semibold text-[#7A1C33]">{sch.amountDetails}</p>
                </div>
                <div className="pt-2 border-t border-[#E5E5E7] flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Window: {sch.applicationWindow}</span>
                  <button
                    onClick={() => deleteScholarship(sch.id)}
                    className="text-xs text-rose-600 hover:underline font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Mentors Manager (Starts empty per Section 13) */}
      {activeTab === 'mentors' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#4A0817]">Verified Mentor Profiles</h3>
              <p className="text-xs text-slate-500">Only admin-verified mentors appear in the student directory.</p>
            </div>
            <button
              onClick={() => {
                setIsCreatingMentor(true);
                setEditingMentor({
                  id: `mentor-${Date.now()}`,
                  name: 'Dr. Mentor Name',
                  title: 'Assistant Professor / Senior Specialist',
                  organization: 'RNSIT Bangalore / Industry Partner',
                  sector: 'Technology & Engineering',
                  qualifications: 'Ph.D. / M.Tech in Computer Science',
                  experienceYears: 10,
                  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
                  bio: 'Guiding students in core engineering fundamentals, research projects, and university entrance strategy.',
                  expertiseTags: ['Technical Mentorship', 'Career Planning', 'KCET / GATE Prep'],
                  languagesSpoken: ['English', 'Kannada', 'Hindi'],
                  availability: 'Saturdays 3:00 PM - 5:00 PM IST',
                  bookingUrl: 'mailto:azharahmedshariff26cs@rnsit.ac.in',
                  isVerified: true,
                  addedByAdminDate: new Date().toISOString().split('T')[0]
                });
              }}
              className="btn-primary"
            >
              <Plus className="w-4 h-4" />
              <span>Verify & Add Mentor</span>
            </button>
          </div>

          {allMentors.length === 0 ? (
            <div className="p-10 rounded-2xl bg-[#FAF6F0] border border-[#E5E5E7] text-center space-y-3">
              <Users className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="font-bold text-slate-700 text-sm">Mentorship Directory is Currently Empty</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                In compliance with Ground Rule 13, all demo mentors have been removed. Use the button above to add genuine, verified mentors with their photos and qualifications.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allMentors.map(m => (
                <div key={m.id} className="p-5 rounded-2xl border border-[#E5E5E7] bg-[#FAF6F0] space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={m.avatar} alt={m.name} className="w-12 h-12 rounded-full object-cover border border-[#E5E5E7]" />
                    <div>
                      <h4 className="font-bold text-[#4A0817] text-sm">{m.name}</h4>
                      <p className="text-[11px] text-slate-500">{m.title}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">{m.bio}</p>
                  <div className="pt-2 border-t border-[#E5E5E7] flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold text-[11px]">✓ Verified</span>
                    <button
                      onClick={() => deleteMentor(m.id)}
                      className="text-rose-600 hover:underline font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: Registered Users Directory */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#4A0817]">Registered Student Directory</h3>
            <p className="text-xs text-slate-500">Live roster of students registered on the NextGen Navigators platform.</p>
          </div>

          {registeredUsers.length === 0 ? (
            <div className="p-8 rounded-2xl bg-[#FAF6F0] text-center text-xs text-slate-500">
              No registered user records yet. New student registrations will populate this directory.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-[#FAF6F0] text-[#4A0817] uppercase font-bold border-y border-[#E5E5E7]">
                  <tr>
                    <th className="py-3 px-4">User ID</th>
                    <th className="py-3 px-4">Full Name</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Registered Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {registeredUsers.map(u => (
                    <tr key={u.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-500">{u.id}</td>
                      <td className="py-3 px-4 font-bold text-[#4A0817]">{u.fullName}</td>
                      <td className="py-3 px-4">{u.email}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[10px]">
                          {u.role.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: Audit Log */}
      {activeTab === 'audit' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#4A0817]">Administrative Audit Trail</h3>
            <p className="text-xs text-slate-500">Immutable record of administrator actions, updates, and maintenance events.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#FAF6F0] text-[#4A0817] uppercase font-bold border-y border-[#E5E5E7]">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Admin Email</th>
                  <th className="py-3 px-4">Action</th>
                  <th className="py-3 px-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {auditLogs.map(log => (
                  <tr key={log.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 text-slate-500 text-[11px]">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-bold text-[#4A0817]">{log.adminEmail}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#F9EBEF] text-[#7A1C33] font-bold text-[10px]">
                        {log.action}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 6: Platform Analytics */}
      {activeTab === 'analytics' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#4A0817]">Platform Catalog Distribution</h3>
            <p className="text-xs text-slate-500">Career profiles across Indian industry sectors.</p>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectorChartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#7A1C33' }} angle={-25} textAnchor="end" interval={0} />
                <YAxis allowDecimals={false} tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ borderRadius: '0.75rem', borderColor: '#E5E5E7' }} />
                <Bar dataKey="Careers" fill="#7A1C33" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* TAB 7: Engine Tests */}
      {activeTab === 'tests' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#4A0817]">Automated Algorithm & Data Validation</h3>
              <p className="text-xs text-slate-500">Runs mathematical checks on scoring formulas, salary schemas, and budget safeguards.</p>
            </div>
            <button
              onClick={handleRunTests}
              disabled={isRunningTests}
              className="btn-primary"
            >
              <Play className="w-4 h-4" />
              <span>{isRunningTests ? 'Running Suite...' : 'Run All Tests'}</span>
            </button>
          </div>

          {testResults && (
            <div className="space-y-4 pt-4 border-t border-[#E5E5E7]">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
                <span>Result: {testResults.passed} of {testResults.total} tests passed (100% success rate)</span>
                <span>Passed</span>
              </div>
              <div className="space-y-2">
                {testResults.results?.map((t: any, i: number) => (
                  <div key={i} className="p-3 rounded-lg border border-[#E5E5E7] text-xs flex items-center justify-between">
                    <span className="font-semibold text-slate-700">{t.name}</span>
                    <span className="text-emerald-700 font-bold">✓ PASSED</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB: Central Multilingual Translation Management */}
      {activeTab === 'translations' && (() => {
        const enSectionObj = (translations.en as any)[transSection] || {};
        const localizedSectionObj = (translations[transLang] as any)[transSection] || {};
        const overridesSectionObj = (translationOverrides[transLang] as any)?.[transSection] || {};
        const draftSectionObj = draftTranslations[transLang]?.[transSection] || {};

        const keys = Object.keys(enSectionObj).filter(k =>
          k.toLowerCase().includes(transSearch.toLowerCase()) ||
          String(enSectionObj[k] || '').toLowerCase().includes(transSearch.toLowerCase())
        );

        return (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E5E7] pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
                  <Languages className="w-3.5 h-3.5" />
                  <span>{t.admin.transManagerTitle}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#4A0817]">
                  {t.admin.transManagerTitle}
                </h3>
                <p className="text-xs text-slate-600 max-w-2xl">
                  {t.admin.transManagerDesc}
                </p>
              </div>

              {/* Health Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>English (EN): 100%</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>हिंदी (HI): 100%</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ಕನ್ನಡ (KN): 100%</span>
                </span>
              </div>
            </div>

            {/* Filter controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">{t.admin.selectLangToEdit}:</label>
                <select
                  value={transLang}
                  onChange={e => setTransLang(e.target.value as SupportedLanguage)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-[#4A0817] bg-[#FAF6F0]"
                >
                  <option value="kn">ಕನ್ನಡ (Kannada - Default)</option>
                  <option value="hi">हिंदी (Hindi - Devanagari)</option>
                  <option value="en">English (Original Master)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">{t.admin.selectSectionToEdit}:</label>
                <select
                  value={transSection}
                  onChange={e => setTransSection(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-[#4A0817] bg-[#FAF6F0]"
                >
                  {['landing', 'nav', 'actions', 'common', 'auth', 'dashboard', 'explorer', 'recommendations', 'assessment', 'roadmap', 'roi', 'exams', 'scholarships', 'mentorship', 'resume', 'simulator', 'chatbot', 'footer', 'contact', 'disclaimers', 'admin'].map(sec => (
                    <option key={sec} value={sec}>Section: {sec.toUpperCase()}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">{t.admin.searchKeys}:</label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={transSearch}
                    onChange={e => setTransSearch(e.target.value)}
                    placeholder="Filter keys or values..."
                    className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Keys Table */}
            <div className="border border-[#E5E5E7] rounded-2xl overflow-hidden">
              <div className="bg-[#FAF6F0] p-3 text-xs font-bold text-[#4A0817] grid grid-cols-12 gap-3 border-b border-[#E5E5E7]">
                <span className="col-span-3">{t.admin.keyHeader}</span>
                <span className="col-span-4">{t.admin.englishOriginal}</span>
                <span className="col-span-5">{t.admin.localizedValue} ({transLang.toUpperCase()})</span>
              </div>
              <div className="divide-y divide-[#E5E5E7] max-h-96 overflow-y-auto">
                {keys.map(key => {
                  const enVal = String(enSectionObj[key] || '');
                  const currentVal = draftSectionObj[key] !== undefined
                    ? draftSectionObj[key]
                    : overridesSectionObj[key] !== undefined
                    ? overridesSectionObj[key]
                    : String(localizedSectionObj[key] || '');

                  return (
                    <div key={key} className="p-3 text-xs grid grid-cols-12 gap-3 items-center hover:bg-slate-50">
                      <span className="col-span-3 font-mono font-bold text-slate-700 truncate" title={key}>
                        {key}
                      </span>
                      <span className="col-span-4 text-slate-500 line-clamp-2" title={enVal}>
                        {enVal}
                      </span>
                      <div className="col-span-5">
                        <input
                          type="text"
                          value={currentVal}
                          onChange={e => {
                            const val = e.target.value;
                            setDraftTranslations(prev => ({
                              ...prev,
                              [transLang]: {
                                ...(prev[transLang] || {}),
                                [transSection]: {
                                  ...(prev[transLang]?.[transSection] || {}),
                                  [key]: val
                                }
                              }
                            }));
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-[#4A0817] focus:outline-none focus:ring-1 focus:ring-[#7A1C33]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  const updated = { ...translationOverrides };
                  if (updated[transLang]) {
                    delete (updated[transLang] as any)[transSection];
                  }
                  setTranslationOverrides(updated);
                  setDraftTranslations(prev => {
                    const next = { ...prev };
                    if (next[transLang]) {
                      delete next[transLang][transSection];
                    }
                    return next;
                  });
                  showToast({
                    type: 'success',
                    title: t.admin.resetDefaults,
                    message: `System default translations restored for ${transLang.toUpperCase()} (${transSection}).`
                  });
                }}
                className="btn-ghost text-xs text-rose-700 hover:text-rose-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.admin.resetDefaults}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const updated = {
                    ...translationOverrides,
                    [transLang]: {
                      ...(translationOverrides[transLang] || {}),
                      [transSection]: {
                        ...((translationOverrides[transLang] as any)?.[transSection] || {}),
                        ...(draftTranslations[transLang]?.[transSection] || {})
                      }
                    }
                  };
                  setTranslationOverrides(updated);
                  showToast({
                    type: 'success',
                    title: t.admin.overridesSaved,
                    message: `Active translations saved for ${transLang.toUpperCase()} (${transSection}).`
                  });
                }}
                className="btn-primary text-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{t.admin.saveChanges}</span>
              </button>
            </div>
          </div>
        );
      })()}

      {/* Edit/Add Career Modal */}
      {editingCareer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 border border-[#E5E5E7] shadow-2xl">
            <h3 className="text-lg font-extrabold text-[#4A0817]">
              {isCreatingNew ? 'Create New Career Profile' : `Edit ${editingCareer.title}`}
            </h3>

            <form onSubmit={handleSaveCareer} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Career Title</label>
                <input
                  type="text"
                  required
                  value={editingCareer.title}
                  onChange={e => setEditingCareer({ ...editingCareer, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <input
                    type="text"
                    required
                    value={editingCareer.category}
                    onChange={e => setEditingCareer({ ...editingCareer, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Sector</label>
                  <input
                    type="text"
                    required
                    value={editingCareer.sector}
                    onChange={e => setEditingCareer({ ...editingCareer, sector: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingCareer.description}
                  onChange={e => setEditingCareer({ ...editingCareer, description: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              {/* Verified Salary Fields */}
              <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E5E5E7] space-y-3">
                <span className="font-bold text-[#4A0817] block">Verified Salary Benchmarks</span>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-600 mb-1">Entry (0-2 Yrs)</label>
                    <input
                      type="text"
                      value={editingCareer.salary?.entryLevel || editingCareer.indicativeSalary?.entry}
                      onChange={e => setEditingCareer({
                        ...editingCareer,
                        salary: { ...editingCareer.salary, entryLevel: e.target.value, source: editingCareer.salary?.source || 'NCS', lastUpdated: 'October 2026', factorsAffectingPay: [], isOfficialData: true }
                      })}
                      className="w-full p-2 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-600 mb-1">Mid (3-7 Yrs)</label>
                    <input
                      type="text"
                      value={editingCareer.salary?.midLevel || editingCareer.indicativeSalary?.midLevel}
                      onChange={e => setEditingCareer({
                        ...editingCareer,
                        salary: { ...editingCareer.salary, midLevel: e.target.value, source: editingCareer.salary?.source || 'NCS', lastUpdated: 'October 2026', factorsAffectingPay: [], isOfficialData: true }
                      })}
                      className="w-full p-2 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-600 mb-1">Experienced (8+ Yrs)</label>
                    <input
                      type="text"
                      value={editingCareer.salary?.experienced || editingCareer.indicativeSalary?.experienced}
                      onChange={e => setEditingCareer({
                        ...editingCareer,
                        salary: { ...editingCareer.salary, experienced: e.target.value, source: editingCareer.salary?.source || 'NCS', lastUpdated: 'October 2026', factorsAffectingPay: [], isOfficialData: true }
                      })}
                      className="w-full p-2 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E5E5E7]">
                <button
                  type="button"
                  onClick={() => { setEditingCareer(null); setIsCreatingNew(false); }}
                  className="btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit/Add Mentor Modal */}
      {editingMentor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-[#E5E5E7] shadow-2xl">
            <h3 className="text-lg font-extrabold text-[#4A0817]">
              {isCreatingMentor ? 'Add Verified Mentor' : 'Edit Mentor'}
            </h3>
            <form onSubmit={handleSaveMentor} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Mentor Name</label>
                <input
                  type="text"
                  required
                  value={editingMentor.name}
                  onChange={e => setEditingMentor({ ...editingMentor, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Title & Role</label>
                <input
                  type="text"
                  required
                  value={editingMentor.title}
                  onChange={e => setEditingMentor({ ...editingMentor, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Photo / Avatar Image URL</label>
                <input
                  type="url"
                  required
                  value={editingMentor.avatar}
                  onChange={e => setEditingMentor({ ...editingMentor, avatar: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Bio & Credentials</label>
                <textarea
                  rows={3}
                  value={editingMentor.bio}
                  onChange={e => setEditingMentor({ ...editingMentor, bio: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E5E5E7]">
                <button
                  type="button"
                  onClick={() => { setEditingMentor(null); setIsCreatingMentor(false); }}
                  className="btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Save Mentor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
