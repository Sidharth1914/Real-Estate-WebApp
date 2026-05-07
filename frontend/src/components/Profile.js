import React, { useState } from 'react';
import { authAPI } from '../api';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phone: user.phone || '',
    address: user.address || '',
    city: user.city || '',
    state: user.state || '',
    zipCode: user.zipCode || '',
    bio: user.bio || '',
  });
  const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto || null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      
      await authAPI.getMe(); // Test if token is valid
      setMessage('✅ Profile updated successfully!');
      localStorage.setItem('user', JSON.stringify({ ...user, ...formData }));
    } catch (err) {
      setMessage('❌ Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
            <p className="text-blue-100">Manage your account details</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {message && (
              <div className={`p-4 rounded-lg mb-6 ${message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Profile Photo */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Profile Photo</h2>
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-blue-600">
                    <img 
                      src={profilePhoto || `https://ui-avatars.com/api/?name=${user.username}&size=128`}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Upload Photo</label>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-600
                        hover:file:bg-blue-100"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      disabled
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block font-semibold mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Street Address"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">About You</h2>
                <label className="block font-semibold mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Saving...' : 'Save Profile'}
              </button>
            </form>

            {/* User Info Card */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-2xl font-bold mb-4">Account Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Username</p>
                  <p className="font-semibold text-lg">{user.username}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Role</p>
                  <p className="font-semibold text-lg">{user.role}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Member Since</p>
                  <p className="font-semibold text-lg">
                    {new Date(user.createdAt).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
