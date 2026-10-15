export default function FeaturedProducts() {
  const products = [
    {
      name: "Nike Air Max",
      price: 4999,
      category: "Fashion",
      emoji: "👟",
      color: "from-pink-200 to-rose-200",
    },
    {
      name: "Sony Headphones",
      price: 8999,
      category: "Electronics",
      emoji: "🎧",
      color: "from-blue-200 to-cyan-200",
    },
    {
      name: "Apple Watch",
      price: 12999,
      category: "Accessories",
      emoji: "⌚",
      color: "from-green-200 to-emerald-200",
    },
    {
      name: "Canon Camera",
      price: 45999,
      category: "Electronics",
      emoji: "📷",
      color: "from-orange-200 to-yellow-200",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div
                className={`h-56 bg-gradient-to-br ${p.color} flex items-center justify-center text-6xl`}
              >
                {p.emoji}
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{p.category}</p>
                <h3 className="font-bold text-gray-900 mb-2">{p.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{p.price.toLocaleString("en-IN")}
                  </span>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
