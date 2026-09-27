import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDownloadInfo } from "@/lib/database";

export const dynamic = "force-dynamic";

export default async function DownloadPage({ params }) {
  const { token } = params;

  const info = await getDownloadInfo(token);

  // Token invalid
  if (!info) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-6">❌</div>
            <h1 className="text-3xl font-bold mb-4">Invalid Download Link</h1>
            <p className="text-gray-400 mb-8">
              Ye download link valid nahi hai. Kripya apne email mein bheja gaya
              original link use karein.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Contact Support
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Expired
  if (info.isExpired) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-6">⏰</div>
            <h1 className="text-3xl font-bold mb-4">Link Expired</h1>
            <p className="text-gray-400 mb-8">
              Ye download link 7 din baad expire ho gaya hai. Kripya support se
              naya link maange.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Request New Link
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Limit reached
  if (info.isLimitReached) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-6">🚫</div>
            <h1 className="text-3xl font-bold mb-4">Download Limit Reached</h1>
            <p className="text-gray-400 mb-8">
              Aapne maximum {info.max_downloads} downloads use kar liye hain.
              Kripya support se contact karein.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Contact Support
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Valid
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
              <span className="text-5xl">✓</span>
            </div>
            <h1 className="text-4xl font-bold mb-3">
              Your <span className="text-blue-500">Download</span> is Ready!
            </h1>
            <p className="text-gray-400">Thank you for your purchase</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Product:</span>
              <span className="font-semibold text-white">
                {info.template?.name || "Template"}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Downloads Used:</span>
              <span className="font-semibold text-blue-400">
                {info.download_count} / {info.max_downloads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Expires On:</span>
              <span className="text-sm text-gray-300">
                {new Date(info.expires_at).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          <a
            href={`/api/download/${token}`}
            className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-4 rounded-xl font-bold text-lg text-center transition shadow-lg shadow-blue-500/30"
          >
            ⬇ Download Now ({info.remaining} remaining)
          </a>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mt-6">
            <p className="text-yellow-200 text-sm leading-relaxed">
              ⚠️ <strong>Note:</strong> Ye link sirf {info.max_downloads} baar
              download ho sakta hai aur 7 din baad expire ho jayega. Kripya ise
              turant download karke safe rakhein.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/templates"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Browse More Templates →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
