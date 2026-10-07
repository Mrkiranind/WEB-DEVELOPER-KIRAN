import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - Web Developer Kiran",
  description: "Read our terms of service for using webdeveloperkiran.in",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of <span className="text-blue-500">Service</span>
          </h1>
          <p className="text-gray-400 mb-10">
            Last updated: October 7, 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using webdeveloperkiran.in (the "Website"),
                you accept and agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Services Provided
              </h2>
              <p className="mb-3">
                Web Developer Kiran provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Premium website templates for purchase and download</li>
                <li>Custom full-stack website development services</li>
                <li>Monthly website maintenance subscriptions</li>
                <li>Technical support and consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Purchases and Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All payments are processed securely through Razorpay, a
                  third-party payment gateway.
                </li>
                <li>
                  Prices are displayed in Indian Rupees (INR) and are subject
                  to change without prior notice.
                </li>
                <li>
                  You must provide accurate billing information when making a
                  purchase.
                </li>
                <li>
                  We reserve the right to refuse or cancel any order at our
                  discretion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. License and Usage
              </h2>
              <p className="mb-3">
                When you purchase a template, you receive a non-exclusive,
                non-transferable license to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the template for personal or commercial projects</li>
                <li>Modify the template to suit your needs</li>
                <li>Use the template for client projects</li>
              </ul>
              <p className="mt-3 font-semibold text-red-400">
                You may NOT:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resell or redistribute the template as-is</li>
                <li>Share your download link with others</li>
                <li>Claim the template as your own creation</li>
                <li>Use the template in multiple projects beyond the license</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Download Links
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Download links are sent to your registered email address
                  after successful payment.
                </li>
                <li>
                  Each download link is valid for 3 downloads and expires
                  after 7 days.
                </li>
                <li>
                  Sharing download links with others is strictly prohibited.
                </li>
                <li>
                  If you face any download issues, contact us immediately.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Subscriptions and Billing
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Monthly maintenance subscriptions are billed automatically
                  through Razorpay.
                </li>
                <li>
                  You may cancel your subscription at any time from your
                  dashboard.
                </li>
                <li>
                  Cancellation takes effect at the end of the current billing
                  cycle.
                </li>
                <li>
                  No refunds will be provided for partial months.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Intellectual Property
              </h2>
              <p>
                All content on this Website, including but not limited to
                text, graphics, logos, and code (except purchased templates),
                is the property of Web Developer Kiran and is protected by
                copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                Web Developer Kiran shall not be liable for any direct,
                indirect, incidental, or consequential damages arising from
                the use or inability to use our services. Templates are
                provided "as is" without warranty of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not use our services for illegal purposes</li>
                <li>Not attempt to hack, disrupt, or damage our Website</li>
                <li>Provide accurate information when creating an account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time.
                Continued use of our Website after changes constitutes
                acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                12. Contact Us
              </h2>
              <p className="mb-3">
                For any questions about these Terms, please contact us:
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
