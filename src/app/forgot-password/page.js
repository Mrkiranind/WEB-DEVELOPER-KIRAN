"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetPassword } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await resetPassword(email);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "✅ Reset link aapke email par bheja gaya hai. Kripya apna inbox (aur spam folder) check karein."
    );
    setLoading(false);
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
              <span className="text-3xl">🔐</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Forgot <span className="text-blue-500">Password?</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Apna email daalein — hum reset link bhejenge
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-4"
          >
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
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
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <p className="text-center text-gray-400 text-sm pt-4">
              <Link
                href="/login"
                className="text-blue-400 hover:text-blue-300"
              >
                ← Back to Login
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
