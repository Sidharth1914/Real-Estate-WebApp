import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleNotch } from '@phosphor-icons/react';
import { propertyAPI } from '../api';
import { useToast } from './ui/Toast';
import AppLayout from './Layout/AppLayout';

const EMPTY_FORM = {
  title: '', description: '', price: '', location: '', bedrooms: '',
  bathrooms: '', squareFeet: '', propertyType: 'HOUSE', amenities: '',
};

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-1.5">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass = 'w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500';

export default function AddProperty() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        ...formData,
        price: parseFloat(formData.price),
        bedrooms: parseInt(formData.bedrooms, 10) || 0,
        bathrooms: parseInt(formData.bathrooms, 10) || 0,
        squareFeet: parseInt(formData.squareFeet, 10) || undefined,
        amenities: formData.amenities ? formData.amenities.split(',').map((a) => a.trim()) : [],
      };

      await propertyAPI.create(data);
      toast('Property added successfully.', 'success');
      setFormData(EMPTY_FORM);
      navigate('/properties');
    } catch (err) {
      toast(err.response?.data?.error || 'Failed to add property.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900">Add a new property</h1>
        <p className="mt-1 text-stone-500">List your property for buyers to discover.</p>

        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Title" required>
              <input name="title" value={formData.title} onChange={handleChange} required className={inputClass} placeholder="e.g. Modern Apartment in Mumbai" />
            </Field>
            <Field label="Price (₹)" required>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required className={inputClass} placeholder="8500000" />
            </Field>
            <Field label="Location" required>
              <input name="location" value={formData.location} onChange={handleChange} required className={inputClass} placeholder="e.g. Marine Drive, Mumbai" />
            </Field>
            <Field label="Property type">
              <select name="propertyType" value={formData.propertyType} onChange={handleChange} className={inputClass}>
                <option value="HOUSE">House</option>
                <option value="APARTMENT">Apartment</option>
                <option value="COMMERCIAL">Commercial</option>
                <option value="LAND">Land</option>
              </select>
            </Field>
            <Field label="Bedrooms">
              <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label="Bathrooms">
              <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label="Square feet">
              <input type="number" name="squareFeet" value={formData.squareFeet} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label="Amenities">
              <input name="amenities" value={formData.amenities} onChange={handleChange} className={inputClass} placeholder="Parking, Garden, Pool" />
            </Field>
          </div>

          <Field label="Description">
            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className={inputClass} />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 disabled:opacity-60 transition-colors"
          >
            {loading && <CircleNotch size={16} className="animate-spin" />}
            {loading ? 'Adding property' : 'Add property'}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
