import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bed, Bathtub, Ruler, Tree, Car } from '@phosphor-icons/react';
import { formatPrice, formatSqft } from '../../utils/format';
import { onImageError } from '../../utils/placeholder';

const TYPE_LABEL = { HOUSE: 'House', APARTMENT: 'Apartment', COMMERCIAL: 'Commercial', LAND: 'Land' };

export default function PropertyCard({ property }) {
  const navigate = useNavigate();
  const go = () => navigate(`/property/${property.id}`);

  return (
    <div
      onClick={go}
      className="group cursor-pointer rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-soft hover:shadow-lifted transition-shadow duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-stone-100">
        <img
          src={property.thumbnailImage || property.images?.[0]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={onImageError}
        />
        <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-stone-800">
          {TYPE_LABEL[property.propertyType] || property.propertyType}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xl font-extrabold text-brand-800">{formatPrice(property.price)}</p>
        <h3 className="mt-1 font-semibold text-stone-900 line-clamp-1">{property.title}</h3>
        <p className="mt-0.5 text-sm text-stone-500 line-clamp-1">{property.location}</p>

        <div className="mt-4 flex items-center gap-4 border-t border-stone-100 pt-4 text-sm text-stone-600">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5"><Bed size={16} /> {property.bedrooms}</span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1.5"><Bathtub size={16} /> {property.bathrooms}</span>
          )}
          {property.squareFeet && (
            <span className="flex items-center gap-1.5"><Ruler size={16} /> {formatSqft(property.squareFeet)} sqft</span>
          )}
        </div>

        {(property.hasGarden || property.hasParking) && (
          <div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
            {property.hasGarden && <span className="flex items-center gap-1"><Tree size={14} /> Garden</span>}
            {property.hasParking && <span className="flex items-center gap-1"><Car size={14} /> Parking</span>}
          </div>
        )}
      </div>
    </div>
  );
}
