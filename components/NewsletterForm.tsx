'use client';

import { useState } from 'react';
import { site } from '@/data/site';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent('Newsletter signup');
    const body = encodeURIComponent(`Please add me to the mailing list: ${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="text-xs tracking-wide2 text-smoke">STAY UPDATED</p>
      <div className="flex items-stretch gap-2">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'sent') setStatus('idle');
          }}
          placeholder="Your email"
          aria-label="Email address"
          className="w-full max-w-[220px] border-b border-line bg-transparent py-2 text-sm text-bone placeholder:text-smoke focus:border-bone focus:outline-none transition-colors duration-300"
        />
        <button
          type="submit"
          className="shrink-0 border border-bone px-4 py-2 text-xs tracking-wide2 text-bone transition-colors duration-300 ease-editorial hover:bg-bone hover:text-ink"
        >
          JOIN
        </button>
      </div>
      {status === 'sent' && (
        <p className="max-w-xs text-xs text-smoke">
          Your email app should now open to confirm. If nothing happened, write to us directly at{' '}
          {site.email}.
        </p>
      )}
    </form>
  );
}
