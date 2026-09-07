import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft, Bed, Bathtub, DoorOpen, Ruler, MapPin, Tree, Car, Info,
  CalendarBlank, Phone, X, ArrowSquareOut,
} from '@phosphor-icons/react';
import AppLayout from './Layout/AppLayout';
import { properties } from '../data/sampleProperties';
import { formatPrice } from '../utils/format';
import { amenityIcon, locationIcon, stripEmoji } from '../utils/icons';
import { useToast } from './ui/Toast';

const TIME_SLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

function Modal({ onClose, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] bg-stone-900/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lifted"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [property, setProperty] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showViewingModal, setShowViewingModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [viewingData, setViewingData] = useState({ date: '', time: '' });

  useEffect(() => {
    setProperty(properties.find((p) => p.id === parseInt(id, 10)) || null);
    setSelectedImage(0);
  }, [id]);

  if (!property) {
    return (
      <AppLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
          <h2 className="text-xl font-semibold text-stone-900">Property not found</h2>
          <button onClick={() => navigate('/properties')} className="mt-4 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800">
            Back to properties
          </button>
        </div>
      </AppLayout>
    );
  }

  const handleScheduleViewing = () => {
    if (!viewingData.date || !viewingData.time) {
      toast('Please select both a date and a time.', 'error');
      return;
    }
    toast(`Viewing scheduled for ${viewingData.date} at ${viewingData.time}.`, 'success');
    setShowViewingModal(false);
    setViewingData({ date: '', time: '' });
  };

  const stats = [
    property.bedrooms > 0 && { icon: Bed, value: property.bedrooms, label: 'Bedrooms' },
    property.bathrooms > 0 && { icon: Bathtub, value: property.bathrooms, label: 'Bathrooms' },
    property.totalRooms > 0 && { icon: DoorOpen, value: property.totalRooms, label: 'Total rooms' },
    property.squareFeet && { icon: Ruler, value: property.squareFeet.toLocaleString(), label: 'Sq ft' },
  ].filter(Boolean);

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Link to="/properties" className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-stone-800">
          <ArrowLeft size={16} /> Back to properties
        </Link>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-stone-900">{property.title}</h1>
        <p className="mt-1 flex items-center gap-1.5 text-stone-500">
          <MapPin size={16} /> {property.location}
        </p>

        {/* Gallery */}
        <div className="mt-6">
          <div className="rounded-2xl overflow-hidden h-[420px] bg-stone-100">
            <img
              src={property.images?.[selectedImage] || property.thumbnailImage}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          {property.images && property.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
              {property.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-16 rounded-lg overflow-hidden border-2 transition-opacity ${
                    idx === selectedImage ? 'border-brand-600' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price + stats */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Listed price</p>
            <p className="mt-1 text-3xl font-extrabold text-brand-800">{formatPrice(property.price)}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 grid grid-cols-2 gap-4">
            {stats.slice(0, 4).map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 shrink-0">
                  <s.icon size={18} />
                </span>
                <div>
                  <p className="font-semibold text-stone-900 leading-none">{s.value}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-400">
            <MapPin size={14} /> Address
          </p>
          <p className="mt-1.5 font-medium text-stone-900">{property.address || property.location}</p>
        </div>

        {/* About */}
        <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6">
          <h3 className="flex items-center gap-1.5 font-semibold text-stone-900">
            <Info size={18} className="text-brand-700" /> About this property
          </h3>
          <p className="mt-3 text-stone-600 leading-relaxed">{property.description}</p>
        </div>

        {/* Dimensions + seller */}
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-semibold text-stone-900 mb-4">Dimensions</h3>
            <dl className="space-y-3 text-sm">
              {property.squareFeet && (
                <div className="flex justify-between">
                  <dt className="text-stone-500">Total area</dt>
                  <dd className="font-medium text-stone-900">{property.squareFeet.toLocaleString()} sq ft</dd>
                </div>
              )}
              {property.hasGarden && (
                <div className="flex justify-between items-center">
                  <dt className="flex items-center gap-1.5 text-stone-500"><Tree size={14} /> Garden</dt>
                  <dd className="font-medium text-stone-900">{property.gardenSize || 'Available'}</dd>
                </div>
              )}
              {property.hasParking && (
                <div className="flex justify-between items-center">
                  <dt className="flex items-center gap-1.5 text-stone-500"><Car size={14} /> Parking</dt>
                  <dd className="font-medium text-stone-900">
                    {property.parkingSpaces} space{property.parkingSpaces > 1 ? 's' : ''}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="font-semibold text-stone-900 mb-4">Seller information</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-stone-500">Name</p>
                <p className="font-medium text-stone-900">{property.seller?.name || 'Property owner'}</p>
              </div>
              <div>
                <p className="text-stone-500">Phone</p>
                <p className="font-medium text-stone-900">{property.seller?.phone || 'Available on request'}</p>
              </div>
              <div>
                <p className="text-stone-500">Email</p>
                <p className="font-medium text-stone-900">{property.seller?.email || 'Available on request'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        {property.amenities?.length > 0 && (
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-semibold text-stone-900 mb-4">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.amenities.map((amenity) => {
                const Icon = amenityIcon(amenity);
                return (
                  <div key={amenity} className="flex items-center gap-2.5 rounded-lg bg-stone-50 px-3 py-2.5 text-sm">
                    <Icon size={16} className="text-brand-700 shrink-0" />
                    <span className="text-stone-700">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Features */}
        {property.features?.length > 0 && (
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-semibold text-stone-900 mb-4">Special features</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.features.map((feature) => {
                const Icon = amenityIcon(feature);
                return (
                  <div key={feature} className="flex items-center gap-2.5 rounded-lg bg-stone-50 px-3 py-2.5 text-sm">
                    <Icon size={16} className="text-brand-700 shrink-0" />
                    <span className="text-stone-700">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Nearby */}
        {property.nearbyLocations?.length > 0 && (
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-semibold text-stone-900 mb-4">Nearby</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {property.nearbyLocations.map((loc) => {
                const cleanType = stripEmoji(loc.type);
                const Icon = locationIcon(cleanType);
                return (
                  <div key={loc.name} className="flex items-start gap-3 rounded-lg border border-stone-100 px-4 py-3">
                    <Icon size={18} className="text-brand-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-stone-900 text-sm">{loc.name}</p>
                      <p className="text-xs text-stone-500 mt-0.5">{cleanType} · {loc.distance}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          <button
            onClick={() => setShowViewingModal(true)}
            className="flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            <CalendarBlank size={18} /> Schedule viewing
          </button>
          <button
            onClick={() => setShowContactModal(true)}
            className="flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50 transition-colors"
          >
            <Phone size={18} /> Contact seller
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showViewingModal && (
          <Modal onClose={() => setShowViewingModal(false)}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-stone-900">Schedule a viewing</h2>
              <button onClick={() => setShowViewingModal(false)} className="text-stone-400 hover:text-stone-600">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Date</label>
                <input
                  type="date"
                  value={viewingData.date}
                  onChange={(e) => setViewingData({ ...viewingData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Time</label>
                <select
                  value={viewingData.time}
                  onChange={(e) => setViewingData({ ...viewingData, time: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                >
                  <option value="">Choose a time slot</option>
                  {TIME_SLOTS.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button onClick={handleScheduleViewing} className="rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800">
                Confirm
              </button>
              <button onClick={() => setShowViewingModal(false)} className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50">
                Cancel
              </button>
            </div>
          </Modal>
        )}

        {showContactModal && (
          <Modal onClose={() => setShowContactModal(false)}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-stone-900">Contact seller</h2>
              <button onClick={() => setShowContactModal(false)} className="text-stone-400 hover:text-stone-600">
                <X size={20} />
              </button>
            </div>
            <div className="rounded-lg bg-brand-50 p-5 space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase text-stone-500">Name</p>
                <p className="font-semibold text-stone-900">{property.seller?.name || 'Property owner'}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-stone-500">Phone</p>
                <a href={`tel:${property.seller?.phone}`} className="flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800">
                  {property.seller?.phone || 'Not available'} <ArrowSquareOut size={14} />
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-stone-500">Email</p>
                <a href={`mailto:${property.seller?.email}`} className="flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800">
                  {property.seller?.email || 'Not available'} <ArrowSquareOut size={14} />
                </a>
              </div>
            </div>
            <button onClick={() => setShowContactModal(false)} className="mt-6 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50">
              Close
            </button>
          </Modal>
        )}
      </AnimatePresence>
    </AppLayout>
  );
}
