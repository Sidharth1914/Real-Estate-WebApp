import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Buildings, PlusCircle, CalendarBlank, UserCircle, Info, ArrowRight } from '@phosphor-icons/react';
import AppLayout from './Layout/AppLayout';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const cards = [
    {
      icon: Buildings,
      title: 'Browse properties',
      body: 'View every available listing on the platform.',
      onClick: () => navigate('/properties'),
    },
    ...(user.role === 'SELLER'
      ? [{
          icon: PlusCircle,
          title: 'Add a property',
          body: 'List a new property for sale or rent.',
          onClick: () => navigate('/add-property'),
        }]
      : []),
    ...(user.role === 'BUYER'
      ? [{
          icon: CalendarBlank,
          title: 'My bookings',
          body: 'View your scheduled property viewings.',
          onClick: () => navigate('/bookings'),
        }]
      : []),
    {
      icon: UserCircle,
      title: 'Profile',
      body: 'Manage your account and personal details.',
      onClick: () => navigate('/profile'),
    },
  ];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900">
          Welcome back, {user.username}
        </h1>
        <p className="mt-1 text-stone-500">Choose an action to get started.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <button
              key={card.title}
              onClick={card.onClick}
              className="text-left rounded-2xl border border-stone-200 bg-white p-6 shadow-soft hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <card.icon size={20} weight="bold" />
              </span>
              <h3 className="mt-4 font-semibold text-stone-900 flex items-center gap-1.5">
                {card.title} <ArrowRight size={14} className="opacity-50" />
              </h3>
              <p className="mt-1.5 text-sm text-stone-500">{card.body}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-5">
          <Info size={20} weight="fill" className="text-brand-700 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-stone-900 text-sm">Getting started</h3>
            <p className="mt-1 text-sm text-stone-600">
              {user.role === 'SELLER'
                ? 'Start listing your properties to connect with buyers. Click "Add a property" to get started.'
                : 'Browse properties, search by location or price, and book a viewing when you find one you like.'}
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
