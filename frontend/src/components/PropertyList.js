import React, { useState } from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';
import AppLayout from './Layout/AppLayout';
import PropertyCard from './ui/PropertyCard';
import { properties as allProperties } from '../data/sampleProperties';

const EMPTY_SEARCH = { location: '', minPrice: '', maxPrice: '' };

export default function PropertyList() {
  const [properties, setProperties] = useState(allProperties);
  const [search, setSearch] = useState(EMPTY_SEARCH);

  const handleSearch = (e) => {
    e.preventDefault();
    let filtered = allProperties;

    if (search.location) {
      filtered = filtered.filter((p) => p.location.toLowerCase().includes(search.location.toLowerCase()));
    }
    if (search.minPrice) {
      filtered = filtered.filter((p) => p.price >= parseInt(search.minPrice, 10));
    }
    if (search.maxPrice) {
      filtered = filtered.filter((p) => p.price <= parseInt(search.maxPrice, 10));
    }
    setProperties(filtered);
  };

  const clearSearch = () => {
    setSearch(EMPTY_SEARCH);
    setProperties(allProperties);
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900">Browse properties</h1>
        <p className="mt-1 text-stone-500">Find your perfect home from {allProperties.length} listings.</p>

        <form onSubmit={handleSearch} className="mt-6 rounded-2xl border border-stone-200 bg-white p-4 grid sm:grid-cols-[2fr_1fr_1fr_auto] gap-3">
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
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
            >
              <MagnifyingGlass size={16} /> Search
            </button>
            {(search.location || search.minPrice || search.maxPrice) && (
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
          {properties.length} propert{properties.length === 1 ? 'y' : 'ies'} found
        </p>

        {properties.length > 0 ? (
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
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
