import { GENERAL_INFO } from '@/lib/data';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Keep this in sync with the fields rendered in ContactForm.tsx.
const contactSchema = z.object({
    name: z.string().trim().min(2, 'Name is too short').max(100),
    email: z.string().trim().email('Enter a valid email address'),
    message: z.string().trim().min(10, 'Message is too short').max(5000),
    // Honeypot — real visitors never see or fill this field (hidden via
    // CSS in the form). If it arrives non-empty, it's almost certainly a
    // bot, so we silently pretend to succeed instead of sending mail.
    company: z.string().max(0).optional().or(z.literal('')),
});

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set');
        return NextResponse.json(
            { error: 'Email service is not configured yet.' },
            { status: 500 },
        );
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: 'Invalid request body.' },
            { status: 400 },
        );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        const firstIssue = parsed.error.issues[0];
        return NextResponse.json(
            { error: firstIssue?.message ?? 'Invalid submission.' },
            { status: 400 },
        );
    }

    const { name, email, message, company } = parsed.data;

    // Honeypot tripped — respond as if it worked so the bot moves on,
    // but never actually send anything.
    if (company) {
        return NextResponse.json({ success: true });
    }

    try {
        const { error } = await resend.emails.send({
            // 👋 Once you verify your own domain in Resend, swap this for
            // something like `Portfolio <contact@yourdomain.com>`.
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: GENERAL_INFO.email,
            replyTo: email,
            subject: `New message from ${name} (via portfolio)`,
            text: `From: ${name} <${email}>\n\n${message}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6;">
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Message:</strong></p>
                    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Could not send your message. Please try again.' },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact form error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 },
        );
    }
}

// Minimal HTML-escaping so submitted text can't break out of the markup
// or inject content into the email you receive.
function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}