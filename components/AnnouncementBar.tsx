import Link from 'next/link';
import { releases, isReleased } from '@/data/releases';

const lowKey = releases.find((r) => r.slug === 'low-key');
const isLive = lowKey ? isReleased(lowKey) : false;

const MESSAGE = isLive ? 'LOW-KEY OUT NOW' : 'LOW-KEY — OUT FRIDAY 25.09';
const SUB = '2MON666 & USSEF777';
const HREF = isLive ? '/music' : '/journal';

export default function AnnouncementBar() {
  // Repeat the message so the looping track (0 → -50%) always has
  // enough content to fill the screen at any width.
  const items = Array.from({ length: 8 });

  return (
    <Link
      href={HREF}
      aria-label={`${MESSAGE} — ${SUB}`}
      className="group block overflow-hidden border-b border-line bg-bone text-ink"
    >
      <div className="animate-ticker flex w-max items-center gap-8 py-2">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-8 text-[11px] font-semibold tracking-wide2"
          >
            <span>{MESSAGE}</span>
            <span className="text-ink/40">·</span>
            <span className="text-ink/70">{SUB}</span>
            <span className="text-ink/40">·</span>
          </span>
        ))}
      </div>
    </Link>
  );
}
