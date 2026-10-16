export default function Newsletter() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Never Miss a Post
        </h2>
        <p className="text-gray-600 mb-8">
          Get weekly updates in your inbox
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 border rounded-lg text-gray-900"
          />
          <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
