'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

/**
 * Submissions are delivered by Web3Forms (free, no server needed).
 * This access key routes form submissions to the Artify Madison inbox.
 * It is safe to ship publicly: it only permits sending email to that address.
 */
const WEB3FORMS_ACCESS_KEY = 'f9283965-30fa-4cd0-b6db-e24fbe5f6ad6';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputCls =
  'w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-ink placeholder:text-faint focus:border-electric focus:outline-none transition-colors';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateField(name: string, value: string) {
    let msg = '';
    if (name === 'name' && !value.trim()) msg = 'Please enter your name.';
    if (name === 'email') {
      if (!value.trim()) msg = 'Please enter your email so we can reply.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) msg = 'That email doesn’t look right. Check for typos.';
    }
    if (name === 'message' && !value.trim()) msg = 'Tell us a little about your venue or your goals.';
    setErrors((e) => ({ ...e, [name]: msg }));
    return msg === '';
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot: bots fill it, humans never see it
    if (data.get('website')) return;

    const fields = ['name', 'email', 'message'] as const;
    const valid = fields.map((f) => validateField(f, String(data.get(f) ?? ''))).every(Boolean);
    if (!valid) {
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"], input:invalid');
      firstInvalid?.focus();
      return;
    }

    if (WEB3FORMS_ACCESS_KEY.startsWith('REPLACE')) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Artify website inquiry: ${data.get('role')}`,
          name: data.get('name'),
          email: data.get('email'),
          role: data.get('role'),
          organization: data.get('organization') || '(not provided)',
          message: data.get('message'),
        }),
      });
      const json = await res.json();
      setStatus(json.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-line bg-surface p-10 text-center"
      >
        <CheckCircle2 className="text-electric" size={40} aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-bold">Message sent.</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-dim">
          Thanks for reaching out. We read every message and typically reply within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Name <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            onBlur={(e) => validateField('name', e.target.value)}
            className={inputCls}
            placeholder="Jane Smith"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Email <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onBlur={(e) => validateField('email', e.target.value)}
            className={inputCls}
            placeholder="jane@venue.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className="mb-2 block text-sm font-medium text-ink">
            I am…
          </label>
          <select id="role" name="role" className={inputCls} defaultValue="A venue">
            <option>A venue</option>
            <option>A prospective partner</option>
            <option>Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="organization" className="mb-2 block text-sm font-medium text-ink">
            Venue / company <span className="text-faint">(optional)</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={inputCls}
            placeholder="Children's museum"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Message <span className="text-electric" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onBlur={(e) => validateField('message', e.target.value)}
          className={inputCls}
          placeholder="Tell us about your venue, your foot traffic, or the business you want to build…"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            The form couldn’t send right now. Please email us directly at{' '}
            <a href="mailto:artifymadison@gmail.com" className="underline">
              artifymadison@gmail.com
            </a>{' '}
            and we’ll get right back to you.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 rounded-full bg-blue px-8 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-electric disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
