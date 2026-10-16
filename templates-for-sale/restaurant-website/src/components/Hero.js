export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 flex items-center justify-center relative">
      <div className="text-center text-white px-6">
        <p className="text-amber-300 tracking-widest mb-4">WELCOME TO</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Bella Vista</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Authentic Italian Cuisine
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-bold transition">
            View Menu
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
            Reserve Table
          </button>
        </div>
      </div>
    </section>
  );
}
