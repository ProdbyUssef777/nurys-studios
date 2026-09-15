export default function StreamingLinks({
  links,
}: {
  links: { spotify?: string; appleMusic?: string; youtube?: string };
}) {
  const entries: { label: string; href?: string }[] = [
    { label: 'Spotify', href: links.spotify },
    { label: 'Apple Music', href: links.appleMusic },
    { label: 'YouTube', href: links.youtube },
  ].filter((e) => e.href);

  if (entries.length === 0) {
    return <p className="text-xs text-smoke">Streaming links coming soon</p>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {entries.map((e) => (
        <a
          key={e.label}
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-bone/80 underline underline-offset-4 transition-colors hover:text-bone"
        >
          {e.label}
        </a>
      ))}
    </div>
  );
}
