"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const templates = [
    {
      id: 1,
      name: "SaaS Landing Page",
      price: "₹999",
      tag: "Next.js + Tailwind",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "E-commerce Store",
      price: "₹1,999",
      tag: "Next.js + Stripe",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Portfolio Website",
      price: "₹499",
      tag: "Next.js + Framer Motion",
      color: "from-orange-500 to-red-500",
    },
  ];

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Templates", href: "/templates" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ============ HEADER / NAVBAR ============ */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/50 group-hover:scale-110 transition">
              K
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-blue-400 font-semibold tracking-widest">
                WEB DEVELOPER
              </span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KIRAN
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-blue-400 transition relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg shadow-blue-500/30"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-xl">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition py-2 border-b border-gray-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2"
              >
                Hire Me
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ============ HERO SECTION ============ */}
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
            <br />
            & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Full Stack</span> Development
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

      {/* ============ FEATURES ============ */}
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

      {/* ============ TEMPLATES ============ */}
      <section className="px-6 py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="text-blue-500">Templates</span>
              </h2>
              <p className="text-gray-400">Sabse zyada bikne wale templates</p>
            </div>
            <Link
              href="/templates"
              className="text-blue-400 hover:text-blue-300 text-sm hidden md:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((t) => (
              <div
                key={t.id}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 transition duration-300 group"
              >
                <div
                  className={`h-44 bg-gradient-to-br ${t.color} opacity-80 group-hover:opacity-100 transition`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{t.tag}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-400">
                      {t.price}
                    </span>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
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

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
                  K
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-blue-400 font-semibold tracking-widest">
                    WEB DEVELOPER
                  </span>
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    KIRAN
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium website templates aur full stack development services.
                Aapke business ko online le jao, professional tarike se.
              </p>
              <div className="flex gap-3">
                {["𝕏", "in", "ig", "yt"].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 hover:bg-blue-500/10 flex items-center justify-center text-sm transition"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-5">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-blue-400 transition cursor-pointer">
                  Website Templates
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer">
                  Full Stack Development
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer">
                  E-commerce Website
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer">
                  Website Maintenance
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer">
                  SEO Optimization
                </li>
              </ul>
            </div>

            {/* Newsletter / Contact */}
            <div>
              <h3 className="text-white font-semibold mb-5">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Naye templates aur offers ki jaankari paayein.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-900 border border-gray-800 focus:border-blue-500 outline-none px-4 py-2.5 rounded-lg text-sm transition"
                />
                <button
                  type="button"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2.5 rounded-lg text-sm font-semibold transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-6">
                📧 hello@webdeveloperkiran.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 <span className="text-blue-400">Web Developer Kiran</span>.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
