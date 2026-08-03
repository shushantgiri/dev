'use client';
import Button from '@/components/Button';
import { CheckCircle2, XCircle } from 'lucide-react';
import React, { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            // honeypot — left empty by real visitors
            company: formData.get('company'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || 'Something went wrong.');
            }

            setStatus('success');
            form.reset();
        } catch (err) {
            setStatus('error');
            setErrorMessage(
                err instanceof Error
                    ? err.message
                    : 'Something went wrong. Please try again.',
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto max-w-[520px] text-left"
            noValidate
        >
            {/* honeypot field — hidden from real users, catches bots */}
            <div
                className="absolute -left-[9999px] opacity-0"
                aria-hidden="true"
            >
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wide text-muted-foreground mb-2"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder="Your name"
                        disabled={status === 'loading'}
                        className="w-full rounded-lg border border-border/60 bg-background-light/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 disabled:opacity-60"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wide text-muted-foreground mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        disabled={status === 'loading'}
                        className="w-full rounded-lg border border-border/60 bg-background-light/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 disabled:opacity-60"
                    />
                </div>
            </div>

            <div className="mt-4">
                <label
                    htmlFor="message"
                    className="block font-mono text-xs uppercase tracking-wide text-muted-foreground mb-2"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell me a bit about your project..."
                    disabled={status === 'loading'}
                    className="w-full resize-none rounded-lg border border-border/60 bg-background-light/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 disabled:opacity-60"
                />
            </div>

            <div className="mt-5 flex items-center gap-4 flex-wrap">
                <Button
                    as="button"
                    type="submit"
                    variant="primary"
                    loading={status === 'loading'}
                    disabled={status === 'loading'}
                    className="h-11 px-7 text-base"
                >
                    Send Message
                </Button>

                {status === 'success' && (
                    <span className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle2 className="size-4" />
                        Message sent — I&apos;ll get back to you soon.
                    </span>
                )}

                {status === 'error' && (
                    <span className="flex items-center gap-2 text-sm text-destructive">
                        <XCircle className="size-4" />
                        {errorMessage}
                    </span>
                )}
            </div>
        </form>
    );
};

export default ContactForm;