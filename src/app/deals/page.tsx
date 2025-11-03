import Link from 'next/link';
import { Clock, Tag, Sparkles, Users } from 'lucide-react';

export default function DealsPage() {
  const deals = [
    {
      icon: Clock,
      title: 'Lunch Special',
      subtitle: 'Monday - Friday, 11 AM - 3 PM',
      description:
        'Get 20% off on all curries during lunch hours. Perfect for a quick, flavorful midday meal.',
      discount: '20% OFF',
      color: 'hsl(var(--color-primary))',
      terms: 'Valid on dine-in orders only. Cannot be combined with other offers.',
    },
    {
      icon: Users,
      title: 'Family Combo',
      subtitle: 'All Day, Every Day',
      description:
        'Feed the whole family! Includes 2 appetizers, 3 main dishes, 2 naan breads, and a dessert.',
      discount: '$59.95',
      color: 'hsl(var(--color-secondary))',
      terms: 'Serves 4-5 people. Main dishes chosen by chef.',
    },
    {
      icon: Sparkles,
      title: 'Weekend Brunch',
      subtitle: 'Saturday & Sunday, 11 AM - 2 PM',
      description:
        'Special brunch menu featuring fusion breakfast items with traditional Indian flavors.',
      discount: 'NEW',
      color: 'hsl(var(--color-accent))',
      terms: 'Limited menu available. Reservations recommended.',
    },
    {
      icon: Tag,
      title: 'First-Time Customer',
      subtitle: 'One-Time Offer',
      description:
        'Welcome to Roots! Enjoy 15% off your entire order on your first visit with us.',
      discount: '15% OFF',
      color: 'hsl(var(--color-primary))',
      terms: 'Must mention offer when ordering. Valid ID required.',
    },
  ];

  return (
    <div className="bg-[hsl(var(--background))] min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-serif">
            Special Deals & Offers
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Take advantage of our exclusive offers and experience authentic
            flavors at great value
          </p>
        </div>

        {/* Deals Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-hover transition-shadow"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${deal.color}20` }}
                  >
                    <deal.icon
                      className="w-10 h-10"
                      style={{ color: deal.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-semibold mb-1 text-serif">
                          {deal.title}
                        </h2>
                        <p className="text-sm text-[hsl(var(--color-primary))] font-medium">
                          {deal.subtitle}
                        </p>
                      </div>
                      <div
                        className="px-6 py-3 rounded-lg font-bold text-xl text-center"
                        style={{
                          backgroundColor: `${deal.color}20`,
                          color: deal.color,
                        }}
                      >
                        {deal.discount}
                      </div>
                    </div>

                    <p className="text-base text-secondary mb-4">
                      {deal.description}
                    </p>

                    <p className="text-sm text-secondary italic">
                      *{deal.terms}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catering Section */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-lg shadow-card p-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-serif">
              Catering Services
            </h2>
            <p className="text-lg text-secondary mb-6 max-w-2xl mx-auto">
              Planning an event? Let us bring authentic Indian and Indo-Chinese
              cuisine to your celebration. Custom menus available for all
              occasions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[hsl(var(--background))] p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-serif">Corporate Events</h3>
                <p className="text-sm text-secondary">
                  Perfect for office parties, meetings, and conferences
                </p>
              </div>

              <div className="bg-[hsl(var(--background))] p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-serif">Weddings & Parties</h3>
                <p className="text-sm text-secondary">
                  Customize your menu for your special celebration
                </p>
              </div>

              <div className="bg-[hsl(var(--background))] p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-serif">Family Gatherings</h3>
                <p className="text-sm text-secondary">
                  Delicious options for intimate family events
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+15551234567" className="btn-primary">
                CALL FOR CATERING
              </a>
              <a
                href="mailto:info@rootsrestaurant.com"
                className="btn-primary bg-[hsl(var(--color-secondary))]"
              >
                EMAIL US
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-serif">
            Ready to Enjoy These Deals?
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

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto mt-12 bg-[hsl(var(--color-primary))] text-white rounded-lg shadow-card p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-serif">
            Stay Updated
          </h3>
          <p className="mb-6">
            Subscribe to our newsletter for exclusive deals and special offers
          </p>
          <form className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-[hsl(var(--text-primary))]"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[hsl(var(--color-primary))] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
