'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wheat, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/menu', label: 'MENU' },
    { href: '/location', label: 'LOCATION' },
    { href: '/reservations', label: 'RESERVATIONS' },
    { href: '/deals', label: 'DEALS' },
  ];

  return (
    <>
      <header className="bg-white border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--color-primary))] flex items-center justify-center transition-transform group-hover:scale-105">
                <Wheat className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-2xl font-bold text-serif text-[hsl(var(--text-primary))]">
                TASTE OF ODISHA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? 'active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link href="/menu" className="hidden md:block btn-primary">
              ORDER NOW
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="bg-white w-64 h-full shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-lg ${
                    pathname === link.href ? 'active' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/menu"
                className="btn-primary mt-4 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                ORDER NOW
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
