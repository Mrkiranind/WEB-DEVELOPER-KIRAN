export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6">
        <div className="text-2xl font-bold text-white">🍽️ Bella Vista</div>
        <nav className="hidden md:flex gap-8 text-white text-sm">
          <a href="#menu" className="hover:text-amber-300 transition">Menu</a>
          <a href="#about" className="hover:text-amber-300 transition">About</a>
          <a href="#reservation" className="hover:text-amber-300 transition">Reservation</a>
          <a href="#contact" className="hover:text-amber-300 transition">Contact</a>
        </nav>
        <button className="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-full text-sm font-bold transition">
          Book Table
        </button>
      </div>
    </header>
  );
}
