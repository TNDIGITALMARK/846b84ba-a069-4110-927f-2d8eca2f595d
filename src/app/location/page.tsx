import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LocationPage() {
  return (
    <div className="bg-[hsl(var(--background))] min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-serif">
            Visit Us
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Find us in the heart of the city, ready to serve you authentic
            Odia cuisine
          </p>
        </div>

        {/* Location Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--color-primary))] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-serif">
                  Address
                </h2>
                <p className="text-lg text-secondary">
                  127 West Room, Floor 5
                  <br />
                  Abc Enclave 245019
                  <br />
                  Downtown District
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[hsl(var(--color-primary))] hover:underline font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--color-primary))] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-serif">
                  Contact
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-secondary">
                    <strong>Phone:</strong>{' '}
                    <a
                      href="tel:+918337958044"
                      className="text-[hsl(var(--color-primary))] hover:underline"
                    >
                      +91 833 795 8044
                    </a>
                  </p>
                  <p className="text-lg text-secondary">
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:Tasteofodisha.baliapal@gmail.com"
                      className="text-[hsl(var(--color-primary))] hover:underline break-all"
                    >
                      Tasteofodisha.baliapal@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--color-primary))] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-serif">
                  Hours
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-secondary">
                    <strong>Monday - Sunday:</strong> 11:00 AM - 11:00 PM
                  </p>
                  <p className="text-sm text-secondary mt-4">
                    We are open every day to serve you. Last orders are taken 30
                    minutes before closing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Deals & Special Offers */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-semibold mb-4 text-serif text-center">
              Current Deals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[hsl(var(--background))] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-serif">
                  Lunch Thali Special
                </h3>
                <p className="text-secondary mb-3">
                  Complete Odia Thali with Dalma, Rice, and more Monday to Friday, 12 PM - 3 PM
                </p>
                <span className="text-[hsl(var(--color-primary))] font-bold text-lg">
                  ₹159
                </span>
              </div>

              <div className="bg-[hsl(var(--background))] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-serif">
                  Family Feast
                </h3>
                <p className="text-secondary mb-3">
                  Dalma + Machha Besara + Rice + 2 Sides + Chhena Poda for only ₹559
                </p>
                <span className="text-[hsl(var(--color-primary))] font-bold text-lg">
                  ₹559
                </span>
              </div>

              <div className="bg-[hsl(var(--background))] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-serif">
                  Weekend Special
                </h3>
                <p className="text-secondary mb-3">
                  Special Pakhala Bhata with traditional sides on weekends
                </p>
                <span className="text-[hsl(var(--color-primary))] font-bold text-lg">
                  NEW
                </span>
              </div>

              <div className="bg-[hsl(var(--background))] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-serif">
                  Catering Available
                </h3>
                <p className="text-secondary mb-3">
                  Book catering for your next event. Contact us for custom menus
                </p>
                <span className="text-[hsl(var(--color-primary))] font-bold text-lg">
                  CALL NOW
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-serif">
            Ready to Experience Taste of Odisha?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/reservations" className="btn-primary">
              MAKE A RESERVATION
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
