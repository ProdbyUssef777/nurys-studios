'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

// Wraps next/image with a blur-up loading effect. The blur/opacity
// transition lives on a wrapper div so it never fights with the
// image's own hover-scale transition classes.
export default function BlurImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`h-full w-full transition-[filter,opacity] duration-700 ease-out ${
        loaded ? 'opacity-100 blur-0' : 'opacity-60 blur-md'
      }`}
    >
      <Image
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          props.onLoad?.(e);
        }}
      />
    </div>
  );
}
