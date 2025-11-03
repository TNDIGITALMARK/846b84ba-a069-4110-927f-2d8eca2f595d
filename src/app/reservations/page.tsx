'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Reservation submitted:', formData);
    setSubmitted(true);
  };

  const timeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
  ];

  if (submitted) {
    return (
      <div className="bg-[hsl(var(--background))] min-h-screen py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-card p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-serif">
              Reservation Confirmed!
            </h1>
            <p className="text-lg text-secondary mb-2">
              Thank you, {formData.name}!
            </p>
            <p className="text-secondary mb-6">
              Your reservation for {formData.guests}{' '}
              {parseInt(formData.guests) === 1 ? 'person' : 'people'} on{' '}
              {new Date(formData.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              at {formData.time} has been confirmed.
            </p>
            <p className="text-sm text-secondary mb-8">
              A confirmation email will be sent to {formData.email}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="btn-primary">
                BACK TO HOME
              </Link>
              <Link href="/menu" className="btn-primary bg-[hsl(var(--color-secondary))]">
                VIEW MENU
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[hsl(var(--background))] min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-serif">
            Make a Reservation
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Reserve your table and experience authentic flavors rooted in
            tradition
          </p>
        </div>

        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label htmlFor="date" className="block mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="block mb-2">
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block mb-2">
                Number of Guests *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Person' : 'People'}
                  </option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="specialRequests" className="block mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button type="submit" className="btn-primary w-full text-center">
                CONFIRM RESERVATION
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-[hsl(var(--border))]">
            <p className="text-sm text-secondary text-center">
              For parties larger than 10 people or catering inquiries, please
              call us directly at{' '}
              <a
                href="tel:+15551234567"
                className="text-[hsl(var(--color-primary))] hover:underline"
              >
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-card p-6 text-center">
            <h3 className="font-semibold mb-2 text-serif">Dine-In</h3>
            <p className="text-sm text-secondary">
              Experience our warm atmosphere and authentic flavors
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-card p-6 text-center">
            <h3 className="font-semibold mb-2 text-serif">Takeout</h3>
            <p className="text-sm text-secondary">
              Enjoy our food at home with convenient pickup
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-card p-6 text-center">
            <h3 className="font-semibold mb-2 text-serif">Catering</h3>
            <p className="text-sm text-secondary">
              Let us cater your next event with authentic cuisine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
