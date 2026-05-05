import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sampleProperties } from '../data/sampleProperties';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showViewingModal, setShowViewingModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [viewingData, setViewingData] = useState({ date: '', time: '' });

  useEffect(() => {
    if (id !== undefined) {
      const prop = sampleProperties[parseInt(id)];
      setProperty(prop);
      setLoading(false);
    }
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleScheduleViewing = () => {
    if (viewingData.date && viewingData.time) {
      alert(`✅ Viewing scheduled for ${viewingData.date} at ${viewingData.time}`);
      setShowViewingModal(false);
      setViewingData({ date: '', time: '' });
    } else {
      alert('Please select both date and time');
    }
  };

  if (loading) return (
    <div className="page-container" style={{ textAlign: 'center', paddingTop: '80px' }}>
      <div className="loading" style={{ margin: '0 auto', marginBottom: '16px' }}></div>
      <p>Loading property details...</p>
    </div>
  );

  if (!property) return (
    <div className="page-container" style={{ textAlign: 'center', paddingTop: '80px' }}>
      <h2>Property not found</h2>
      <button className="btn btn-primary" onClick={() => navigate('/properties')} style={{ marginTop: '16px' }}>
        Back to Properties
      </button>
    </div>
  );

  return (
    <div className="page-container" style={{ paddingTop: 0 }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
        padding: '24px 20px',
        marginLeft: '-20px',
        marginRight: '-20px',
        marginTop: '-32px',
        marginBottom: '32px',
        color: 'white'
      }}>
        <div className="container">
          <button 
            onClick={() => navigate('/properties')}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              marginBottom: '16px',
              fontWeight: '600'
            }}
          >
            ← Back to Properties
          </button>
          <h1 style={{ margin: 0, color: 'white', fontSize: '32px' }}>{property.title}</h1>
          <p style={{ margin: '8px 0 0 0', opacity: 0.9 }}>📍 {property.location}</p>
        </div>
      </div>

      <div className="container">
        {/* Image Gallery */}
        <div style={{ marginBottom: '32px' }}>
          <div className="card" style={{ padding: 0, overflow: 'hidden', height: '450px', marginBottom: '20px' }}>
            <img 
              src={property.images?.[selectedImage] || property.thumbnailImage || 'https://via.placeholder.com/800x450'} 
              alt={property.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450'; }}
            />
          </div>

          {/* Thumbnail Gallery */}
          {property.images && property.images.length > 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '12px' }}>
              {property.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: idx === selectedImage ? '3px solid var(--primary-color)' : '2px solid var(--border-color)',
                    transition: 'all 0.3s ease',
                    height: '80px',
                    opacity: idx === selectedImage ? 1 : 0.7
                  }}
                >
                  <img 
                    src={img}
                    alt={`View ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/100x80'; }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price & Key Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div>
            <div className="card">
              <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>LISTED PRICE</p>
              <h2 style={{ margin: 0, color: 'var(--primary-color)', fontSize: '42px', fontWeight: '800' }}>
                {formatPrice(property.price)}
              </h2>
            </div>
          </div>
          <div>
            <div className="card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ textAlign: 'center', padding: '12px', background: 'linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-color)' }}>{property.propertyType}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>Type</div>
                </div>
                <div style={{ textAlign: 'center', padding: '12px', background: 'linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-color)' }}>{property.floorsInBuilding}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>Floors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="card" style={{ marginBottom: '32px', background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fbff 100%)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '16px' }}>📍 Property Address</h3>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>{property.address || property.location}</p>
        </div>

        {/* Key Dimensions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {property.bedrooms > 0 && (
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary-color)' }}>🛏️</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', margin: '8px 0' }}>{property.bedrooms}</div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Bedrooms</p>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>🚿</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', margin: '8px 0' }}>{property.bathrooms}</div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Bathrooms</p>
            </div>
          )}
          {property.totalRooms > 0 && (
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>🚪</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', margin: '8px 0' }}>{property.totalRooms}</div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Total Rooms</p>
            </div>
          )}
          {property.squareFeet && (
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>📐</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', margin: '8px 0' }}>{(property.squareFeet / 1000).toFixed(1)}K</div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Sq Ft</p>
            </div>
          )}
        </div>

        {/* About Property */}
        <div className="card" style={{ marginBottom: '32px', borderLeft: '4px solid var(--primary-color)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '18px' }}>ℹ️ About This Property</h3>
          <p style={{ margin: 0, lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '16px' }}>{property.description}</p>
        </div>

        {/* Property Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          {/* Dimensions */}
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '16px' }}>📏 Property Dimensions</h3>
            <div>
              {property.squareFeet && (
                <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--border-color)', marginBottom: '12px' }}>
                  <p style={{ margin: '0 0 4px 0', color: 'var(--text-secondary)', fontSize: '12px' }}>TOTAL AREA</p>
                  <p style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{property.squareFeet.toLocaleString()} sq ft</p>
                </div>
              )}
              {property.hasGarden && (
                <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--border-color)', marginBottom: '12px' }}>
                  <p style={{ margin: '0 0 4px 0', color: 'var(--text-secondary)', fontSize: '12px' }}>🌳 GARDEN SIZE</p>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{property.gardenSize || 'Available'}</p>
                </div>
              )}
              {property.hasBackyard && (
                <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--border-color)', marginBottom: '12px' }}>
                  <p style={{ margin: '0 0 4px 0', color: 'var(--text-secondary)', fontSize: '12px' }}>🏞️ BACKYARD SIZE</p>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{property.backyardSize || 'Available'}</p>
                </div>
              )}
              {property.hasParking && (
                <div>
                  <p style={{ margin: '0 0 4px 0', color: 'var(--text-secondary)', fontSize: '12px' }}>🚗 PARKING</p>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{property.parkingSpaces} Space{property.parkingSpaces > 1 ? 's' : ''}</p>
                </div>
              )}
            </div>
          </div>

          {/* Seller Info */}
          <div className="card" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fbff 100%)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '16px' }}>👤 Seller Information</h3>
            <div>
              <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Name</p>
              <p style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '700' }}>{property.seller?.name || 'Property Owner'}</p>

              <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Phone</p>
              <p style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '700' }}>{property.seller?.phone || 'Available'}</p>

              <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Email</p>
              <p style={{ margin: 0, fontSize: '16px', fontWeight: '700' }}>{property.seller?.email || 'Available'}</p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="card" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '24px', fontSize: '18px' }}>🛋️ Amenities & Facilities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
              {property.amenities.map((amenity, idx) => (
                <div 
                  key={idx} 
                  style={{
                    padding: '20px',
                    background: 'linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%)',
                    border: '2px solid var(--primary-light)',
                    borderRadius: '12px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                    {amenity.includes('Pool') ? '🏊' :
                     amenity.includes('Gym') ? '💪' :
                     amenity.includes('Garden') ? '🌳' :
                     amenity.includes('Security') ? '🔐' :
                     amenity.includes('Parking') ? '🚗' :
                     amenity.includes('Servant') ? '👥' :
                     amenity.includes('Concierge') ? '🎩' :
                     amenity.includes('Beach') ? '🏖️' :
                     amenity.includes('Rooftop') ? '⛅' :
                     amenity.includes('Lake') ? '🌊' :
                     amenity.includes('Jacuzzi') ? '🛁' :
                     amenity.includes('Theater') ? '🎬' :
                     amenity.includes('Spa') ? '💆' : '✨'}
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {property.features && property.features.length > 0 && (
          <div className="card" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '24px', fontSize: '18px' }}>⭐ Special Features</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
              {property.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  style={{
                    padding: '20px',
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fef9f0 100%)',
                    border: '2px solid #fed7aa',
                    borderRadius: '12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(244, 158, 11, 0.1)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                    {feature.includes('Kitchen') ? '🍳' :
                     feature.includes('Smart') ? '🤖' :
                     feature.includes('Solar') ? '☀️' :
                     feature.includes('Water') ? '💧' :
                     feature.includes('Theater') ? '🎬' :
                     feature.includes('View') ? '🏞️' :
                     feature.includes('Balcony') ? '🪟' :
                     feature.includes('Air') ? '❄️' :
                     feature.includes('Pool') ? '🏊' :
                     feature.includes('Home') ? '🏠' :
                     feature.includes('Entrance') ? '🚪' :
                     feature.includes('Floor') ? '📐' :
                     feature.includes('Gym') ? '💪' :
                     feature.includes('Study') ? '📚' : '✨'}
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nearby Locations */}
        {property.nearbyLocations && property.nearbyLocations.length > 0 && (
          <div className="card" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '24px', fontSize: '18px' }}>📍 Nearby Locations & Points of Interest</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              {property.nearbyLocations.map((location, idx) => (
                <div key={idx} style={{ padding: '16px', background: 'var(--bg-tertiary)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700' }}>{location.type}</p>
                  <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{location.name}</p>
                  <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>📏 {location.distance}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '32px', marginBottom: '32px' }}>
          <button 
            className="btn btn-primary"
            onClick={() => setShowViewingModal(true)}
            style={{ padding: '16px 24px', fontSize: '16px' }}
          >
            📅 Schedule Viewing
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowContactModal(true)}
            style={{ padding: '16px 24px', fontSize: '16px' }}
          >
            📞 Contact Seller
          </button>
        </div>
      </div>

      {/* Schedule Viewing Modal */}
      {showViewingModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="card" style={{ maxWidth: '500px', width: '90%' }}>
            <h2 style={{ marginTop: 0, marginBottom: '20px' }}>📅 Schedule Property Viewing</h2>

            <div className="form-group">
              <label className="form-label">Select Date</label>
              <input
                type="date"
                value={viewingData.date}
                onChange={(e) => setViewingData({ ...viewingData, date: e.target.value })}
                className="form-input"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Select Time</label>
              <select
                value={viewingData.time}
                onChange={(e) => setViewingData({ ...viewingData, time: e.target.value })}
                className="form-input"
              >
                <option value="">Choose a time slot</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button
                className="btn btn-primary"
                onClick={handleScheduleViewing}
              >
                Confirm Booking
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowViewingModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Seller Modal */}
      {showContactModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="card" style={{ maxWidth: '500px', width: '90%' }}>
            <h2 style={{ marginTop: 0, marginBottom: '24px' }}>📞 Contact Seller</h2>

            <div style={{ marginBottom: '24px', padding: '20px', background: 'linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%)', borderRadius: '12px' }}>
              <p style={{ margin: '0 0 12px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>Seller Name</p>
              <p style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '700' }}>{property.seller?.name || 'Property Owner'}</p>

              <p style={{ margin: '0 0 12px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>📞 Phone Number</p>
              <a href={`tel:${property.seller?.phone}`} style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: 'var(--primary-color)', textDecoration: 'none', display: 'block' }}>
                {property.seller?.phone || 'Not available'}
              </a>

              <p style={{ margin: '0 0 12px 0', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600' }}>📧 Email Address</p>
              <a href={`mailto:${property.seller?.email}`} style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: 'var(--primary-color)', textDecoration: 'none' }}>
                {property.seller?.email || 'Not available'}
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button className="btn btn-primary" onClick={() => window.location.href = `tel:${property.seller?.phone}`}>
                Call Seller
              </button>
              <button className="btn btn-secondary" onClick={() => setShowContactModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
