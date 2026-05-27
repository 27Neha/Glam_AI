/**
 * Auth Service Abstraction Layer
 * Wraps Supabase Auth so the UI isn't tightly coupled to it.
 */

import { createClient } from '@supabase/supabase-js';

// Use placeholder values for mock; these would come from Expo env vars
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'mock-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

class AuthService {
  async signIn(email: string, password?: string) {
    console.log(`[Auth] Signing in ${email}...`);
    // Mock successful sign in
    return { user: { id: 'mock_123', email } };
  }

  async signOut() {
    console.log(`[Auth] Signing out...`);
    return { success: true };
  }
}

export const authService = new AuthService();
