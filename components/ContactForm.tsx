'use client';

import { useState } from 'react';
import { site } from '@/data/site';

type Status = 'idle' | 'opening' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('opening');

    try {
      const subject = encodeURIComponent(
        form.subject || `Message from ${form.name || 'the NURYS site'}`
      );
      const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const fieldClass =
    'w-full border-b border-line bg-transparent py-3 text-bone placeholder:text-smoke focus:border-bone focus:outline-none transition-colors duration-300';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Name"
          aria-label="Name"
          value={form.name}
          onChange={update('name')}
          className={fieldClass}
        />
        <input
          required
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={form.email}
          onChange={update('email')}
          className={fieldClass}
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        aria-label="Subject"
        value={form.subject}
        onChange={update('subject')}
        className={fieldClass}
      />
      <textarea
        required
        placeholder="Message"
        aria-label="Message"
        rows={5}
        value={form.message}
        onChange={update('message')}
        className={fieldClass}
      />
      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={status === 'opening'}
          className="mt-4 self-start border border-bone px-8 py-3 text-xs tracking-wide2 text-bone transition-colors duration-300 ease-editorial hover:bg-bone hover:text-ink disabled:cursor-wait disabled:opacity-50"
        >
          {status === 'opening' ? 'OPENING EMAIL…' : 'SEND MESSAGE'}
        </button>

        {status === 'success' && (
          <p role="status" className="text-xs text-smoke">
            Your email app should now be open with the message ready to send.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-xs text-red-400">
            Something went wrong. Please email {site.email} directly.
          </p>
        )}
      </div>
    </form>
  );
}
