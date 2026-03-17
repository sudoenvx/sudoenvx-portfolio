'use server'

import nodemailer from "nodemailer";

const smtp = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

interface MailPayload {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

const buildMailHtml = (payload: MailPayload) => {
    const safeName = escapeHtml(payload.name);
    const safeEmail = escapeHtml(payload.email);
    const safePhone = payload.phone?.trim() ? escapeHtml(payload.phone) : "Not provided";
    const safeMessage = escapeHtml(payload.message).replace(/\r?\n/g, "<br />");

    return `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; box-sizing: border-box; background-color: #fff; color: #b9b9b9; font-family: sans-serif; padding: 24px 12px;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #1f1f1f; border-radius: 12px; overflow: hidden;">
            <header style="background-color: #9FD356; padding: 16px 16px;">
                <h1 style="font-size: 20px; font-weight: 700; color: #000; letter-spacing: 0.3px; margin: 0;">New Contact Form Submission</h1>
                <p style="margin: 6px 0 0 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #000;">sudoenvx portfolio</p>
            </header>
            
            <div style="padding: 16px;">
                <p style="font-size: 14px; line-height: 1; color: #b9b9b9; margin-bottom: 24px;">
                    You just received a new message from your portfolio contact form.
                </p>
                
                <div style="background-color: #262626; border-radius: 8px; padding: 12px; margin-bottom: 8px;">
                        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9FD356; margin-bottom: 8px; font-weight: bold;">Name</div>
                        <div style="font-size: 15px; color: #ffffff; font-weight: 500;">${safeName}</div>
                    </div>
                    <div style="background-color: #262626; border-radius: 8px; padding: 12px; margin-bottom: 8px;">
                        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9FD356; margin-bottom: 8px; font-weight: bold;">Email</div>
                        <div style="font-size: 15px; color: #ffffff; font-weight: 500;"><a href="mailto:${safeEmail}" style="color: #fff; text-decoration: none;">${safeEmail}</a></div>
                    </div>
                    <div style="background-color: #262626; border-radius: 8px; padding: 12px; margin-bottom: 8px;">
                        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9FD356; margin-bottom: 8px; font-weight: bold;">Phone</div>
                        <div style="font-size: 15px; color: #ffffff; font-weight: 500;">${safePhone}</div>
                    </div>
                
                <div style="background-color: #262626; border-radius: 12px; padding: 12px;">
                    <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9FD356; margin-bottom: 8px; font-weight: bold;">Message</div>
                    <div style="font-size: 14px; line-height: 1.7; color: #ffffff;">${safeMessage}</div>
                </div>
            </div>
        </div>
    </body>
</html>
`;
};

export async function sendMail(payload: MailPayload) {
    await smtp.sendMail({
        from: payload.email,
        to: process.env.SMTP_USER,
        subject: `New Contact Form Submission from ${payload.name}`,
        html: buildMailHtml(payload),
    });
}
