import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Loader2, Send, ExternalLink } from 'lucide-react';
import { RevealOnScroll, Button, Input, GlitchText } from '../common';
import { sendContactEmail, openMailtoFallback } from '../../utils/emailService';
import { BIO_DATA } from '../../data/portfolioData';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        // Clear error when user starts typing again
        if (status === "error") {
            setStatus("idle");
            setErrorMessage("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus("error");
            setErrorMessage("Please fill in all fields.");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus("error");
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            const result = await sendContactEmail(formData);

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });

                // Reset to idle after 5 seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage(error.message || "Failed to send message. Please try the email link below.");
        }
    };

    const handleDirectEmail = () => {
        openMailtoFallback(formData);
    };

    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]"
            aria-labelledby="contact-heading"
        >
            <RevealOnScroll className="container px-4 mx-auto max-w-xl text-center relative z-10">
                {/* Icon */}
                <div
                    className="inline-block p-4 rounded-full bg-violet-500/10 mb-8 ring-1 ring-violet-500/30 animate-pulse"
                    aria-hidden="true"
                >
                    <Mail className="w-8 h-8 text-violet-400" />
                </div>

                <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-main)]">
                    <GlitchText text="Initialize Handshake" />
                </h2>

                <p className="text-[var(--text-muted)] mb-10 text-base md:text-lg leading-relaxed">
                    Open to meaningful conversations around backend systems, AI, and impactful projects.
                </p>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-left p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-md shadow-2xl"
                    noValidate
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label
                                htmlFor="name"
                                className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider"
                            >
                                Identity <span className="text-red-400">*</span>
                            </label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                disabled={status === "submitting"}
                                aria-required="true"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label
                                htmlFor="email"
                                className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider"
                            >
                                Signal <span className="text-red-400">*</span>
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@email.com"
                                required
                                disabled={status === "submitting"}
                                aria-required="true"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label
                            htmlFor="message"
                            className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider"
                        >
                            Payload <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="flex min-h-[140px] w-full rounded-md border border-[var(--border-color)] 
                         bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-main)] 
                         focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500
                         transition-all placeholder:text-[var(--text-muted)] resize-none
                         disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Let's build something scalable..."
                            required
                            disabled={status === "submitting"}
                            aria-required="true"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant={status === 'success' ? 'success' : 'primary'}
                        className="w-full mt-2 h-12 text-base font-semibold tracking-wide"
                        disabled={status === "submitting" || status === "success"}
                    >
                        {status === "submitting" ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                                Transmitting...
                            </span>
                        ) : status === "success" ? (
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4" aria-hidden="true" />
                                Transmission Complete!
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Send className="w-4 h-4" aria-hidden="true" />
                                Transmit Message
                            </span>
                        )}
                    </Button>

                    {/* Error Message */}
                    {status === "error" && (
                        <div className="text-red-400 text-sm text-center flex items-center justify-center gap-1.5 mt-2 p-3 bg-red-500/10 rounded-lg border border-red-500/20" role="alert">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    {/* Success Message */}
                    {status === "success" && (
                        <div className="text-green-400 text-sm text-center flex items-center justify-center gap-1.5 mt-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20" role="status">
                            <Check className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                            <span>Thanks for reaching out! I'll respond within 24 hours.</span>
                        </div>
                    )}

                    {/* Direct Email Fallback */}
                    <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                        <p className="text-center text-[10px] text-[var(--text-muted)] opacity-60">
                            Or reach me directly:
                        </p>
                        <a
                            href={`mailto:${BIO_DATA.email}`}
                            className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                        >
                            <Mail className="w-4 h-4" aria-hidden="true" />
                            {BIO_DATA.email}
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </a>
                    </div>
                </form>
            </RevealOnScroll>
        </section>
    );
};

export default Contact;
