"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const authClient = createClient(supabaseUrl, supabaseAnonKey);

// Sign up
export async function signUp(email, password, fullName) {
  const { data, error } = await authClient.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
  return { data, error };
}

// Sign in
export async function signIn(email, password) {
  const { data, error } = await authClient.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// Sign out
export async function signOut() {
  const { error } = await authClient.auth.signOut();
  return { error };
}

// Current user
export async function getCurrentUser() {
  const { data, error } = await authClient.auth.getUser();
  return { user: data?.user, error };
}

// Forgot password — reset email भेजो
export async function resetPassword(email) {
  const redirectTo = `${window.location.origin}/reset-password`;
  const { data, error } = await authClient.auth.resetPasswordForEmail(email, {
    redirectTo,
  });
  return { data, error };
}

// Update password — reset के बाद नया password set करो
export async function updatePassword(newPassword) {
  const { data, error } = await authClient.auth.updateUser({
    password: newPassword,
  });
  return { data, error };
}

// User hook
export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authClient.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
      setLoading(false);
    });

    const { data: listener } = authClient.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return { user, loading };
}
