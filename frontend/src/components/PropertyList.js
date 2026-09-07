import React, { useState, useEffect } from 'react';
import { MagnifyingGlass, X, CircleNotch } from '@phosphor-icons/react';
import AppLayout from './Layout/AppLayout';
import PropertyCard from './ui/PropertyCard';
import { propertyAPI } from '../api';
import { useToast } from './ui/Toast';

const EMPTY_SEARCH = { location: '', minPrice: '', maxPrice: '', propertyType: '' };
const TYPE_OPTIONS = [
  { value: '', label: 'All types' },
  { value: 'HOUSE', label: 'House' },
  { value: 'APARTMENT', label: 'Apartment' },
  { value: 'COMMERCIAL', label: 'Commercial' },
  { value: 'LAND', label: 'Land' },
];

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(EMPTY_SEARCH);
  const toast = useToast();

  useEffect(() => {
    propertyAPI.getAll()
      .then(({ data }) => {
        setProperties(data);
        setTotal(data.length);
      })
      .catch(() => toast('Could not load properties.', 'error'))
      .finally(() => setLoading(false));
  }, [toast]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const params = {};
      if (search.location) params.location = search.location;
      if (search.minPrice) params.minPrice = search.minPrice;
      if (search.maxPrice) params.maxPrice = search.maxPrice;
      if (search.propertyType) params.propertyType = search.propertyType;
      const { data } = await propertyAPI.search(params);
      setProperties(data);
    } catch (err) {
      toast('Search failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = async () => {
    setSearch(EMPTY_SEARCH);
    setLoading(true);
    try {
      const { data } = await propertyAPI.getAll();
      setProperties(data);
    } finally {
      setLoading(false);
    }
  };

  const hasFilters = search.location || search.minPrice || search.maxPrice || search.propertyType;

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900">Browse properties</h1>
        <p className="mt-1 text-stone-500">Find your perfect home from {total} listings.</p>

        <form onSubmit={handleSearch} className="mt-6 rounded-2xl border border-stone-200 bg-white p-4 grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3">
          <input
            type="text"
            placeholder="Search by location"
            value={search.location}
            onChange={(e) => setSearch({ ...search, location: e.target.value })}
            className="rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
          <input
            type="number"
            placeholder="Min price (₹)"
            value={search.minPrice}
            onChange={(e) => setSearch({ ...search, minPrice: e.target.value })}
            className="rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
          <input
            type="number"
            placeholder="Max price (₹)"
            value={search.maxPrice}
            onChange={(e) => setSearch({ ...search, maxPrice: e.target.value })}
            className="rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
          <select
            value={search.propertyType}
            onChange={(e) => setSearch({ ...search, propertyType: e.target.value })}
            className="rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            {TYPE_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
            >
              <MagnifyingGlass size={16} /> Search
            </button>
            {hasFilters && (
              <button
                type="button"
                onClick={clearSearch}
                className="flex items-center justify-center rounded-lg border border-stone-300 px-3 text-stone-500 hover:bg-stone-50 transition-colors"
                aria-label="Clear filters"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </form>

        <p className="mt-6 text-sm font-medium text-stone-500">
          {loading ? 'Searching…' : `${properties.length} propert${properties.length === 1 ? 'y' : 'ies'} found`}
        </p>

        {loading ? (
          <div className="mt-16 text-center text-stone-400">
            <CircleNotch size={24} className="animate-spin mx-auto" />
          </div>
        ) : properties.length > 0 ? (
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-stone-500">No properties match those filters. Try widening your search.</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
