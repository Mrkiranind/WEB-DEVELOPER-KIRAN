export default function Testimonials() {
  const testimonials = [
    { name: "Rahul Sharma", role: "Startup Founder", text: "Amazing quality templates! Saved me weeks of development time. Worth every rupee.", rating: 5, avatar: "R" },
    { name: "Priya Patel", role: "Freelance Designer", text: "Clean code, beautiful design, and great documentation. My clients love these templates.", rating: 5, avatar: "P" },
    { name: "Amit Kumar", role: "Business Owner", text: "Bought the e-commerce template. Setup was super easy. Highly recommended!", rating: 5, avatar: "A" },
  ];

  return (
    <section className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Customers <span className="text-blue-500">Say</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">Real feedback from real customers</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
