import { useState } from 'react';

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  if (images.length <= 1) {
    return (
      <div className="overflow-hidden bg-[var(--color-cream)] aspect-[3/4]">
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      <div className="flex sm:flex-col gap-3 sm:w-20">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`overflow-hidden aspect-square w-16 sm:w-full bg-[var(--color-cream)] border-2 transition-colors ${
              active === i
                ? 'border-[var(--color-charcoal)]'
                : 'border-transparent hover:border-[var(--color-stone)]'
            }`}
            aria-label={`View image ${i + 1}`}
            aria-pressed={active === i}
          >
            <img
              src={img}
              alt={`${alt} thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden bg-[var(--color-cream)] aspect-[3/4]">
        <img
          src={images[active]}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-300"
          key={active}
        />
      </div>
    </div>
  );
}
