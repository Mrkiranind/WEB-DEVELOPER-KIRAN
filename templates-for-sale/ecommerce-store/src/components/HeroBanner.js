export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-90">
          Summer Sale 2026
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Up to 70% OFF
        </h1>
        <p className="text-xl mb-8 opacity-95">
          Limited time offer - Shop now and save big!
        </p>
        <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
