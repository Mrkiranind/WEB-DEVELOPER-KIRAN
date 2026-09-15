"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TemplatesPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Landing Page", "E-commerce", "Portfolio", "Blog", "Dashboard"];

  const templates = [
    { id: 1, name: "SaaS Landing Page", price: 999, category: "Landing Page", tag: "Next.js + Tailwind", color: "from-blue-500 to-cyan-500", featured: true },
    { id: 2, name: "E-commerce Store", price: 1999, category: "E-commerce", tag: "Next.js + Stripe", color: "from-purple-500 to-pink-500", featured: true },
    { id: 3, name: "Portfolio Website", price: 499, category: "Portfolio", tag: "Next.js + Framer", color: "from-orange-500 to-red-500", featured: true },
    { id: 4, name: "Blog Platform", price: 1299, category: "Blog", tag: "Next.js + MDX", color: "from-green-500 to-emerald-500", featured: false },
    { id: 5, name: "Admin Dashboard", price: 2499, category: "Dashboard", tag: "Next.js + Chart.js", color: "from-indigo-500 to-purple-500", featured: false },
    { id: 6, name: "Agency Website", price: 1499, category: "Landing Page", tag: "Next.js + Framer", color: "from-rose-500 to-orange-500", featured: false },
    { id: 7, name: "Restaurant Website", price: 899, category: "Landing Page", tag: "Next.js + Tailwind", color: "from-yellow-500 to-orange-500", featured: false },
    { id: 8, name: "Fitness Landing", price: 799, category: "Landing Page", tag: "Next.js + Tailwind", color: "from-lime-500 to-green-500", featured: false },
    { id: 9, name: "Real Estate Site", price: 1899, category: "E-commerce", tag: "Next.js + Maps", color: "from-sky-500 to-blue-500", featured: false },
  ];

  const filtered = filter === "All" ? templates : templates.filter((t) => t.category === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-16 border-b border-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Templates</span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t) => (
                <Link
                  key={t.id}
                  href={`/templates/${t.id}`}
                  className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 transition duration-300 group block"
                >
                  <div className={`h-52 bg-gradient-to-br ${t.color} opacity-80 group-hover:opacity-100 transition relative`}>
                    {t.featured && (
                      <span className="absolute top-3 right-3 bg-black/70 backdrop-blur text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-blue-400 font-semibold mb-2">{t.category}</p>
                    <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{t.tag}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-400">₹{t.price}</span>
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-lg text-sm font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-20">No templates found in this category.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

