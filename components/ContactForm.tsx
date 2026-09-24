'use client';

import { useState } from 'react';
import { site } from '@/data/site';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (status === 'sent') setStatus('idle');
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Message from ${form.name || 'the NURYS site'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  }

  const fieldClass =
    'w-full border-b border-line bg-transparent py-3 text-bone placeholder:text-smoke focus:border-bone focus:outline-none transition-colors duration-300';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={update('name')}
          className={fieldClass}
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={update('email')}
          className={fieldClass}
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        value={form.subject}
        onChange={update('subject')}
        className={fieldClass}
      />
      <textarea
        required
        placeholder="Message"
        rows={5}
        value={form.message}
        onChange={update('message')}
        className={fieldClass}
      />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="self-start border border-bone px-8 py-3 text-xs tracking-wide2 text-bone transition-colors duration-300 ease-editorial hover:bg-bone hover:text-ink"
        >
          SEND MESSAGE
        </button>
        {status === 'sent' && (
          <p className="text-xs text-smoke">
            Your email app should now open with the message ready. Nothing happened? Write to us
            directly at{' '}
            <a href={`mailto:${site.email}`} className="text-bone underline underline-offset-2">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
