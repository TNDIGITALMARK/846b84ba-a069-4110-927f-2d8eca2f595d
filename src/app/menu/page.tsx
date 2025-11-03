import Image from 'next/image';
import Link from 'next/link';
import { Flame } from 'lucide-react';

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'SOUP',
      items: [
        { name: 'Manchow Soup', price: '35/50', description: 'Veg/chicken' },
        { name: 'Hot N Sour Soup', price: '35/50', description: 'Veg/chicken' },
      ],
    },
    {
      name: 'CHINESE (VEG)',
      items: [
        { name: 'Chilli Paneer Dry', price: '80/150', description: 'Half 7pcs/full 14 Pcs' },
        { name: 'Crispy Corn Dry', price: '70' },
        { name: 'Chilli Mushroom Dry', price: '110' },
        { name: 'Veg Roll', price: '40' },
        { name: 'Noodles (chowmein)', price: '40' },
        { name: 'Veg Fried Rice', price: '80' },
        { name: 'Veg Momo\'s', price: '25/40', description: 'Half 6pcs/Full 12pcs' },
      ],
    },
    {
      name: 'NON VEG',
      items: [
        { name: 'Chilli Chicken Dry', price: '80/150', description: 'Half 7pcs/full 14pcs' },
        { name: 'Chilli Prawn', price: '100/190', description: 'Half 4pcs/full 6pcs' },
        { name: 'Chicken Lollipop', price: '150', description: '6pcs With Sauce' },
        { name: 'Chicken Pokoda', price: '70/130', description: 'Half 6pcs/full 12pcs' },
        { name: 'Chicken Roll', price: '50/60', description: 'Egg/chicken' },
        { name: 'Chicken Fried Rice', price: '120' },
        { name: 'Chicken Noodles(chowmein)', price: '50/70', description: 'Egg/chicken' },
        { name: 'Mix Noodles(chowmein)', price: '80', description: 'Egg/chicken /Prawns' },
        { name: 'Chicken Momo\'s', price: '30/50', description: 'Half 6pcs/full 12pcs' },
      ],
    },
    {
      name: 'TANDOORI',
      items: [
        { name: 'Tandoori Chicken', price: '180/350', description: 'Half/Full' },
        { name: 'Chicken Tikka', price: '160', description: '8pcs' },
        { name: 'Tandoori pomfret Fish', price: '150' },
        { name: 'Paneer Tikka', price: '170', description: '8pcs' },
        { name: 'Tandoori Roti', price: '10/12', description: 'Plan/ Butter' },
        { name: 'Tandoori Naan', price: '20/25/35', description: 'Plan/ Butter/ Garlic' },
        { name: 'Luchha Paratha', price: '25' },
        { name: 'Paneer Kulcha', price: '35' },
        { name: 'Onion Kulcha', price: '30' },
        { name: 'Tawa Roti', price: '5' },
        { name: 'Chole Bhature', price: '80' },
      ],
    },
    {
      name: 'SPECIAL MEALS',
      items: [
        { name: 'Veg Meal', price: '70' },
        { name: 'Fish Meal', price: '80' },
        { name: 'Chicken Meal', price: '120' },
        { name: 'Mutton Meal', price: '250' },
      ],
      featured: true,
      image: '/generated/biryani-meal.jpg',
    },
    {
      name: 'INDIAN (VEG)',
      items: [
        { name: 'Paneer Curry', price: '150' },
        { name: 'Mix Veg', price: '110' },
        { name: 'Tadkars', price: '100' },
        { name: 'Mushroom Masala', price: '110' },
        { name: 'Channa Masala', price: '100' },
        { name: 'Veg Biriyani', price: '100' },
        { name: 'Jera Rice', price: '40' },
        { name: 'Plan Rice', price: '30' },
      ],
    },
    {
      name: 'NON VEG',
      items: [
        { name: 'Mutton Curry', price: '250' },
        { name: 'Chicken Curry', price: '150' },
        { name: 'Chicken Butter Masala', price: '190' },
        { name: 'Pomfret Fish Curry', price: '230' },
        { name: 'Prawn Masala', price: '250' },
        { name: 'Egg Tadka', price: '60' },
        { name: 'Chicken Dum Biryani', price: '130' },
      ],
    },
    {
      name: 'DESSERT',
      items: [
        { name: 'Ice Cream', price: '20' },
      ],
    },
  ];

  return (
    <div className="bg-[hsl(var(--background))] min-h-screen">
      {/* Menu Header - Dark Navy with Golden Flames */}
      <div className="bg-[#0F1F3D] text-white py-8 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Left Flame Icon */}
            <div className="hidden md:block">
              <Flame className="w-16 h-20 text-[#F59E0B]" fill="#F59E0B" />
            </div>

            {/* Center Text */}
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2 text-serif" style={{ color: '#F59E0B' }}>
                TASTE OF ODISHA
              </h1>
              <p className="text-xl md:text-2xl tracking-wide text-serif" style={{ color: '#DC2626' }}>
                FAMILY RESTAURANT
              </p>
            </div>

            {/* Right Flame Icon */}
            <div className="hidden md:block">
              <Flame className="w-16 h-20 text-[#F59E0B]" fill="#F59E0B" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
        <div className="bg-[#FAF5EE] rounded-lg shadow-card p-6 md:p-10">
          {/* Menu Grid - 3 columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <div key={category.name} className={category.featured ? 'md:col-span-3' : ''}>
                {/* Category Header */}
                <h2 className="text-2xl font-bold mb-4 text-serif text-center" style={{ color: '#8B2635' }}>
                  {category.name}
                </h2>

                {/* Special Meals with Photo */}
                {category.featured && category.image && (
                  <div className="mb-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden shadow-card">
                      <Image
                        src={category.image}
                        alt="Special Meals - Biryani"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.items.map((item) => (
                        <div key={item.name} className="flex justify-between items-center">
                          <span className="font-medium text-base">{item.name}</span>
                          <span className="font-bold text-[#8B2635] ml-4">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Menu Items */}
                {!category.featured && (
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <span className="font-medium text-base text-[#3D2817]">{item.name}</span>
                          {item.description && (
                            <span className="text-xs text-gray-600 block mt-0.5">{item.description}</span>
                          )}
                        </div>
                        <span className="font-bold text-[#DC2626] flex-shrink-0 text-base">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <p className="text-lg text-secondary mb-6">
            Visit us for dine-in, takeout, or delivery
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/reservations" className="btn-primary">
              MAKE A RESERVATION
            </Link>
            <Link
              href="/location"
              className="btn-primary bg-[hsl(var(--color-secondary))]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
