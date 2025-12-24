/**
 * Supabase Login Guard
 * Enforces premium access after user login by checking subscription status
 */

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client - these should be set via environment variables
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Enforces premium access after login
 * Checks user authentication, profile, and subscription status
 * Redirects to ?premium=required if user doesn't have valid premium access
 * 
 * @returns {Promise<boolean>} - Returns true if user has valid premium access, false otherwise
 */
async function enforcePremiumAccessAfterLogin() {
  try {
    // Step 1: Check if user is logged in via Supabase
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Error getting session:', sessionError.message);
      redirectToPremiumRequired();
      return false;
    }
    
    if (!session || !session.user) {
      console.log('User is not logged in');
      redirectToPremiumRequired();
      return false;
    }
    
    const userId = session.user.id;
    
    // Step 2: Fetch user profile from profiles table
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('subscription_type, access_until')
      .eq('id', userId)
      .single();
    
    if (profileError) {
      console.error('Error fetching profile:', profileError.message);
      redirectToPremiumRequired();
      return false;
    }
    
    if (!profile) {
      console.log('Profile not found for user');
      redirectToPremiumRequired();
      return false;
    }
    
    // Step 3 & 4: Check subscription_type and access_until fields
    const { subscription_type, access_until } = profile;
    
    // Check if user is on free plan
    if (subscription_type === 'free' || !subscription_type) {
      console.log('User has free subscription, premium required');
      redirectToPremiumRequired();
      return false;
    }
    
    // Check if access has expired
    if (access_until) {
      const accessUntilDate = new Date(access_until);
      const now = new Date();
      
      if (accessUntilDate < now) {
        console.log('User premium access has expired');
        redirectToPremiumRequired();
        return false;
      }
    }
    
    // Step 5: User is premium and not expired - allow content to load
    if (subscription_type === 'premium') {
      console.log('User has valid premium access');
      return true;
    }
    
    // Default case: redirect if subscription type is not recognized as premium
    console.log('Unrecognized subscription type:', subscription_type);
    redirectToPremiumRequired();
    return false;
    
  } catch (error) {
    console.error('Unexpected error in enforcePremiumAccessAfterLogin:', error);
    redirectToPremiumRequired();
    return false;
  }
}

/**
 * Redirects the user to the premium required page
 * Appends ?premium=required to the current URL
 */
function redirectToPremiumRequired() {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    
    // Avoid redirect loop if already on premium=required
    if (currentUrl.searchParams.get('premium') === 'required') {
      return;
    }
    
    currentUrl.searchParams.set('premium', 'required');
    window.location.href = currentUrl.toString();
  }
}

// Step 6: Export the function as default
export default enforcePremiumAccessAfterLogin;
