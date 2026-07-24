import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const mailchimpListId = process.env.MAILCHIMP_LIST_ID;
const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, message: "Method Not Allowed" });
    }

    const { email } = req.body;
    const isValidEmail = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
        return res.status(400).json({ ok: false, message: "Please enter a valid email address." });
    }

    if (!mailchimpApiKey || !mailchimpListId) {
        console.error("Newsletter subscribe failed: Mailchimp not configured.");
        return res.status(500).json({ ok: false, message: "Newsletter service is not configured." });
    }

    const serverPrefix = mailchimpServerPrefix || mailchimpApiKey.split("-")[1];

    if (!serverPrefix) {
        console.error("Newsletter subscribe failed: unable to determine Mailchimp server prefix.");
        return res.status(500).json({ ok: false, message: "Newsletter service is not configured correctly." });
    }

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`;
    const auth = `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64")}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: auth,
            },
            body: JSON.stringify({
                email_address: email.trim(),
                status: "subscribed",
            }),
        });

        const data = await response.json();

        if (response.ok) {
            // Add a tag to the member so Customer Journey automations can trigger reliably
            try {
                const subscriberHash = crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
                const tagsUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members/${subscriberHash}/tags`;

                await fetch(tagsUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: auth,
                    },
                    body: JSON.stringify({ tags: [{ name: "newsletter_signup", status: "active" }] }),
                });
            } catch (tagErr) {
                console.warn("Failed to add Mailchimp tag:", tagErr);
            }

            // Attempt to explicitly trigger Mailchimp's Final Welcome email for this member
            try {
                const subscriberHash = crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
                const welcomeUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members/${subscriberHash}/actions/send-welcome-email`;

                const welcomeResp = await fetch(welcomeUrl, {
                    method: "POST",
                    headers: {
                        Authorization: auth,
                    },
                });

                if (!welcomeResp.ok) {
                    const welcomeData = await welcomeResp.text();
                    console.warn("Mailchimp send-welcome-email warning:", welcomeResp.status, welcomeData);

                    // If Mailchimp doesn't allow programmatic welcome sending, fallback to transactional email
                    if (welcomeResp.status === 405) {
                        const resendApiKey = process.env.RESEND_API_KEY;
                        const resendFrom = process.env.RESEND_FROM_EMAIL;
                        const adminEmail = process.env.NEWSLETTER_EMAIL || "salesby2btech@gmail.com";

                        if (resendApiKey && resendFrom) {
                            try {
                                // Send a welcome email to the subscriber via Resend
                                await fetch("https://api.resend.com/emails", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${resendApiKey}`,
                                    },
                                    body: JSON.stringify({
                                        from: resendFrom,
                                        to: email.trim(),
                                        subject: "Welcome - Thanks for subscribing to We Want Agent",
                                        html: `<p>Thanks for subscribing to We Want Agent. We build custom AI agents that automate workflows and save time. <a href=\"https://wewantagent.com/contact\">Book a free consultation</a>.</p>`,
                                    }),
                                });
                            } catch (resendErr) {
                                console.error("Resend fallback welcome email error:", resendErr);
                            }
                        } else {
                            console.warn("Resend not configured; cannot send fallback welcome email.");
                        }

                        // Send admin notification via Resend if available
                        if (resendApiKey && resendFrom) {
                            try {
                                await fetch("https://api.resend.com/emails", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${resendApiKey}`,
                                    },
                                    body: JSON.stringify({
                                        from: resendFrom,
                                        to: adminEmail,
                                        subject: `New newsletter signup: ${email.trim()}`,
                                        html: `<p>New subscriber: ${email.trim()}</p><p>Subscribed via website newsletter form.</p>`,
                                    }),
                                });
                            } catch (adminErr) {
                                console.error("Resend admin notification error:", adminErr);
                            }
                        } else {
                            console.warn("Resend not configured; admin notification not sent.");
                        }
                    }
                }
            } catch (welcomeError) {
                console.error("Error sending Mailchimp welcome email:", welcomeError);
            }

            return res.status(200).json({ ok: true, message: "Thank you for subscribing!" });
        }

        if (data.title === "Member Exists") {
            return res.status(200).json({ ok: true, message: "You are already subscribed." });
        }

        console.error("Mailchimp subscribe error:", data);
        return res.status(response.status).json({ ok: false, message: data.detail || data.title || "Unable to subscribe." });
    } catch (error: any) {
        console.error("Newsletter subscribe error:", error);
        return res.status(500).json({ ok: false, message: error?.message || "Unable to subscribe at this time." });
    }
}
