import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Web Developer Kiran",
  description: "Read our privacy policy to understand how we handle your data",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-gray-400 mb-10">
            Last updated: October 7, 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p className="text-lg">
                At Web Developer Kiran, we take your privacy seriously. This
                Privacy Policy explains how we collect, use, and protect your
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-3">We collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Account Information:</strong>{" "}
                  Name, email address, and password when you sign up.
                </li>
                <li>
                  <strong className="text-white">Purchase Information:</strong>{" "}
                  Payment details (processed by Razorpay), order history.
                </li>
                <li>
                  <strong className="text-white">Contact Information:</strong>{" "}
                  Name, email, phone number when you contact us or make a
                  purchase.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong> IP
                  address, browser type, pages visited, and time spent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process your orders and deliver purchased templates</li>
                <li>To send order confirmations, receipts, and download links</li>
                <li>To manage your account and subscriptions</li>
                <li>To respond to your support inquiries</li>
                <li>To send promotional emails (with opt-out option)</li>
                <li>To improve our services and website experience</li>
                <li>To comply with legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Payment Information
              </h2>
              <p>
                All payments are processed through{" "}
                <strong className="text-white">Razorpay</strong>, a PCI-DSS
                compliant payment gateway. We do NOT store your credit card,
                debit card, or UPI information on our servers. Razorpay handles
                all payment data securely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Cookies and Tracking
              </h2>
              <p className="mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep you logged in to your account</li>
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our services</li>
              </ul>
              <p className="mt-3">
                You can disable cookies in your browser settings, though some
                features may not work properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Third-Party Services
              </h2>
              <p className="mb-3">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Razorpay:</strong> Payment
                  processing
                </li>
                <li>
                  <strong className="text-white">Supabase:</strong> Database
                  and authentication
                </li>
                <li>
                  <strong className="text-white">Resend:</strong> Email
                  delivery
                </li>
                <li>
                  <strong className="text-white">Vercel:</strong> Website
                  hosting
                </li>
              </ul>
              <p className="mt-3">
                Each of these services has its own privacy policy. We
                recommend reviewing them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard security measures including
                SSL encryption, secure password hashing, and access controls.
                However, no method of transmission over the internet is 100%
                secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Data Retention
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Account data: Kept as long as your account is active
                </li>
                <li>
                  Purchase records: Kept for 7 years (for tax and legal
                  purposes)
                </li>
                <li>
                  Download links: Deleted after 7 days
                </li>
                <li>
                  Contact messages: Kept for 1 year
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your account</li>
                <li>Opt out of marketing emails</li>
                <li>Export your data</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at
                hello@webdeveloperkiran.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Children's Privacy
              </h2>
              <p>
                Our services are not intended for children under 13 years.
                We do not knowingly collect data from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Changes to Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes via email or a prominent
                notice on our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Contact Us
              </h2>
              <p className="mb-3">
                For questions about this Privacy Policy:
              </p>
              <ul className="space-y-1">
                <li>📧 Email: hello@webdeveloperkiran.com</li>
                <li>🌐 Website: webdeveloperkiran.in/contact</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
