export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind? Let's talk!
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
