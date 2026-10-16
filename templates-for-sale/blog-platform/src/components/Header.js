"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-gray-900">📝 BlogHub</div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">Articles</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </nav>

        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
          Subscribe
        </button>
      </div>
    </header>
  );
}
