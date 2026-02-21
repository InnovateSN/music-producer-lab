-- RLS verification template for staging/prod
-- Replace UUID placeholders with real test users from two different schools.

-- Example setup:
-- SELECT id, school_id, role, email FROM users ORDER BY created_at DESC LIMIT 20;

-- 1) As student A, ensure you only see own/same-school rows
SET app.current_user_id = '00000000-0000-0000-0000-000000000001';
SELECT current_app_user_id(), current_app_school_id(), current_app_role();
SELECT COUNT(*) AS users_visible FROM users;
SELECT COUNT(*) AS progress_visible FROM lesson_progress;

-- 2) As student B (different school), verify isolation
SET app.current_user_id = '00000000-0000-0000-0000-000000000002';
SELECT current_app_user_id(), current_app_school_id(), current_app_role();
SELECT COUNT(*) AS users_visible FROM users;
SELECT COUNT(*) AS progress_visible FROM lesson_progress;

-- 3) As school admin, verify same-school management but no cross-school access
SET app.current_user_id = '00000000-0000-0000-0000-000000000003';
SELECT current_app_user_id(), current_app_school_id(), current_app_role();
SELECT COUNT(*) AS classes_visible FROM classes;
SELECT COUNT(*) AS invoices_visible FROM invoices;

-- 4) As super admin, verify global access
SET app.current_user_id = '00000000-0000-0000-0000-000000000004';
SELECT current_app_user_id(), current_app_school_id(), current_app_role();
SELECT COUNT(*) AS users_visible FROM users;
SELECT COUNT(*) AS schools_visible FROM schools;
