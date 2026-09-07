import React, { useEffect, useState } from 'react';
import { CircleNotch, Camera } from '@phosphor-icons/react';
import { authAPI } from '../api';
import { useToast } from './ui/Toast';
import AppLayout from './Layout/AppLayout';

const inputClass = 'w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500';

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

export default function Profile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '',
    city: '', state: '', zipCode: '', bio: '',
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const toast = useToast();

  useEffect(() => {
    authAPI.getMe()
      .then(({ data: raw }) => {
        // /users/me returns the raw Mongoose doc (`_id`), but login/register
        // return `id` and the rest of the app (Navbar, Dashboard) reads
        // `user.id` from localStorage — normalize so both agree.
        const data = { ...raw, id: raw._id };
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phone: data.phone || '',
          address: data.address || '',
          city: data.city || '',
          state: data.state || '',
          zipCode: data.zipCode || '',
          bio: data.bio || '',
        });
        setProfilePhoto(data.profilePhoto || null);
      })
      .catch(() => toast('Could not load your profile.', 'error'))
      .finally(() => setFetching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfilePhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { email, ...editable } = formData;
      const { data } = await authAPI.update(user.id, { ...editable, profilePhoto });
      setUser((prev) => ({ ...prev, ...data }));
      localStorage.setItem('user', JSON.stringify({ ...user, ...data }));
      toast('Profile updated successfully.', 'success');
    } catch (err) {
      toast(err.response?.data?.error || 'Failed to update profile.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <AppLayout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center text-stone-400">
          <CircleNotch size={24} className="animate-spin mx-auto" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900">My profile</h1>
        <p className="mt-1 text-stone-500">Manage your account details.</p>

        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-6">
            <div className="relative shrink-0">
              <img
                src={profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username || '')}&background=047857&color=fff`}
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover border-2 border-brand-200"
              />
              <label className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-white cursor-pointer hover:bg-brand-800">
                <Camera size={14} />
                <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
              </label>
            </div>
            <div>
              <p className="font-semibold text-stone-900">{user.username}</p>
              <p className="text-sm text-stone-500">{user.role}</p>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Field label="First name">
              <input name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label="Last name">
              <input name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label="Email">
              <input value={formData.email} disabled className={`${inputClass} bg-stone-50 text-stone-500`} />
            </Field>
            <Field label="Phone">
              <input name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Address">
                <input name="address" value={formData.address} onChange={handleChange} className={inputClass} />
              </Field>
            </div>
            <Field label="City">
              <input name="city" value={formData.city} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label="State">
              <input name="state" value={formData.state} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label="ZIP code">
              <input name="zipCode" value={formData.zipCode} onChange={handleChange} className={inputClass} />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Bio">
              <textarea name="bio" value={formData.bio} onChange={handleChange} rows={4} className={inputClass} placeholder="Tell us about yourself" />
            </Field>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 disabled:opacity-60 transition-colors"
          >
            {loading && <CircleNotch size={16} className="animate-spin" />}
            {loading ? 'Saving' : 'Save profile'}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
