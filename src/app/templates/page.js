"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TemplatesPage() {
  const [filter, setFilter] = useState("All");
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Landing Page", "E-commerce", "Portfolio", "Blog", "Dashboard", "Test"];

  // हर बार page load पर fresh data लाओ
  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTemplates(data.templates);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    filter === "All"
      ? templates
      : templates.filter((t) => t.category === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-16 border-b border-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Templates
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Production-ready templates — sab kuch aapke business ke liye taiyaar.
            </p>
          </div>
        </section>

        <section className="px-6 py-10 border-b border-gray-900">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                    : "bg-gray-900 border border-gray-800 text-gray-300 hover:border-blue-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {loading && (
              <p className="text-center text-gray-400 py-20">Loading...</p>
            )}

            {!loading && filtered.length === 0 && (
              <p className="text-center text-gray-400 py-20">
                No templates found in this category.
              </p>
            )}

            {!loading && filtered.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((t, i) => {
                  const colors = [
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                    "from-orange-500 to-red-500",
                    "from-green-500 to-emerald-500",
                    "from-indigo-500 to-purple-500",
                    "from-rose-500 to-orange-500",
                    "from-yellow-500 to-orange-500",
                    "from-lime-500 to-green-500",
                    "from-sky-500 to-blue-500",
                  ];
                  return (
                    <Link
                      key={t.id}
                      href={`/templates/${t.id}`}
                      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 transition duration-300 group block"
                    >
                      <div
                        className={`h-52 bg-gradient-to-br ${
                          colors[i % colors.length]
                        } opacity-80 group-hover:opacity-100 transition relative`}
                      >
                        {t.featured && (
                          <span className="absolute top-3 right-3 bg-black/70 backdrop-blur text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-blue-400 font-semibold mb-2">
                          {t.category}
                        </p>
                        <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          {t.tech_stack || "Next.js + Tailwind"}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-blue-400">
                            ₹{t.price}
                          </span>
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-lg text-sm font-medium">
                            View Details
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
