"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/80 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-purple-500">John</span>Doe
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block border border-gray-700 hover:border-purple-500 px-5 py-2 rounded-lg text-sm font-semibold transition"
        >
          Hire Me
        </a>

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
              className="block py-3 text-gray-300 hover:text-purple-400 border-b border-gray-900"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
