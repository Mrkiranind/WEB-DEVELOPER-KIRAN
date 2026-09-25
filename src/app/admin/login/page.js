"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (data.success) {
      document.cookie = `admin_token=${data.token}; path=/; max-age=86400`;
      router.push("/admin");
    } else {
      setError("Galat password!");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-2xl">
            K
          </div>
          <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
          <p className="text-gray-400 text-sm">Web Developer Kiran</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-4"
        >
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Admin Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
