"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const featured = data.templates.filter((t) => t.featured);
          setTemplates(featured.length > 0 ? featured : data.templates.slice(0, 3));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent"></div>
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
              🚀 Trusted by 100+ businesses
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Premium <span className="text-blue-500">Templates</span><br />&{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Full Stack</span> Development
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Ready-to-use templates aur custom full stack websites — dono ek jagah.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/templates" className="bg-blue-600 px-8 py-3.5 rounded-lg font-semibold">Browse Templates</Link>
              <Link href="/contact" className="border border-gray-700 px-8 py-3.5 rounded-lg font-semibold">Hire Me →</Link>
            </div>
          </div>
        </section>

        {/* Featured Templates Section */}
        <section className="px-6 py-20 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured <span className="text-blue-500">Templates</span></h2>
            {!loading && (
              <div className="grid md:grid-cols-3 gap-6">
                {templates.map((t, i) => (
                  <Link key={t.id} href={`/templates/${t.id}`} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden block">
                    <div className="h-44 relative overflow-hidden">
                      {t.image_url ? (
                        <img src={t.image_url} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-blue-900"></div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                      <p className="text-blue-400 font-bold">₹{t.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Testimonials & FAQ */}
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
