import { supabase, isSupabaseConfigured } from '../lib/supabase';
import {
  StudentProfile,
  Career,
  Scholarship,
  EntranceExamTimeline,
  Mentor,
  MentorshipSession,
  AdminAuditLog,
  AuthSession,
  UserRole
} from '../types';

/**
 * NextGen Navigators - Supabase Data Access Service
 * Provides robust CRUD operations with validation, error handling,
 * and transparent configuration status checking.
 */

// =============================================================================
// AUTHENTICATION SERVICES
// =============================================================================

export async function supabaseSignUp(
  fullName: string,
  email: string,
  password: string,
  role: UserRole = 'student'
): Promise<{ success: boolean; session?: AuthSession; message: string }> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: 'Account registration is currently unavailable. Please try again shortly.'
    };
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: {
          full_name: fullName.trim(),
          role
        }
      }
    });

    if (error) {
      return { success: false, message: error.message };
    }

    if (!data.user) {
      return { success: false, message: 'Registration failed. Please try again.' };
    }

    const session: AuthSession = {
      token: data.session?.access_token || `token-${Date.now()}`,
      user: {
        id: data.user.id,
        email: data.user.email || email,
        fullName: fullName.trim(),
        role
      },
      expiresAt: (data.session?.expires_at ? data.session.expires_at * 1000 : Date.now() + 7 * 86400000)
    };

    return {
      success: true,
      session,
      message: 'Account successfully registered.'
    };
  } catch (err: any) {
    return { success: false, message: err.message || 'An unexpected error occurred during signup.' };
  }
}

export async function supabaseSignIn(
  email: string,
  password: string
): Promise<{ success: boolean; session?: AuthSession; message: string }> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: 'Sign-in service is currently unavailable. Please try again shortly.'
    };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password
    });

    if (error) {
      return { success: false, message: error.message };
    }

    if (!data.user) {
      return { success: false, message: 'Invalid credentials.' };
    }

    // Determine user role from metadata or profile table
    let role: UserRole = (data.user.user_metadata?.role as UserRole) || 'student';
    let fullName: string = data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || 'User';

    // Verify role in profiles table
    const { data: profileRow } = await supabase
      .from('profiles')
      .select('full_name, role')
      .eq('id', data.user.id)
      .maybeSingle();

    if (profileRow) {
      role = (profileRow.role as UserRole) || role;
      fullName = profileRow.full_name || fullName;
    }

    const session: AuthSession = {
      token: data.session?.access_token || `token-${Date.now()}`,
      user: {
        id: data.user.id,
        email: data.user.email || email,
        fullName,
        role
      },
      expiresAt: (data.session?.expires_at ? data.session.expires_at * 1000 : Date.now() + 7 * 86400000)
    };

    return {
      success: true,
      session,
      message: `Signed in as ${fullName}.`
    };
  } catch (err: any) {
    return { success: false, message: err.message || 'Authentication failed.' };
  }
}

export async function supabaseSignOut(): Promise<void> {
  if (isSupabaseConfigured()) {
    try {
      await supabase.auth.signOut();
    } catch {}
  }
}

// =============================================================================
// STUDENT PROFILE SERVICES
// =============================================================================

export async function fetchSupabaseStudentProfile(userId: string): Promise<StudentProfile | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const { data, error } = await supabase
      .from('student_profiles')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (error || !data) return null;

    return {
      id: data.id,
      userId: data.user_id,
      fullName: data.full_name,
      age: data.age || 16,
      gender: data.gender,
      classLevel: data.class_level,
      guardianConsent: data.guardian_consent ?? true,
      schoolName: data.school_name,
      city: data.city,
      state: data.state,
      preferredLanguage: data.preferred_language || 'en',
      preferredSubjects: data.preferred_subjects || [],
      challengingSubjects: data.challenging_subjects || [],
      academicScoreRange: data.academic_score_range || '70-85%',
      selectedStreamNEP: data.selected_stream_nep || [],
      interests: data.interests || [],
      hobbies: data.hobbies || [],
      selfReportedStrengths: data.self_reported_strengths || [],
      preferredWorkActivities: data.preferred_work_activities || [],
      learningStyle: data.learning_style || 'Mixed',
      budgetTier: data.budget_tier || 'medium',
      maxFamilyAnnualContribution: data.max_family_annual_contribution || 50000,
      studyLocationPreference: data.study_location_preference || 'Karnataka / Home State',
      willingnessToRelocate: data.willingness_to_relocate || false,
      longTermAspirations: data.long_term_aspirations || '',
      riasecScores: data.riasec_scores || { R: 20, I: 20, A: 20, S: 20, E: 20, C: 20 },
      categoryAptitudeScores: data.category_aptitude_scores || {},
      activeAssessmentCategory: data.active_assessment_category || 'comprehensive',
      assessmentCompleted: data.assessment_completed || false,
      assessmentDate: data.assessment_date,
      savedCareers: data.saved_careers || [],
      completedRoadmapTasks: data.completed_roadmap_tasks || {},
      customRoadmapNotes: data.custom_roadmap_notes || {},
      pinnedExams: data.pinned_exams || ['exam-kcet-kea'],
      scenarioFeedback: data.scenario_feedback || {},
      skillsInventory: data.skills_inventory || [],
      softSkillsInventory: data.soft_skills_inventory || [],
      educationHistory: data.education_history || [],
      achievements: data.achievements || [],
      certifications: data.certifications || [],
      languagesKnown: data.languages_known || ['English', 'Hindi', 'Kannada'],
      experienceLogged: data.experience_logged || [],
      projectsLogged: data.projects_logged || []
    };
  } catch {
    return null;
  }
}

export async function upsertSupabaseStudentProfile(
  profile: StudentProfile,
  userId: string
): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: 'Profile changes could not be saved at this time.'
    };
  }

  try {
    const payload = {
      id: profile.id || `profile-${userId}`,
      user_id: userId,
      full_name: profile.fullName || 'Student',
      age: profile.age,
      gender: profile.gender,
      class_level: profile.classLevel,
      guardian_consent: profile.guardianConsent,
      school_name: profile.schoolName,
      city: profile.city,
      state: profile.state,
      preferred_language: profile.preferredLanguage,
      preferred_subjects: profile.preferredSubjects,
      challenging_subjects: profile.challengingSubjects,
      academic_score_range: profile.academicScoreRange,
      selected_stream_nep: profile.selectedStreamNEP,
      interests: profile.interests,
      hobbies: profile.hobbies,
      self_reported_strengths: profile.selfReportedStrengths,
      preferred_work_activities: profile.preferredWorkActivities,
      learning_style: profile.learningStyle,
      budget_tier: profile.budgetTier,
      max_family_annual_contribution: profile.maxFamilyAnnualContribution,
      study_location_preference: profile.studyLocationPreference,
      willingness_to_relocate: profile.willingnessToRelocate,
      long_term_aspirations: profile.longTermAspirations,
      riasec_scores: profile.riasecScores,
      category_aptitude_scores: profile.categoryAptitudeScores,
      active_assessment_category: profile.activeAssessmentCategory,
      assessment_completed: profile.assessmentCompleted,
      assessment_date: profile.assessmentDate,
      saved_careers: profile.savedCareers,
      completed_roadmap_tasks: profile.completedRoadmapTasks,
      custom_roadmap_notes: profile.customRoadmapNotes,
      pinned_exams: profile.pinnedExams,
      scenario_feedback: profile.scenarioFeedback,
      skills_inventory: profile.skillsInventory,
      soft_skills_inventory: profile.softSkillsInventory,
      education_history: profile.educationHistory,
      achievements: profile.achievements,
      certifications: profile.certifications,
      languages_known: profile.languagesKnown,
      experience_logged: profile.experienceLogged,
      projects_logged: profile.projectsLogged,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('student_profiles')
      .upsert(payload, { onConflict: 'user_id' });

    if (error) {
      return { success: false, message: error.message };
    }

    return { success: true, message: 'Profile updated successfully.' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to save profile to database.' };
  }
}

// =============================================================================
// CAREERS DATA SERVICES
// =============================================================================

export async function fetchSupabaseCareers(): Promise<Career[] | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .order('title', { ascending: true });

    if (error || !data || data.length === 0) return null;

    return data.map(row => ({
      id: row.id,
      title: row.title,
      hindiTitle: row.hindi_title,
      kannadaTitle: row.kannada_title,
      category: row.category,
      sector: row.sector,
      tagline: row.tagline,
      description: row.description,
      dailyResponsibilities: row.daily_responsibilities || [],
      riasecWeights: row.riasec_weights,
      primaryRiasec: row.primary_riasec,
      requiredSchoolSubjects: row.required_school_subjects,
      recommended11_12Streams: row.recommended_11_12_streams || [],
      coreSkills: row.core_skills,
      softSkills: row.soft_skills || [],
      ugPathway: row.ug_pathway,
      diplomaPathway: row.diploma_pathway,
      vocationalLowCostPathway: row.vocational_low_cost_pathway,
      entranceExams: row.entrance_exams || [],
      studyDuration: row.study_duration,
      estimatedCost: row.estimated_cost,
      salary: row.salary,
      indicativeSalary: row.indicative_salary,
      futureSkillTrends: row.future_skill_trends || [],
      officialPortalLinks: row.official_portal_links || [],
      dayInTheLifeScenarios: row.day_in_the_life_scenarios || [],
      demandTrend: row.demand_trend,
      isVerifiedByAdmin: row.is_verified_by_admin,
      futureOpportunities: row.future_opportunities
    }));
  } catch {
    return null;
  }
}

export async function upsertSupabaseCareer(career: Career): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, message: 'Service unavailable.' };
  }

  try {
    const payload = {
      id: career.id,
      title: career.title,
      hindi_title: career.hindiTitle,
      kannada_title: career.kannadaTitle,
      category: career.category,
      sector: career.sector,
      tagline: career.tagline,
      description: career.description,
      daily_responsibilities: career.dailyResponsibilities,
      riasec_weights: career.riasecWeights,
      primary_riasec: career.primaryRiasec,
      required_school_subjects: career.requiredSchoolSubjects,
      recommended_11_12_streams: career.recommended11_12Streams,
      core_skills: career.coreSkills,
      soft_skills: career.softSkills,
      ug_pathway: career.ugPathway,
      diploma_pathway: career.diplomaPathway,
      vocational_low_cost_pathway: career.vocationalLowCostPathway,
      entrance_exams: career.entranceExams,
      study_duration: career.studyDuration,
      estimated_cost: career.estimatedCost,
      salary: career.salary,
      indicative_salary: career.indicativeSalary,
      future_skill_trends: career.futureSkillTrends,
      official_portal_links: career.officialPortalLinks,
      day_in_the_life_scenarios: career.dayInTheLifeScenarios,
      demand_trend: career.demandTrend,
      is_verified_by_admin: career.isVerifiedByAdmin,
      future_opportunities: career.futureOpportunities,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase.from('careers').upsert(payload);
    if (error) return { success: false, message: error.message };
    return { success: true, message: `Career profile ${career.title} updated.` };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

export async function deleteSupabaseCareer(careerId: string): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) return { success: false, message: 'Service unavailable.' };
  try {
    const { error } = await supabase.from('careers').delete().eq('id', careerId);
    if (error) return { success: false, message: error.message };
    return { success: true, message: 'Career deleted successfully.' };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

// =============================================================================
// SCHOLARSHIPS SERVICES
// =============================================================================

export async function fetchSupabaseScholarships(): Promise<Scholarship[] | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const { data, error } = await supabase.from('scholarships').select('*');
    if (error || !data || data.length === 0) return null;

    return data.map(row => ({
      id: row.id,
      name: row.name,
      hindiName: row.hindi_name,
      kannadaName: row.kannada_name,
      provider: row.provider,
      educationLevel: row.education_level,
      targetGroup: row.target_group,
      benefits: row.benefits,
      amountDetails: row.amount_details,
      eligibilityCriteria: row.eligibility_criteria || [],
      applicationWindow: row.application_window,
      requiredDocuments: row.required_documents || [],
      officialPortal: row.official_portal,
      category: row.category,
      lastVerifiedDate: row.last_verified_date,
      isVerified: row.is_verified
    }));
  } catch {
    return null;
  }
}

export async function upsertSupabaseScholarship(scholarship: Scholarship): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) return { success: false, message: 'Service unavailable.' };
  try {
    const payload = {
      id: scholarship.id,
      name: scholarship.name,
      hindi_name: scholarship.hindiName,
      kannada_name: scholarship.kannadaName,
      provider: scholarship.provider,
      education_level: scholarship.educationLevel,
      target_group: scholarship.targetGroup,
      benefits: scholarship.benefits,
      amount_details: scholarship.amountDetails,
      eligibility_criteria: scholarship.eligibilityCriteria,
      application_window: scholarship.applicationWindow,
      required_documents: scholarship.requiredDocuments,
      official_portal: scholarship.officialPortal,
      category: scholarship.category,
      last_verified_date: scholarship.lastVerifiedDate,
      is_verified: scholarship.isVerified,
      updated_at: new Date().toISOString()
    };
    const { error } = await supabase.from('scholarships').upsert(payload);
    if (error) return { success: false, message: error.message };
    return { success: true, message: `Scholarship ${scholarship.name} updated.` };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

export async function deleteSupabaseScholarship(id: string): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) return { success: false, message: 'Service unavailable.' };
  try {
    const { error } = await supabase.from('scholarships').delete().eq('id', id);
    if (error) return { success: false, message: error.message };
    return { success: true, message: 'Scholarship removed successfully.' };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

// =============================================================================
// MENTORS SERVICES
// =============================================================================

export async function fetchSupabaseMentors(): Promise<Mentor[] | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const { data, error } = await supabase.from('mentors').select('*');
    if (error || !data) return null;

    return data.map(row => ({
      id: row.id,
      name: row.name,
      title: row.title,
      organization: row.organization,
      sector: row.sector,
      qualifications: row.qualifications,
      experienceYears: row.experience_years,
      avatar: row.avatar,
      bio: row.bio,
      expertiseTags: row.expertise_tags || [],
      languagesSpoken: row.languages_spoken || [],
      availability: row.availability,
      bookingUrl: row.booking_url,
      isVerified: row.is_verified,
      addedByAdminDate: row.added_by_admin_date
    }));
  } catch {
    return null;
  }
}

export async function upsertSupabaseMentor(mentor: Mentor): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) return { success: false, message: 'Service unavailable.' };
  try {
    const payload = {
      id: mentor.id,
      name: mentor.name,
      title: mentor.title,
      organization: mentor.organization,
      sector: mentor.sector,
      qualifications: mentor.qualifications,
      experience_years: mentor.experienceYears,
      avatar: mentor.avatar,
      bio: mentor.bio,
      expertise_tags: mentor.expertiseTags,
      languages_spoken: mentor.languagesSpoken,
      availability: mentor.availability,
      booking_url: mentor.bookingUrl,
      is_verified: mentor.isVerified,
      added_by_admin_date: mentor.addedByAdminDate || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    const { error } = await supabase.from('mentors').upsert(payload);
    if (error) return { success: false, message: error.message };
    return { success: true, message: `Mentor ${mentor.name} updated.` };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

export async function deleteSupabaseMentor(id: string): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) return { success: false, message: 'Service unavailable.' };
  try {
    const { error } = await supabase.from('mentors').delete().eq('id', id);
    if (error) return { success: false, message: error.message };
    return { success: true, message: 'Mentor profile removed successfully.' };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

// =============================================================================
// MENTORSHIP SESSIONS SERVICES
// =============================================================================

export async function fetchSupabaseMentorshipSessions(
  userId?: string,
  role?: UserRole
): Promise<MentorshipSession[] | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    let query = supabase.from('mentorship_sessions').select('*');
    if (role !== 'admin' && userId) {
      query = query.eq('student_id', userId);
    }
    const { data, error } = await query.order('created_at', { ascending: false });
    if (error || !data) return null;

    return data.map(row => ({
      id: row.id,
      studentId: row.student_id,
      studentName: row.student_name,
      mentorId: row.mentor_id,
      mentorName: row.mentor_name,
      mentorRole: row.mentor_role,
      mentorOrg: row.mentor_org,
      topic: row.topic,
      requestedDate: row.requested_date,
      preferredTime: row.preferred_time,
      status: row.status,
      meetingLink: row.meeting_link,
      studentQuestion: row.student_question
    }));
  } catch {
    return null;
  }
}

export async function insertSupabaseMentorshipSession(
  session: MentorshipSession
): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) return { success: false, message: 'Service unavailable.' };
  try {
    const payload = {
      id: session.id,
      student_id: session.studentId.includes('usr-') || session.studentId.includes('profile-') ? null : session.studentId,
      student_name: session.studentName,
      mentor_id: session.mentorId,
      mentor_name: session.mentorName,
      mentor_role: session.mentorRole,
      mentor_org: session.mentorOrg,
      topic: session.topic,
      requested_date: session.requestedDate,
      preferred_time: session.preferredTime,
      status: session.status,
      meeting_link: session.meetingLink,
      student_question: session.studentQuestion
    };
    const { error } = await supabase.from('mentorship_sessions').insert(payload);
    if (error) return { success: false, message: error.message };
    return { success: true, message: 'Mentorship request submitted successfully.' };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

export async function updateSupabaseMentorshipStatus(
  sessionId: string,
  status: MentorshipSession['status']
): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) return { success: false, message: 'Service unavailable.' };
  try {
    const { error } = await supabase
      .from('mentorship_sessions')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', sessionId);

    if (error) return { success: false, message: error.message };
    return { success: true, message: `Session status updated to ${status}.` };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

// =============================================================================
// AUDIT LOGS SERVICES
// =============================================================================

export async function insertSupabaseAuditLog(
  adminEmail: string,
  action: string,
  details: string
): Promise<void> {
  if (!isSupabaseConfigured()) return;
  try {
    await supabase.from('admin_audit_logs').insert({
      id: `audit-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      admin_email: adminEmail,
      action,
      details,
      ip_address: 'browser-client'
    });
  } catch {}
}

export async function fetchSupabaseAuditLogs(): Promise<AdminAuditLog[] | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const { data, error } = await supabase
      .from('admin_audit_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error || !data) return null;

    return data.map(row => ({
      id: row.id,
      adminEmail: row.admin_email,
      action: row.action,
      details: row.details,
      timestamp: row.created_at,
      ipAddress: row.ip_address
    }));
  } catch {
    return null;
  }
}

// =============================================================================
// DATABASE SEED SERVICE (Populates Supabase on First Connect)
// =============================================================================

export async function seedSupabaseDatabase(
  careers: Career[],
  scholarships: Scholarship[],
  exams: EntranceExamTimeline[]
): Promise<{ success: boolean; count: number; message: string }> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      count: 0,
      message: 'Catalog initialization service unavailable.'
    };
  }

  try {
    let seededCount = 0;

    // 1. Seed Careers
    const careersPayload = careers.map(c => ({
      id: c.id,
      title: c.title,
      hindi_title: c.hindiTitle,
      kannada_title: c.kannadaTitle,
      category: c.category,
      sector: c.sector,
      tagline: c.tagline,
      description: c.description,
      daily_responsibilities: c.dailyResponsibilities,
      riasec_weights: c.riasecWeights,
      primary_riasec: c.primaryRiasec,
      required_school_subjects: c.requiredSchoolSubjects,
      recommended_11_12_streams: c.recommended11_12Streams,
      core_skills: c.coreSkills,
      soft_skills: c.softSkills,
      ug_pathway: c.ugPathway,
      diploma_pathway: c.diplomaPathway,
      vocational_low_cost_pathway: c.vocationalLowCostPathway,
      entrance_exams: c.entranceExams,
      study_duration: c.studyDuration,
      estimated_cost: c.estimatedCost,
      salary: c.salary,
      indicative_salary: c.indicativeSalary,
      future_skill_trends: c.futureSkillTrends,
      official_portal_links: c.officialPortalLinks,
      day_in_the_life_scenarios: c.dayInTheLifeScenarios,
      demand_trend: c.demandTrend,
      is_verified_by_admin: c.isVerifiedByAdmin,
      future_opportunities: c.futureOpportunities
    }));

    const { error: careersErr } = await supabase.from('careers').upsert(careersPayload);
    if (!careersErr) seededCount += careersPayload.length;

    // 2. Seed Scholarships
    const scholarshipsPayload = scholarships.map(s => ({
      id: s.id,
      name: s.name,
      hindi_name: s.hindiName,
      kannada_name: s.kannadaName,
      provider: s.provider,
      education_level: s.educationLevel,
      target_group: s.targetGroup,
      benefits: s.benefits,
      amount_details: s.amountDetails,
      eligibility_criteria: s.eligibilityCriteria,
      application_window: s.applicationWindow,
      required_documents: s.requiredDocuments,
      official_portal: s.officialPortal,
      category: s.category,
      last_verified_date: s.lastVerifiedDate,
      is_verified: s.isVerified
    }));

    const { error: schErr } = await supabase.from('scholarships').upsert(scholarshipsPayload);
    if (!schErr) seededCount += scholarshipsPayload.length;

    // 3. Seed Exams
    const examsPayload = exams.map(e => ({
      id: e.id,
      name: e.name,
      full_name: e.fullName,
      purpose: e.purpose,
      eligible_level: e.eligibleLevel,
      conducted_by: e.conductedBy,
      applicable_careers: e.applicableCareers,
      typical_registration_window: e.typicalRegistrationWindow,
      exam_month: e.examMonth,
      is_announced: e.isAnnounced,
      unannounced_notice: e.unannouncedNotice,
      eligibility: e.eligibility,
      exam_pattern: e.examPattern,
      official_link: e.officialLink,
      last_verified_date: e.lastVerifiedDate,
      free_prep_resources: e.freePrepResources,
      key_milestones: e.keyMilestones
    }));

    const { error: examsErr } = await supabase.from('entrance_exams').upsert(examsPayload);
    if (!examsErr) seededCount += examsPayload.length;

    return {
      success: true,
      count: seededCount,
      message: `Successfully populated ${seededCount} records in catalog.`
    };
  } catch (err: any) {
    return { success: false, count: 0, message: err.message || 'Seeding failed.' };
  }
}

