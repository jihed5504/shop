"use client";

import { useState } from 'react';
import Image from 'next/image';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/images/placeholder.jpg",
  fill = false,
  width,
  height,
  priority = false,
  className = "",
  ...rest
}: ImageWithFallbackProps & Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "fill" | "width" | "height" | "priority" | "className">) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${fill ? 'h-full w-full' : ''} overflow-hidden ${className}`}>
      {!hasError ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          onError={() => {
            setImgSrc(fallbackSrc);
            setHasError(true);
          }}
          className={`${fill ? 'object-cover' : ''}`}
          {...rest}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
              <span className="text-primary text-lg">{alt.charAt(0) || '●'}</span>
            </div>
            <p className="text-sm text-foreground/70">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
} 