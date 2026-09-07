export function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatSqft(sqft) {
  if (!sqft) return null;
  return sqft >= 1000 ? `${(sqft / 1000).toFixed(1)}K` : `${sqft}`;
}
