import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bed, Bathtub, Ruler, Tree, Car } from '@phosphor-icons/react';
import { formatPrice, formatSqft } from '../../utils/format';
import { onImageError, imageFallback } from '../../utils/placeholder';

const TYPE_LABEL = { HOUSE: 'House', APARTMENT: 'Apartment', COMMERCIAL: 'Commercial', LAND: 'Land' };

export default function PropertyCard({ property }) {
  const navigate = useNavigate();
  const go = () => navigate(`/property/${property._id}`);

  return (
    <div
      onClick={go}
      className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl bg-stone-900 shadow-soft hover:shadow-lifted transition-shadow duration-300"
    >
      <img
        src={property.thumbnailImage || property.images?.[0] || imageFallback}
        alt={property.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={onImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

      <span className="absolute top-3 right-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
        {TYPE_LABEL[property.propertyType] || property.propertyType}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-xl font-extrabold">{formatPrice(property.price)}</p>
        <h3 className="mt-1 font-semibold line-clamp-1">{property.title}</h3>
        <p className="mt-0.5 text-sm text-stone-200 line-clamp-1">{property.location}</p>

        <div className="mt-4 flex items-center gap-4 border-t border-white/20 pt-4 text-sm text-stone-100">
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
          <div className="mt-3 flex items-center gap-3 text-xs text-stone-200">
            {property.hasGarden && <span className="flex items-center gap-1"><Tree size={14} /> Garden</span>}
            {property.hasParking && <span className="flex items-center gap-1"><Car size={14} /> Parking</span>}
          </div>
        )}
      </div>
    </div>
  );
}
