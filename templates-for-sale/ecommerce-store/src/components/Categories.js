export default function Categories() {
  const categories = [
    { name: "Fashion", icon: "👕", color: "from-pink-100 to-rose-100" },
    { name: "Electronics", icon: "📱", color: "from-blue-100 to-cyan-100" },
    { name: "Home", icon: "🏠", color: "from-green-100 to-emerald-100" },
    { name: "Gaming", icon: "🎮", color: "from-orange-100 to-yellow-100" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <div key={i} className="text-center cursor-pointer">
              <div
                className={`bg-gradient-to-br ${c.color} rounded-2xl aspect-square flex items-center justify-center text-6xl mb-4 hover:scale-105 transition`}
              >
                {c.icon}
              </div>
              <p className="font-semibold text-gray-900">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
