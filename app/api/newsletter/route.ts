import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json(
      { error: 'Newsletter provider is not configured.' },
      { status: 503 }
    );
  }

  try {
    const { email } = await request.json();

    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }

    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        source: 'NURYS STUDIOS website',
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Provider rejected the subscription.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to subscribe.' }, { status: 500 });
  }
}
