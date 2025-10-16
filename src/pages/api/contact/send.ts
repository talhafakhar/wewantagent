import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY || "re_5sHaFtH1_32D73D9ryKveznabTiCVaicF");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, message: "Method Not Allowed" });
    }
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            companyName,
            industry,
            companySize,
            message,
        } = req.body;

        const htmlContent = `
      <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f5f6fa; padding: 40px 0;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    <div style="background-color: #111827; color: #ffffff; padding: 20px 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 20px; letter-spacing: 0.5px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #1f2937; margin-bottom: 20px;">
              You have received a new message from your website contact form.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">Full Name:</td>
                <td style="padding: 8px 0; color: #374151;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">Email Address:</td>
                <td style="padding: 8px 0; color: #374151;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">Phone Number:</td>
                <td style="padding: 8px 0; color: #374151;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">Company Name:</td>
                <td style="padding: 8px 0; color: #374151;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">Industry:</td>
                <td style="padding: 8px 0; color: #374151;">${industry}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #111827;">Company Size:</td>
                <td style="padding: 8px 0; color: #374151;">${companySize}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <p style="font-weight: 600; color: #111827; margin-bottom: 8px;">Message:</p>
              <div style="background-color: #f9fafb; border-left: 4px solid #111827; padding: 15px; border-radius: 6px; color: #374151; font-size: 15px; line-height: 1.5;">
                ${message}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f3f4f6; text-align: center; padding: 20px; color: #6b7280; font-size: 13px;">
            <p style="margin: 0;">This message was automatically sent from your website contact form.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>

        </div>
      </div>
    `;
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "thetalhafakhar@gmail.com",
            subject: `📩 New Contact Form Submission from ${firstName} ${lastName}`,
            html: htmlContent,
        });

        return res.status(200).json({
            ok: true,
            message: "Thank you! Your message has been sent successfully. We will get back to you soon.",
        });
    } catch (error) {
        console.error("Resend API error:", error);
        return res.status(500).json({
            ok: false,
            message: "Internal Server Error",
        });
    }
}
