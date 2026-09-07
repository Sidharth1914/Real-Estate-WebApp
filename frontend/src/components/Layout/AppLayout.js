import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout({ children, footer = false }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      {footer && <Footer />}
    </div>
  );
}
