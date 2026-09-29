"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TemplatesPage() {
  const [filter, setFilter] = useState("All");
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTemplates(data.templates);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "All",
    ...new Set(templates.map((t) => t.category)),
  ];

  const filtered =
    filter === "All"
      ? templates
      : templates.filter((t) => t.category === filter);

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
              Production-ready templates — sab kuch aapke business ke liye
              taiyaar.
            </p>
          </div>
        </section>

        {!loading && templates.length > 0 && (
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
        )}

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {loading && (
              <p className="text-center text-gray-400 py-20">Loading...</p>
            )}

            {/* Coming Soon — जब कोई template नहीं */}
            {!loading && templates.length === 0 && (
              <div className="text-center py-20">
                <div className="max-w-2xl mx-auto bg-gray-900/50 border border-dashed border-gray-800 rounded-3xl p-12">
                  <div className="text-7xl mb-6">🚀</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Coming Soon!
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Hum naye premium templates par kaam kar rahe hain.
                    Jald hi yahan 10+ ready-to-use templates available honge.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-400">10+</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Templates
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        Next.js
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Powered
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-400">
                        Premium
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Quality</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/contact"
                      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition"
                    >
                      Get Notified
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-block border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
                    >
                      Hire Me for Custom Site
                    </Link>
                  </div>

                  <p className="text-gray-500 text-sm mt-8">
                    📧 Questions? Email: hello@webdeveloperkiran.com
                  </p>
                </div>
              </div>
            )}

            {/* Templates Grid — जब templates हों */}
            {!loading && templates.length > 0 && (
              <>
                {filtered.length === 0 ? (
                  <p className="text-center text-gray-400 py-20">
                    No templates found in this category.
                  </p>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((t, i) => (
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
                          <h3 className="text-xl font-semibold mb-2">
                            {t.name}
                          </h3>
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
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
