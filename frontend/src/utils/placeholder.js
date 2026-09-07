// Inline SVG fallback for a broken property photo — no third-party service to go dark on us.
export const imageFallback =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
      '<rect width="800" height="600" fill="#f5f5f4"/>' +
      '<path d="M320 260h160v140H320z" fill="none" stroke="#a8a29e" stroke-width="6"/>' +
      '<path d="M300 260 400 180 500 260" fill="none" stroke="#a8a29e" stroke-width="6" stroke-linejoin="round"/>' +
      '<rect x="370" y="330" width="60" height="70" fill="none" stroke="#a8a29e" stroke-width="6"/>' +
      '</svg>'
  );

export function onImageError(e) {
  e.currentTarget.onerror = null;
  e.currentTarget.src = imageFallback;
}
