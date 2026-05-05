import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="page-container">
      {/* Navigation */}
      <nav style={{ marginBottom: '32px', marginLeft: '-20px', marginRight: '-20px', marginTop: '-32px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', paddingBottom: '16px' }}>
          <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: 'white' }}>🏠 Properties Hub</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'white' }}>
            <span style={{ fontSize: '14px' }}>Welcome, <strong>{user.username}</strong> <span style={{ opacity: 0.8 }}>({user.role})</span></span>
            <button
              onClick={handleLogout}
              className="btn btn-danger"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container">
        <div className="page-header">
          <h1>Dashboard</h1>
          <p style={{ marginBottom: 0, fontSize: '16px' }}>Welcome back! Choose an action to get started.</p>
        </div>

        <div className="grid grid-4 mb-8">
          {/* Quick Links */}
          <div className="card" style={{ cursor: 'pointer' }}
               onClick={() => navigate('/properties')}>
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>🏘️ Browse Properties</h3>
            <p>View all available properties in our database</p>
          </div>

          {user.role === 'SELLER' && (
            <div className="card" style={{ cursor: 'pointer' }}
                 onClick={() => navigate('/add-property')}>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>➕ Add Property</h3>
              <p>List a new property for sale or rent</p>
            </div>
          )}

          {user.role === 'BUYER' && (
            <div className="card" style={{ cursor: 'pointer' }}
                 onClick={() => navigate('/bookings')}>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>📅 My Bookings</h3>
              <p>View your scheduled property viewings</p>
            </div>
          )}

          <div className="card" style={{ cursor: 'pointer' }}
               onClick={() => navigate('/profile')}>
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>👤 Profile</h3>
            <p>Manage your account and personal details</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="alert alert-info">
          <span style={{ fontSize: '20px' }}>📌</span>
          <div>
            <h3 style={{ margin: 0, marginBottom: '4px', fontSize: '18px' }}>Getting Started</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>
              {user.role === 'SELLER'
                ? 'Start listing your properties to connect with buyers. Click "Add Property" to get started.'
                : 'Browse properties, search by location or price, and book properties for viewing.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
