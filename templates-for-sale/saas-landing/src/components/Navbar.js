"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/80 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-500">SaaS</span>Flow
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Link
          href="#"
          className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-5 py-2 rounded-lg text-sm font-semibold transition"
        >
          Get Started
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-blue-400 border-b border-gray-900"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="#"
            className="block mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 rounded-lg text-center text-sm font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
