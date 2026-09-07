import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { House } from '@phosphor-icons/react';
import { HERO_SLIDES } from '../../data/heroImages';

export default function AuthLayout({ tagline, children }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-[100dvh] grid md:grid-cols-2 bg-stone-50">
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
              <House size={18} weight="fill" />
            </span>
            <span className="font-bold text-stone-900">Properties Hub</span>
          </Link>
          {children}
        </div>
      </div>

      <div className="relative hidden md:block overflow-hidden">
        {HERO_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === slide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        {tagline && (
          <p className="absolute bottom-10 left-10 right-10 text-xl font-semibold text-white leading-snug">
            {tagline}
          </p>
        )}
      </div>
    </div>
  );
}
