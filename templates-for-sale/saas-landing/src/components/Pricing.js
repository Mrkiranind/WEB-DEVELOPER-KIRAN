export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 499,
      features: ["1 Project", "Basic Analytics", "Email Support"],
      popular: false,
    },
    {
      name: "Pro",
      price: 1499,
      features: ["10 Projects", "Advanced Analytics", "Priority Support", "Custom Domain"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 4999,
      features: ["Unlimited Projects", "Full Analytics", "24/7 Support", "SSO & Team"],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-gray-400 text-center mb-16">
          No hidden fees. Cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-gray-900 border rounded-2xl p-8 transition duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-2xl shadow-blue-500/20 relative"
                  : "border-gray-800 hover:border-blue-500/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-5xl font-bold text-blue-400 mb-6">
                ₹{plan.price}
                <span className="text-lg text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-gray-300">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    : "border border-gray-700 hover:border-blue-500"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
