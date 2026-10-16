export default function Reservation() {
  return (
    <section
      id="reservation"
      className="py-20 px-6 bg-gradient-to-br from-amber-900 to-red-900 text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Reserve Your Table</h2>
        <p className="opacity-90 mb-8">
          Book now for an unforgettable dining experience
        </p>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 text-white"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 text-white"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="date"
              className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white"
            />
            <input
              type="time"
              className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white"
            />
          </div>
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 rounded-lg font-bold transition">
            Confirm Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
