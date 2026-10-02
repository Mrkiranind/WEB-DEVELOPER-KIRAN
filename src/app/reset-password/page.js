"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { authClient, updatePassword } from "@/lib/auth";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [hasSession, setHasSession] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await authClient.auth.getSession();

      if (data?.session) {
        setHasSession(true);
        setChecking(false);
        return;
      }

      setTimeout(async () => {
        const { data: newData } = await authClient.auth.getSession();
        if (newData?.session) {
          setHasSession(true);
        }
        setChecking(false);
      }, 2000);
    };

    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (form.password.length < 6) {
      setError("Password कम से कम 6 characters का होना चाहिए");
      setLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("दोनों passwords match नहीं कर रहे");
      setLoading(false);
      return;
    }

    const { error } = await updatePassword(form.password);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage("✅ Password successfully update हो गया!");
    setLoading(false);

    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  if (checking) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Verifying reset link...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!hasSession) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-3xl font-bold mb-4">Invalid Reset Link</h1>
            <p className="text-gray-400 mb-8">
              Ye password reset link valid nahi hai ya expire ho gaya hai.
              Kripya naya link request karein.
            </p>
            <Link
              href="/forgot-password"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Request New Link
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <span className="text-3xl">🔑</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Set New <span className="text-blue-500">Password</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Apna naya password set karein
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-4"
          >
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                New Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="कम से कम 6 characters"
                className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Confirm New Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                placeholder="Dobara type karein"
                className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {message && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm">{message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition disabled:opacity-50 text-white"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
