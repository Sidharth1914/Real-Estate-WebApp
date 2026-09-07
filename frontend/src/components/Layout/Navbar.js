import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { House, List, X, SignOut } from '@phosphor-icons/react';

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-medium transition-colors ${
        active ? 'text-brand-700' : 'text-stone-600 hover:text-stone-900'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const links = user
    ? [
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/properties', label: 'Browse' },
        ...(user.role === 'SELLER' ? [{ to: '/add-property', label: 'Add Property' }] : []),
        ...(user.role === 'BUYER' ? [{ to: '/bookings', label: 'My Bookings' }] : []),
        { to: '/profile', label: 'Profile' },
      ]
    : [{ to: '/properties', label: 'Browse' }];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700 text-white">
              <House size={18} weight="fill" />
            </span>
            <span className="font-bold text-stone-900 tracking-tight">Properties Hub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <SignOut size={16} /> Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-sm font-semibold text-stone-600 hover:text-stone-900">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
                >
                  Get started
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-stone-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          {user ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 text-left"
            >
              <SignOut size={16} /> Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" onClick={() => setOpen(false)}>Log in</NavLink>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white text-center"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
