import Link from 'next/link';
import { Wheat, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--color-secondary))] text-white py-12">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo & Branding */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Wheat className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-2xl font-bold text-serif">TASTE OF ODISHA</span>
            </div>
            <p className="text-sm text-white/80 italic">
              Authentic Odia Cuisine & Cultural Heritage
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p>127 West Room, Floor 5</p>
                <p>Abc Enclave 245019</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+918337958044" className="text-sm hover:underline">
                +91 833 795 8044
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:Tasteofodisha.baliapal@gmail.com" className="text-sm hover:underline break-all">
                Tasteofodisha.baliapal@gmail.com
              </a>
            </div>

            <p className="text-sm mt-2">
              <strong>Hours:</strong> Monday to Sunday
              <br />
              11:00 AM - 11:00 PM
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-white/80 mt-4">
              <p>&copy; 2025 Taste of Odisha</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
