import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Refund Policy - Web Developer Kiran",
  description: "Read our refund policy for templates and services",
};

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-gray-400 mb-10">
            Last updated: October 7, 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">
                📌 Our Policy in Short
              </h2>
              <p>
                Digital products (templates) are non-refundable once
                downloaded. However, we do offer refunds in specific cases
                mentioned below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Digital Products (Templates)
              </h2>
              <p className="mb-3">
                Due to the nature of digital products, we generally do NOT
                offer refunds on template purchases. However, we will issue
                a refund in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">
                    Duplicate Purchase:
                  </strong>{" "}
                  If you accidentally purchased the same template twice, we
                  will refund the duplicate charge.
                </li>
                <li>
                  <strong className="text-white">
                    Technical Issues:
                  </strong>{" "}
                  If the template files are corrupted or cannot be downloaded
                  and we are unable to fix the issue.
                </li>
                <li>
                  <strong className="text-white">
                    Product Not Received:
                  </strong>{" "}
                  If you paid but did not receive the download link and we
                  cannot provide it within 48 hours.
                </li>
                <li>
                  <strong className="text-white">
                    Major Discrepancy:
                  </strong>{" "}
                  If the template is significantly different from what was
                  described on our website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. When Refunds Are NOT Provided
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Change of mind after purchase</li>
                <li>You don't have the technical skills to use the template</li>
                <li>You expected features not listed in the description</li>
                <li>The template doesn't fit your specific project needs</li>
                <li>You already downloaded the files</li>
                <li>More than 7 days have passed since purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Custom Website Development
              </h2>
              <p className="mb-3">
                For custom website projects, we follow a milestone-based
                payment structure:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Advance payment (30%) is non-refundable once work starts</li>
                <li>Milestone payments are non-refundable once milestone is approved</li>
                <li>Final payment refunds are handled case-by-case</li>
                <li>
                  If we fail to deliver as promised, we will refund
                  unstarted work
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Subscription Plans
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscriptions can be cancelled anytime</li>
                <li>
                  Cancellation takes effect at the end of the current billing
                  cycle
                </li>
                <li>No refunds for partial months</li>
                <li>No refunds on already-used services</li>
                <li>
                  If we fail to provide the service, we will refund the
                  remaining period
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. How to Request a Refund
              </h2>
              <p className="mb-3">
                To request a refund, email us at{" "}
                <strong className="text-blue-400">
                  hello@webdeveloperkiran.com
                </strong>{" "}
                with the following details:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and email address</li>
                <li>Order ID or Payment ID</li>
                <li>Reason for refund request</li>
                <li>
                  Screenshots or evidence (if applicable)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Refund Processing Time
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Refund requests are reviewed within <strong>2 business days</strong>
                </li>
                <li>
                  Approved refunds are processed within <strong>5-7 business days</strong>
                </li>
                <li>
                  Amount is credited back to the original payment method
                </li>
                <li>
                  Bank processing may take additional 3-5 days
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Chargebacks
              </h2>
              <p>
                If you initiate a chargeback without contacting us first,
                we reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Suspend your account permanently</li>
                <li>Revoke all licenses to purchased templates</li>
                <li>Report fraudulent chargebacks to authorities</li>
              </ul>
              <p className="mt-3">
                Please contact us first — we're happy to resolve issues
                amicably.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Exceptions
              </h2>
              <p>
                We reserve the right to make exceptions to this policy on a
                case-by-case basis for legitimate reasons. Our decision will
                be final.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Contact Us
              </h2>
              <p className="mb-3">
                For refund-related questions:
              </p>
              <ul className="space-y-1">
                <li>📧 Email: hello@webdeveloperkiran.com</li>
                <li>🌐 Website: webdeveloperkiran.in/contact</li>
                <li>⏰ Response time: Within 24 hours</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
