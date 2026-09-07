import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { House, CircleNotch, WarningCircle } from '@phosphor-icons/react';
import { authAPI } from '../api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login({ username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
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
          <h1 className="text-2xl font-bold text-stone-900 text-center">Welcome back</h1>
          <p className="mt-1 text-sm text-stone-500 text-center">Sign in to your account</p>

          {error && (
            <div className="mt-6 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <WarningCircle size={18} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-stone-700 mb-1.5">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="your.username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1.5">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 disabled:opacity-60 transition-colors"
            >
              {loading && <CircleNotch size={16} className="animate-spin" />}
              {loading ? 'Signing in' : 'Sign in'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-stone-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-brand-700 hover:text-brand-800">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
