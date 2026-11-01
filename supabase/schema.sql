-- =============================================================================
-- NextGen Navigators - Production Supabase PostgreSQL Schema & Security Policies
-- File: supabase/schema.sql
-- Description: Non-destructive, idempotent database schema for NextGen Navigators
-- =============================================================================

-- Enable required extensions (safe and idempotent)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================================
-- 1. PROFILES TABLE (User metadata & roles linked to auth.users)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 2. STUDENT PROFILES TABLE (Aptitude, Academics, Saved Careers, Roadmaps, Resume)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.student_profiles (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
    full_name TEXT NOT NULL,
    age INTEGER DEFAULT 16,
    gender TEXT,
    class_level TEXT NOT NULL DEFAULT 'Class 11-12',
    guardian_consent BOOLEAN DEFAULT TRUE,
    school_name TEXT,
    city TEXT,
    state TEXT,
    preferred_language TEXT DEFAULT 'en',
    
    -- Academic Preferences
    preferred_subjects TEXT[] DEFAULT '{}',
    challenging_subjects TEXT[] DEFAULT '{}',
    academic_score_range TEXT DEFAULT '70-85%',
    selected_stream_nep TEXT[] DEFAULT '{}',
    
    -- Strengths & Work Style
    interests TEXT[] DEFAULT '{}',
    hobbies TEXT[] DEFAULT '{}',
    self_reported_strengths TEXT[] DEFAULT '{}',
    preferred_work_activities TEXT[] DEFAULT '{}',
    learning_style TEXT DEFAULT 'Mixed',
    
    -- Practical & Financial
    budget_tier TEXT DEFAULT 'medium',
    max_family_annual_contribution NUMERIC DEFAULT 50000,
    study_location_preference TEXT DEFAULT 'Karnataka / Home State',
    willingness_to_relocate BOOLEAN DEFAULT FALSE,
    long_term_aspirations TEXT DEFAULT '',
    
    -- Dynamic RIASEC Assessment State
    riasec_scores JSONB DEFAULT '{"R": 20, "I": 20, "A": 20, "S": 20, "E": 20, "C": 20}'::jsonb,
    category_aptitude_scores JSONB DEFAULT '{}'::jsonb,
    active_assessment_category TEXT DEFAULT 'comprehensive',
    assessment_completed BOOLEAN DEFAULT FALSE,
    assessment_date TIMESTAMPTZ,
    
    -- Interactive Roadmap & Saved Data
    saved_careers TEXT[] DEFAULT '{}',
    completed_roadmap_tasks JSONB DEFAULT '{}'::jsonb,
    custom_roadmap_notes JSONB DEFAULT '{}'::jsonb,
    pinned_exams TEXT[] DEFAULT '{"exam-kcet-kea"}',
    scenario_feedback JSONB DEFAULT '{}'::jsonb,
    
    -- Resume & Skills Portfolio
    skills_inventory JSONB DEFAULT '[]'::jsonb,
    soft_skills_inventory TEXT[] DEFAULT '{}',
    education_history JSONB DEFAULT '[]'::jsonb,
    achievements TEXT[] DEFAULT '{}',
    certifications JSONB DEFAULT '[]'::jsonb,
    languages_known TEXT[] DEFAULT '{"English", "Hindi", "Kannada"}',
    experience_logged JSONB DEFAULT '[]'::jsonb,
    projects_logged JSONB DEFAULT '[]'::jsonb,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 3. CAREERS CATALOG TABLE (Verified 35+ Indian Career Pathways)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.careers (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    hindi_title TEXT,
    kannada_title TEXT,
    category TEXT NOT NULL,
    sector TEXT NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    daily_responsibilities TEXT[] DEFAULT '{}',
    riasec_weights JSONB NOT NULL,
    primary_riasec TEXT[] NOT NULL,
    required_school_subjects TEXT[] NOT NULL,
    recommended_11_12_streams TEXT[] DEFAULT '{}',
    core_skills TEXT[] NOT NULL,
    soft_skills TEXT[] DEFAULT '{}',
    
    -- Multi-Tier Pathways
    ug_pathway JSONB NOT NULL,
    diploma_pathway JSONB,
    vocational_low_cost_pathway JSONB,
    
    -- Entrance Exams & Costs
    entrance_exams JSONB DEFAULT '[]'::jsonb,
    study_duration TEXT NOT NULL,
    estimated_cost JSONB NOT NULL,
    salary JSONB NOT NULL,
    indicative_salary JSONB,
    
    -- Skill Trends & Portals
    future_skill_trends TEXT[] DEFAULT '{}',
    official_portal_links JSONB DEFAULT '[]'::jsonb,
    day_in_the_life_scenarios JSONB DEFAULT '[]'::jsonb,
    demand_trend TEXT NOT NULL DEFAULT 'High Growth',
    is_verified_by_admin BOOLEAN DEFAULT TRUE,
    future_opportunities TEXT,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 4. SCHOLARSHIPS TABLE (Central, State & Technical Financial Aid Schemes)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.scholarships (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    hindi_name TEXT,
    kannada_name TEXT,
    provider TEXT NOT NULL,
    education_level TEXT NOT NULL,
    target_group TEXT NOT NULL,
    benefits TEXT NOT NULL,
    amount_details TEXT NOT NULL,
    eligibility_criteria TEXT[] NOT NULL,
    application_window TEXT NOT NULL,
    required_documents TEXT[] DEFAULT '{}',
    official_portal TEXT NOT NULL,
    category TEXT NOT NULL,
    last_verified_date TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT TRUE,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 5. ENTRANCE EXAMS TABLE (National & State Schedules)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.entrance_exams (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    full_name TEXT NOT NULL,
    purpose TEXT NOT NULL,
    eligible_level TEXT NOT NULL,
    conducted_by TEXT NOT NULL,
    applicable_careers TEXT[] DEFAULT '{}',
    typical_registration_window TEXT,
    exam_month TEXT,
    is_announced BOOLEAN DEFAULT FALSE,
    unannounced_notice TEXT,
    eligibility TEXT NOT NULL,
    exam_pattern TEXT NOT NULL,
    official_link TEXT NOT NULL,
    last_verified_date TEXT NOT NULL,
    free_prep_resources JSONB DEFAULT '[]'::jsonb,
    key_milestones JSONB DEFAULT '[]'::jsonb,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 6. MENTORS TABLE (Verified Educator & Industry Directory)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.mentors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    organization TEXT NOT NULL,
    sector TEXT NOT NULL,
    qualifications TEXT NOT NULL,
    experience_years INTEGER NOT NULL DEFAULT 1,
    avatar TEXT NOT NULL,
    bio TEXT NOT NULL,
    expertise_tags TEXT[] DEFAULT '{}',
    languages_spoken TEXT[] DEFAULT '{}',
    availability TEXT NOT NULL,
    booking_url TEXT,
    is_verified BOOLEAN DEFAULT TRUE,
    added_by_admin_date TEXT,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 7. MENTORSHIP SESSIONS TABLE (Student Guidance Requests)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.mentorship_sessions (
    id TEXT PRIMARY KEY,
    student_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    student_name TEXT NOT NULL,
    mentor_id TEXT NOT NULL,
    mentor_name TEXT NOT NULL,
    mentor_role TEXT NOT NULL,
    mentor_org TEXT NOT NULL,
    topic TEXT NOT NULL,
    requested_date DATE NOT NULL,
    preferred_time TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Requested' CHECK (status IN ('Requested', 'Confirmed', 'Completed', 'Rescheduled')),
    meeting_link TEXT,
    student_question TEXT NOT NULL,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- 8. ADMIN AUDIT LOGS TABLE (Platform Integrity Audit Trail)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.admin_audit_logs (
    id TEXT PRIMARY KEY,
    admin_email TEXT NOT NULL,
    action TEXT NOT NULL,
    details TEXT NOT NULL,
    ip_address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- PERFORMANCE INDEXES (Safe & Non-Destructive)
-- =============================================================================
CREATE INDEX IF NOT EXISTS idx_student_profiles_user_id ON public.student_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_careers_category ON public.careers(category);
CREATE INDEX IF NOT EXISTS idx_careers_demand_trend ON public.careers(demand_trend);
CREATE INDEX IF NOT EXISTS idx_scholarships_category ON public.scholarships(category);
CREATE INDEX IF NOT EXISTS idx_entrance_exams_conducted_by ON public.entrance_exams(conducted_by);
CREATE INDEX IF NOT EXISTS idx_mentors_sector ON public.mentors(sector);
CREATE INDEX IF NOT EXISTS idx_mentorship_sessions_student_id ON public.mentorship_sessions(student_id);
CREATE INDEX IF NOT EXISTS idx_mentorship_sessions_status ON public.mentorship_sessions(status);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_created_at ON public.admin_audit_logs(created_at DESC);

-- =============================================================================
-- AUTOMATIC updated_at TIMESTAMP FUNCTION
-- =============================================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at (recreated safely)
DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_student_profiles_updated_at ON public.student_profiles;
CREATE TRIGGER set_student_profiles_updated_at
BEFORE UPDATE ON public.student_profiles
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_careers_updated_at ON public.careers;
CREATE TRIGGER set_careers_updated_at
BEFORE UPDATE ON public.careers
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_scholarships_updated_at ON public.scholarships;
CREATE TRIGGER set_scholarships_updated_at
BEFORE UPDATE ON public.scholarships
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_mentorship_sessions_updated_at ON public.mentorship_sessions;
CREATE TRIGGER set_mentorship_sessions_updated_at
BEFORE UPDATE ON public.mentorship_sessions
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- =============================================================================
-- HELPER FUNCTION: CHECK IF CURRENT AUTHENTICATED USER IS AN ADMIN
-- =============================================================================
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN (
        (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin' OR
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================================================
-- AUTOMATIC NEW USER INITIALIZATION TRIGGER
-- Automatically provisions profiles and student_profiles upon auth signup
-- =============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS TRIGGER AS $$
DECLARE
    user_full_name TEXT;
    user_role TEXT;
BEGIN
    user_full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1));
    user_role := COALESCE(NEW.raw_user_meta_data->>'role', 'student');

    -- Insert into public.profiles
    INSERT INTO public.profiles (id, full_name, email, role)
    VALUES (NEW.id, user_full_name, NEW.email, user_role)
    ON CONFLICT (id) DO UPDATE
    SET full_name = EXCLUDED.full_name, email = EXCLUDED.email;

    -- If student, initialize student profile
    IF user_role = 'student' THEN
        INSERT INTO public.student_profiles (id, user_id, full_name)
        VALUES ('profile-' || NEW.id, NEW.id, user_full_name)
        ON CONFLICT (user_id) DO NOTHING;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_auth_user();

-- =============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Strict least-privilege access rules protecting private user data
-- =============================================================================

-- Enable RLS across all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.entrance_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentorship_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_audit_logs ENABLE ROW LEVEL SECURITY;

-- -----------------------------------------------------------------------------
-- 1. PROFILES POLICIES
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id OR public.is_admin());

-- -----------------------------------------------------------------------------
-- 2. STUDENT PROFILES POLICIES (Strict Student Data Isolation)
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Students can view their own student profile" ON public.student_profiles;
CREATE POLICY "Students can view their own student profile"
ON public.student_profiles FOR SELECT
USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Students can insert their own student profile" ON public.student_profiles;
CREATE POLICY "Students can insert their own student profile"
ON public.student_profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Students can update their own student profile" ON public.student_profiles;
CREATE POLICY "Students can update their own student profile"
ON public.student_profiles FOR UPDATE
USING (auth.uid() = user_id OR public.is_admin())
WITH CHECK (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Students can delete their own student profile" ON public.student_profiles;
CREATE POLICY "Students can delete their own student profile"
ON public.student_profiles FOR DELETE
USING (auth.uid() = user_id OR public.is_admin());

-- -----------------------------------------------------------------------------
-- 3. CAREERS POLICIES (Public read; Verified Admin write)
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Anyone can view careers catalog" ON public.careers;
CREATE POLICY "Anyone can view careers catalog"
ON public.careers FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Only admins can insert careers" ON public.careers;
CREATE POLICY "Only admins can insert careers"
ON public.careers FOR INSERT
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Only admins can update careers" ON public.careers;
CREATE POLICY "Only admins can update careers"
ON public.careers FOR UPDATE
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Only admins can delete careers" ON public.careers;
CREATE POLICY "Only admins can delete careers"
ON public.careers FOR DELETE
USING (public.is_admin());

-- -----------------------------------------------------------------------------
-- 4. SCHOLARSHIPS POLICIES (Public read; Verified Admin write)
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Anyone can view scholarships" ON public.scholarships;
CREATE POLICY "Anyone can view scholarships"
ON public.scholarships FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Only admins can insert scholarships" ON public.scholarships;
CREATE POLICY "Only admins can insert scholarships"
ON public.scholarships FOR INSERT
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Only admins can update scholarships" ON public.scholarships;
CREATE POLICY "Only admins can update scholarships"
ON public.scholarships FOR UPDATE
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Only admins can delete scholarships" ON public.scholarships;
CREATE POLICY "Only admins can delete scholarships"
ON public.scholarships FOR DELETE
USING (public.is_admin());

-- -----------------------------------------------------------------------------
-- 5. ENTRANCE EXAMS POLICIES (Public read; Verified Admin write)
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Anyone can view entrance exams" ON public.entrance_exams;
CREATE POLICY "Anyone can view entrance exams"
ON public.entrance_exams FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Only admins can insert entrance exams" ON public.entrance_exams;
CREATE POLICY "Only admins can insert entrance exams"
ON public.entrance_exams FOR INSERT
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Only admins can update entrance exams" ON public.entrance_exams;
CREATE POLICY "Only admins can update entrance exams"
ON public.entrance_exams FOR UPDATE
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Only admins can delete entrance exams" ON public.entrance_exams;
CREATE POLICY "Only admins can delete entrance exams"
ON public.entrance_exams FOR DELETE
USING (public.is_admin());

-- -----------------------------------------------------------------------------
-- 6. MENTORS POLICIES (Public read; Verified Admin write)
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Anyone can view verified mentors" ON public.mentors;
CREATE POLICY "Anyone can view verified mentors"
ON public.mentors FOR SELECT
USING (true);

DROP POLICY IF EXISTS "Only admins can manage mentors" ON public.mentors;
CREATE POLICY "Only admins can manage mentors"
ON public.mentors FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- -----------------------------------------------------------------------------
-- 7. MENTORSHIP SESSIONS POLICIES
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Students can view their own mentorship sessions" ON public.mentorship_sessions;
CREATE POLICY "Students can view their own mentorship sessions"
ON public.mentorship_sessions FOR SELECT
USING (auth.uid() = student_id OR public.is_admin());

DROP POLICY IF EXISTS "Authenticated students can request mentorship sessions" ON public.mentorship_sessions;
CREATE POLICY "Authenticated students can request mentorship sessions"
ON public.mentorship_sessions FOR INSERT
WITH CHECK (auth.uid() = student_id OR auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Admins or students can update their sessions" ON public.mentorship_sessions;
CREATE POLICY "Admins or students can update their sessions"
ON public.mentorship_sessions FOR UPDATE
USING (auth.uid() = student_id OR public.is_admin())
WITH CHECK (auth.uid() = student_id OR public.is_admin());

-- -----------------------------------------------------------------------------
-- 8. ADMIN AUDIT LOGS POLICIES (Admin Only)
-- -----------------------------------------------------------------------------
DROP POLICY IF EXISTS "Only admins can view audit logs" ON public.admin_audit_logs;
CREATE POLICY "Only admins can view audit logs"
ON public.admin_audit_logs FOR SELECT
USING (public.is_admin());

DROP POLICY IF EXISTS "Only admins can insert audit logs" ON public.admin_audit_logs;
CREATE POLICY "Only admins can insert audit logs"
ON public.admin_audit_logs FOR INSERT
WITH CHECK (public.is_admin());

