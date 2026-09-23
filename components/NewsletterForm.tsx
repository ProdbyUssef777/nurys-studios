'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Subscription failed');
      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="mt-12 border-t border-line pt-8">
      <p className="text-xs tracking-wide2 text-smoke">STAY IN THE LOOP</p>
      <p className="mt-2 max-w-sm text-sm text-bone/70">
        Get notified when NURYS drops something new.
      </p>
      <form onSubmit={submit} className="mt-5 flex max-w-md gap-3">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-1 border-b border-line bg-transparent py-3 text-sm text-bone placeholder:text-smoke focus:border-bone focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="border border-bone px-5 py-3 text-xs tracking-wide2 text-bone transition-colors hover:bg-bone hover:text-ink disabled:opacity-50"
        >
          {status === 'loading' ? '…' : 'JOIN'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 text-xs text-smoke" role="status">You’re on the list.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-xs text-red-400" role="alert">
          Subscription is not configured yet. Please try again later.
        </p>
      )}
    </div>
  );
}
