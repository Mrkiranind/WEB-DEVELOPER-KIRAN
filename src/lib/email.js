import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPurchaseEmail({
  to,
  customerName,
  templateName,
  amount,
  paymentId,
  templateId,
}) {
  try {
    const downloadUrl = `https://webdeveloperkiran.in/success?payment_id=${paymentId}&template_id=${templateId}`;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [to],
      subject: `🎉 Payment Successful - ${templateName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body style="font-family: Arial, sans-serif; background-color: #0a0a0a; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #111827; border-radius: 12px; padding: 40px; color: #ffffff;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 60px; height: 60px; background: linear-gradient(135deg, #3b82f6, #06b6d4); border-radius: 12px; line-height: 60px; font-size: 28px; font-weight: bold;">K</div>
                <h1 style="color: #ffffff; margin-top: 15px; font-size: 24px;">Web Developer Kiran</h1>
              </div>

              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 60px; height: 60px; background-color: rgba(34, 197, 94, 0.2); border: 2px solid #22c55e; border-radius: 50%; line-height: 56px; font-size: 32px; color: #22c55e;">✓</div>
                <h2 style="color: #ffffff; margin-top: 20px;">Payment Successful!</h2>
              </div>

              <p style="color: #9ca3af; font-size: 16px; line-height: 1.6;">Hi ${customerName},</p>
              <p style="color: #9ca3af; font-size: 16px; line-height: 1.6;">Aapka payment successfully complete ho gaya. Dhanyavaad!</p>

              <div style="background-color: #1f2937; border-radius: 12px; padding: 20px; margin: 25px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #9ca3af; padding: 8px 0;">Template:</td>
                    <td style="color: #ffffff; text-align: right; padding: 8px 0;"><strong>${templateName}</strong></td>
                  </tr>
                  <tr>
                    <td style="color: #9ca3af; padding: 8px 0;">Amount:</td>
                    <td style="color: #3b82f6; text-align: right; padding: 8px 0; font-size: 20px;"><strong>₹${amount}</strong></td>
                  </tr>
                  <tr>
                    <td style="color: #9ca3af; padding: 8px 0;">Payment ID:</td>
                    <td style="color: #9ca3af; text-align: right; padding: 8px 0; font-family: monospace; font-size: 12px;">${paymentId}</td>
                  </tr>
                </table>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${downloadUrl}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #06b6d4); color: #ffffff; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">⬇ Download Your Template</a>
              </div>

              <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">Agar aapko koi problem ho, to humein reply karein ya hello@webdeveloperkiran.com par email karein.</p>

              <hr style="border: none; border-top: 1px solid #374151; margin: 30px 0;">
              <p style="color: #6b7280; font-size: 12px; text-align: center;">© 2026 Web Developer Kiran. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Email send error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email exception:", error);
    return { success: false, error: error.message };
  }
}
