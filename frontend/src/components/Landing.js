import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MagnifyingGlass, ShieldCheck, Handshake, ChartLineUp } from '@phosphor-icons/react';
import AppLayout from './Layout/AppLayout';
import PropertyCard from './ui/PropertyCard';
import { properties } from '../data/sampleProperties';
import heroImage from '../assets/hero.jpg';

const STEPS = [
  {
    icon: MagnifyingGlass,
    title: 'Search by city and budget',
    body: 'Filter listings across Bangalore, Mumbai, Delhi, and more by location and price range.',
  },
  {
    icon: Handshake,
    title: 'Talk directly to the owner',
    body: 'Every listing shows the seller\'s phone and email. No agent fees, no middleman.',
  },
  {
    icon: ShieldCheck,
    title: 'Book a viewing, move in',
    body: 'Schedule a visit in a couple of clicks, then close the deal on your own terms.',
  },
];

const STATS = [
  { value: `${properties.length}`, label: 'Active listings' },
  { value: '6', label: 'Cities covered' },
  { value: '0%', label: 'Agent commission' },
];

export default function Landing() {
  const featured = properties.slice(0, 3);

  return (
    <AppLayout footer>
      {/* Hero: asymmetric split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Find your next home, without the agent markup.
          </h1>
          <p className="mt-5 text-lg text-stone-600 max-w-md">
            Browse verified listings from owners across India and book a viewing in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/properties"
              className="rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
            >
              Browse properties
            </Link>
            <Link
              to="/register"
              className="rounded-lg border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50 transition-colors"
            >
              List your property
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden shadow-lifted"
        >
          <img src={heroImage} alt="Modern villa exterior" className="w-full h-full object-cover aspect-[4/3]" />
        </motion.div>
      </section>

      {/* Stats band */}
      <section className="border-y border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-3 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-brand-800">{s.value}</p>
              <p className="mt-1 text-xs md:text-sm text-stone-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Featured listings</h2>
          <Link to="/properties" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* How it works: vertical stack, not cards */}
      <section className="bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-12 max-w-lg">
            Three steps between browsing and moving in.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <step.icon size={22} weight="bold" />
                </span>
                <h3 className="mt-4 font-semibold text-stone-900">{step.title}</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <ChartLineUp size={32} weight="bold" className="mx-auto text-brand-200" />
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
            Have a property to sell or rent?
          </h2>
          <p className="mt-3 text-brand-100">List it in minutes and reach buyers directly.</p>
          <Link
            to="/register"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-800 hover:bg-brand-50 transition-colors"
          >
            Get started
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
