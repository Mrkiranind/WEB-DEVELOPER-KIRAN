export default function Menu() {
  const items = [
    {
      name: "Margherita Pizza",
      price: "₹449",
      desc: "Fresh tomatoes, mozzarella, basil",
      emoji: "🍕",
      color: "from-red-400 to-orange-400",
    },
    {
      name: "Carbonara Pasta",
      price: "₹549",
      desc: "Creamy pasta with bacon and parmesan",
      emoji: "🍝",
      color: "from-yellow-400 to-orange-400",
    },
    {
      name: "Caesar Salad",
      price: "₹349",
      desc: "Crisp lettuce, croutons, parmesan",
      emoji: "🥗",
      color: "from-green-400 to-emerald-400",
    },
    {
      name: "Tiramisu",
      price: "₹299",
      desc: "Classic Italian dessert",
      emoji: "🍰",
      color: "from-pink-400 to-rose-400",
    },
  ];

  return (
    <section id="menu" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-600 tracking-widest mb-4">OUR MENU</p>
          <h2 className="text-4xl font-bold text-gray-900">Delicious Dishes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl flex-shrink-0`}
              >
                {item.emoji}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <span className="font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
