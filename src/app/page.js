"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const featured = data.templates.filter((t) => t.featured);
          setTemplates(
            featured.length > 0 ? featured : data.templates.slice(0, 3)
          );
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Next.js 14 aur Vercel CDN se aapki site har jagah instant load hogi.",
    },
    {
      icon: "🎨",
      title: "Premium Design",
      desc: "Modern, responsive aur professional look har device par.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      desc: "SSL, authentication aur payment integration ready.",
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      desc: "Mobile, tablet aur desktop — sab kuch perfect.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent"></div>
          <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
              🚀 Trusted by 100+ businesses
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Premium <span className="text-blue-500">Templates</span>
              <br />&{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Full Stack
              </span>{" "}
              Development
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Ready-to-use templates aur custom full stack websites — dono ek
              jagah. Aapke business ko online le jao, professional tarike se.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/templates"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
              >
                Browse Templates
              </Link>
              <Link
                href="/contact"
                className="border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 px-8 py-3.5 rounded-lg font-semibold transition"
              >
                Hire Me →
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Web Developer Kiran
              </span>
              ?
            </h2>
            <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
              Sab kuch jo aapko online business ke liye chahiye
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
                >
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Section — Coming Soon */}
        <section className="px-6 py-20 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Featured <span className="text-blue-500">Templates</span>
                </h2>
                <p className="text-gray-400">
                  Sabse zyada bikne wale templates
                </p>
              </div>
              <Link
                href="/templates"
                className="text-blue-400 hover:text-blue-300 text-sm hidden md:block"
              >
                View All →
              </Link>
            </div>

            {loading && (
              <p className="text-center text-gray-400 py-10">
                Loading templates...
              </p>
            )}

            {!loading && templates.length === 0 && (
              <div className="text-center py-16 bg-gray-900/50 border border-dashed border-gray-800 rounded-2xl">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Coming Soon!
                </h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  Hum naye premium templates par kaam kar rahe hain. Jald hi
                  yahan naye templates available honge.
                </p>
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
              </div>
            )}

            {!loading && templates.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6">
                {templates.map((t, i) => {
                  const colors = [
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                    "from-orange-500 to-red-500",
                  ];
                  return (
                    <Link
                      key={t.id}
                      href={`/templates/${t.id}`}
                      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 transition duration-300 group block"
                    >
                      <div
                        className={`h-44 bg-gradient-to-br ${
                          colors[i % 3]
                        } opacity-80 group-hover:opacity-100 transition`}
                      ></div>
                      <div className="p-6">
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

        {/* CTA Section */}
        <section className="px-6 py-20 border-t border-gray-900">
          <div className="max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-10 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Custom Website Chahiye?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Aapke business ke liye full stack website banwao. Fast, secure
                aur professional.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
