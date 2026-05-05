import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { propertyAPI } from '../api';
import { sampleProperties } from '../data/sampleProperties';

export default function PropertyList() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async (params = {}) => {
    try {
      setLoading(true);
      // Use sample data if no properties in DB
      setProperties(sampleProperties);
    } catch (err) {
      console.error('Error fetching properties:', err);
      setProperties(sampleProperties);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let filtered = sampleProperties;
    
    if (searchParams.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(searchParams.location.toLowerCase())
      );
    }
    if (searchParams.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(searchParams.minPrice));
    }
    if (searchParams.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(searchParams.maxPrice));
    }
    
    setProperties(filtered);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="page-container" style={{ paddingTop: 0 }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
        padding: '48px 20px',
        marginLeft: '-20px',
        marginRight: '-20px',
        marginTop: '-32px',
        color: 'white',
        marginBottom: '32px'
      }}>
        <div className="container">
          <h1 style={{ margin: 0, marginBottom: '8px', color: 'white', fontSize: '42px' }}>Browse Properties</h1>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '16px' }}>Find your perfect home from {properties.length}+ premium listings</p>
        </div>
      </div>

      <div className="container">
        {/* Search Bar */}
        <div className="form-section" style={{ marginBottom: '32px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '24px' }}>Search Properties</h3>
          <form onSubmit={handleSearch}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="Search by location..."
                value={searchParams.location}
                onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                className="form-input"
              />
              <input
                type="number"
                placeholder="Min Price (₹)"
                value={searchParams.minPrice}
                onChange={(e) => setSearchParams({ ...searchParams, minPrice: e.target.value })}
                className="form-input"
              />
              <input
                type="number"
                placeholder="Max Price (₹)"
                value={searchParams.maxPrice}
                onChange={(e) => setSearchParams({ ...searchParams, maxPrice: e.target.value })}
                className="form-input"
              />
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                🔍 Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchParams({ location: '', minPrice: '', maxPrice: '' });
                  setProperties(sampleProperties);
                }}
                className="btn btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {loading ? (
          <div style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
            <div className="loading" style={{ margin: '0 auto', marginBottom: '16px' }}></div>
            <p style={{ color: 'var(--text-secondary)' }}>Loading properties...</p>
          </div>
        ) : (
          <>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '16px', fontWeight: '600' }}>
              Found <strong>{properties.length}</strong> properties
            </p>
            <div className="grid grid-3">
              {properties.map((property, idx) => (
                <div 
                  key={idx} 
                  onClick={() => navigate(`/property/${idx}`)}
                  className="property-card"
                >
                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={property.thumbnailImage || property.images?.[0] || 'https://via.placeholder.com/400x300'}
                      alt={property.title}
                      className="property-image"
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'var(--primary-color)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      {property.propertyType}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="property-info">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-location">📍 {property.location}</p>
                    
                    <div className="property-price">
                      {formatPrice(property.price)}
                    </div>

                    {/* Quick Stats */}
                    <div className="property-stats">
                      {property.bedrooms !== undefined && (
                        <div className="property-stat">
                          <div className="property-stat-value">{property.bedrooms}</div>
                          <div className="property-stat-label">Beds</div>
                        </div>
                      )}
                      {property.bathrooms !== undefined && (
                        <div className="property-stat">
                          <div className="property-stat-value">{property.bathrooms}</div>
                          <div className="property-stat-label">Baths</div>
                        </div>
                      )}
                      {property.squareFeet && (
                        <div className="property-stat">
                          <div className="property-stat-value">{(property.squareFeet / 1000).toFixed(1)}K</div>
                          <div className="property-stat-label">Sq Ft</div>
                        </div>
                      )}
                    </div>

                    {/* Additional Info */}
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                      {property.hasGarden && <p style={{ margin: '4px 0' }}>🌳 Garden</p>}
                      {property.hasBackyard && <p style={{ margin: '4px 0' }}>🏞️ Backyard</p>}
                      {property.hasParking && <p style={{ margin: '4px 0' }}>🚗 Parking</p>}
                    </div>

                    <button 
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '16px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/property/${idx}`);
                      }}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {properties.length === 0 && (
              <div style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>No properties found. Try adjusting your search criteria.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
