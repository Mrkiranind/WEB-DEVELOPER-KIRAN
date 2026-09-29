"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { signUp } from "@/lib/auth";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

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

    const { data, error } = await signUp(
      form.email,
      form.password,
      form.fullName
    );

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data?.user && data?.session) {
      router.push("/dashboard");
      return;
    }

    setMessage("Account बन गया! अब login करें।");
    setLoading(false);

    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-8">
            Create <span className="text-blue-500">Account</span>
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-4"
          >
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
                placeholder="Rahul Sharma"
                className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="कम से कम 6 characters"
                className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {message && <p className="text-green-400 text-sm">{message}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition disabled:opacity-50 text-white"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            <p className="text-center text-gray-400 text-sm pt-4">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-400 hover:text-blue-300"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
