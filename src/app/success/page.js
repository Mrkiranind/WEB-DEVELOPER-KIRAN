import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuccessPage({ searchParams }) {
  const paymentId = searchParams.payment_id || "N/A";
  const templateId = searchParams.template_id || "";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
            <span className="text-5xl">✓</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment <span className="text-green-400">Successful!</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Aapka payment safal ho gaya. Template ka download link aapko email
            par bheja jayega.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8 text-left">
            <div className="flex justify-between mb-3">
              <span className="text-gray-400">Payment ID:</span>
              <span className="font-mono text-sm text-blue-400">{paymentId}</span>
            </div>
            {templateId && (
              <div className="flex justify-between">
                <span className="text-gray-400">Template ID:</span>
                <span className="font-mono text-sm text-blue-400">
                  #{templateId}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Browse More Templates
            </Link>
            <Link
              href="/contact"
              className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Support
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            📧 Email: hello@webdeveloperkiran.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
