"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const authClient = createClient(supabaseUrl, supabaseAnonKey);

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

export async function signIn(email, password) {
  const { data, error } = await authClient.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await authClient.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data, error } = await authClient.auth.getUser();
  return { user: data?.user, error };
}

// Reset password email भेजो
export async function resetPassword(email) {
  const { data, error } = await authClient.auth.resetPasswordForEmail(email, {
    redirectTo: "https://webdeveloperkiran.in/reset-password",
  });
  return { data, error };
}

// नया password update करो
export async function updatePassword(newPassword) {
  const { data, error } = await authClient.auth.updateUser({
    password: newPassword,
  });
  return { data, error };
}

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
