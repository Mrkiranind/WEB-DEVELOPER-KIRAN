export default function Newsletter() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get 10% Off</h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-lg text-black"
          />
          <button className="bg-white text-black px-6 py-3 rounded-lg font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
