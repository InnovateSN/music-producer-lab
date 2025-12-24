-- Trigger to create profile entries after Supabase auth signup
-- Ensures each new auth user gets a default profile with a free trial period

-- Remove the trigger if it already exists to allow re-running this script safely
DROP TRIGGER IF EXISTS handle_new_user ON auth.users;

-- Create or replace the function that inserts the profile row
CREATE OR REPLACE FUNCTION public.insert_profile_after_signup()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, subscription_type, access_until)
  VALUES (NEW.id, NEW.email, 'free', now() + interval '7 days');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger that fires after a new auth user is created
CREATE TRIGGER handle_new_user
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.insert_profile_after_signup();
