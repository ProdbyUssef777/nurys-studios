'use client';

import Image, { type ImageProps } from 'next/image';
import { useCallback, useState } from 'react';

// Drop-in replacement for next/image: the picture starts blurred and
// transparent, then sharpens as soon as it has loaded, instead of popping in.
// Priority (above-the-fold) images are left alone so they never delay LCP.
export default function BlurImage({ className = '', onLoad, priority, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Handles images that finished loading (from cache) before hydration.
  const ref = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  if (priority) return <Image {...props} priority className={className} onLoad={onLoad} />;

  return (
    <Image
      {...props}
      ref={ref}
      className={`${className} ${loaded ? 'img-unblur' : 'img-pending'}`}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
