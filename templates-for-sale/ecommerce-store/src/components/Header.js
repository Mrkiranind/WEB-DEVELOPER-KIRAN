"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-gray-900">ShopHub</div>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">Shop</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-2xl">🔍</button>
          <button className="text-2xl relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
