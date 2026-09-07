import React from 'react';
import { Link } from 'react-router-dom';
import { House } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-700 text-white">
            <House size={14} weight="fill" />
          </span>
          <span className="font-bold text-stone-900 text-sm">Properties Hub</span>
        </Link>
        <p className="text-sm text-stone-500">
          A college project. Listings shown here are sample data, not real offers.
        </p>
      </div>
    </footer>
  );
}
