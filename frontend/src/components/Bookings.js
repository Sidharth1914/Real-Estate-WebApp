import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarBlank, CircleNotch, X, MapPin } from '@phosphor-icons/react';
import { bookingAPI } from '../api';
import { useToast } from './ui/Toast';
import AppLayout from './Layout/AppLayout';
import { formatPrice } from '../utils/format';

const STATUS_STYLES = {
  PENDING: 'bg-amber-50 text-amber-700 border-amber-200',
  CONFIRMED: 'bg-brand-50 text-brand-700 border-brand-200',
  CANCELLED: 'bg-stone-100 text-stone-500 border-stone-200',
  COMPLETED: 'bg-stone-100 text-stone-600 border-stone-200',
};

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const load = () => {
    setLoading(true);
    bookingAPI.getAll()
      .then(({ data }) => setBookings(Array.isArray(data) ? data : data?.bookings || []))
      .catch(() => toast('Could not load your bookings.', 'error'))
      .finally(() => setLoading(false));
  };

  useEffect(load, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cancelBooking = async (id) => {
    try {
      await bookingAPI.update(id, { status: 'CANCELLED' });
      toast('Booking cancelled.', 'success');
      load();
    } catch (err) {
      toast(err.response?.data?.error || 'Could not cancel booking.', 'error');
    }
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900">My bookings</h1>
        <p className="mt-1 text-stone-500">Your scheduled property viewings.</p>

        {loading ? (
          <div className="mt-16 text-center text-stone-400">
            <CircleNotch size={24} className="animate-spin mx-auto" />
          </div>
        ) : bookings.length === 0 ? (
          <div className="mt-16 text-center">
            <CalendarBlank size={32} className="mx-auto text-stone-300" />
            <p className="mt-3 text-stone-500">No bookings yet.</p>
            <Link to="/properties" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800">
              Browse properties
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {bookings.map((b) => (
              <div key={b._id} className="rounded-2xl border border-stone-200 bg-white p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-semibold text-stone-900 truncate">{b.property?.title || 'Property'}</p>
                  {b.property?.location && (
                    <p className="mt-0.5 flex items-center gap-1 text-sm text-stone-500">
                      <MapPin size={14} /> {b.property.location}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-3 text-sm text-stone-500">
                    {b.property?.price && <span className="font-medium text-stone-700">{formatPrice(b.property.price)}</span>}
                    {b.visitDate && <span>Visit: {new Date(b.visitDate).toLocaleDateString('en-IN')}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLES[b.status] || STATUS_STYLES.PENDING}`}>
                    {b.status}
                  </span>
                  {b.status !== 'CANCELLED' && b.status !== 'COMPLETED' && (
                    <button
                      onClick={() => cancelBooking(b._id)}
                      className="flex items-center justify-center h-8 w-8 rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-600"
                      aria-label="Cancel booking"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
