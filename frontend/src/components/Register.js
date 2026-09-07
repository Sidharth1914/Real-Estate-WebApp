import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { House, CircleNotch, WarningCircle, User, Storefront } from '@phosphor-icons/react';
import { authAPI } from '../api';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'BUYER' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.register(formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-stone-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
            <House size={18} weight="fill" />
          </span>
          <span className="font-bold text-stone-900">Properties Hub</span>
        </Link>

        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-card">
          <h1 className="text-2xl font-bold text-stone-900 text-center">Create your account</h1>
          <p className="mt-1 text-sm text-stone-500 text-center">Join Properties Hub in a minute</p>

          {error && (
            <div className="mt-6 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <WarningCircle size={18} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="mt-6 space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-stone-700 mb-1.5">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1.5">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="At least 6 characters"
                required
              />
            </div>

            <div>
              <span className="block text-sm font-medium text-stone-700 mb-1.5">Account type</span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'BUYER', label: 'Buyer', icon: User },
                  { value: 'SELLER', label: 'Seller', icon: Storefront },
                ].map(({ value, label, icon: Icon }) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setFormData({ ...formData, role: value })}
                    className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                      formData.role === value
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-stone-300 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <Icon size={16} weight={formData.role === value ? 'fill' : 'regular'} /> {label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 disabled:opacity-60 transition-colors"
            >
              {loading && <CircleNotch size={16} className="animate-spin" />}
              {loading ? 'Creating account' : 'Create account'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-stone-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-brand-700 hover:text-brand-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
