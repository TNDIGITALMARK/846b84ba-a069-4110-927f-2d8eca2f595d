import Image from 'next/image';
import Link from 'next/link';

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'Traditional Odia Specialties',
      items: [
        {
          name: 'Dalma',
          price: '$12.95',
          description: 'Traditional Odia lentil curry with vegetables, raw papaya, and aromatic spices',
          image: '/generated/dalma.png',
          spiceLevel: 1,
          featured: true,
          vegetarian: true,
        },
        {
          name: 'Machha Besara',
          price: '$16.95',
          description: 'Fresh fish cooked in mustard gravy - an Odisha specialty',
          image: '/generated/machha-besara.png',
          spiceLevel: 2,
          featured: true,
        },
        {
          name: 'Chingudi Bhaja',
          price: '$18.95',
          description: 'Crispy fried prawns with traditional Odia spices',
          spiceLevel: 2,
        },
        {
          name: 'Santula',
          price: '$11.95',
          description: 'Mixed vegetable curry with minimal spices - temple style cooking',
          spiceLevel: 1,
          vegetarian: true,
        },
      ],
    },
    {
      name: 'Rice & Lentils',
      items: [
        {
          name: 'Pakhala Bhata',
          price: '$9.95',
          description: 'Traditional fermented rice served with accompaniments',
          spiceLevel: 0,
          vegetarian: true,
        },
        {
          name: 'Khechedi',
          price: '$10.95',
          description: 'Rice and lentil porridge with ghee and spices',
          spiceLevel: 1,
          vegetarian: true,
        },
        {
          name: 'Mansa Tarkari',
          price: '$15.95',
          description: 'Mutton curry with traditional Odia spices',
          spiceLevel: 2,
        },
        {
          name: 'Dahi Baigana',
          price: '$11.95',
          description: 'Fried eggplant in yogurt curry',
          spiceLevel: 1,
          vegetarian: true,
        },
      ],
    },
    {
      name: 'Bhaja & Tarkari (Sides)',
      items: [
        {
          name: 'Aloo Potala Rasa',
          price: '$10.95',
          description: 'Potato and pointed gourd curry in light gravy',
          spiceLevel: 1,
          vegetarian: true,
        },
        {
          name: 'Badi Chura',
          price: '$9.95',
          description: 'Crushed sun-dried lentil dumplings with onions and spices',
          spiceLevel: 2,
          vegetarian: true,
        },
        {
          name: 'Saga Bhaja',
          price: '$8.95',
          description: 'Sautéed leafy greens with garlic and mustard',
          spiceLevel: 1,
          vegetarian: true,
        },
        {
          name: 'Macha Ghanta',
          price: '$14.95',
          description: 'Fish head curry with vegetables - a traditional favorite',
          spiceLevel: 2,
        },
      ],
    },
    {
      name: 'Chhena Delicacies',
      items: [
        {
          name: 'Chhena Poda',
          price: '$8.95',
          description: 'Caramelized cottage cheese dessert - pride of Odisha',
          image: '/generated/chhena-poda.png',
          spiceLevel: 0,
          featured: true,
        },
        {
          name: 'Rasagola',
          price: '$6.95',
          description: 'Spongy cottage cheese balls in sugar syrup',
          spiceLevel: 0,
        },
        {
          name: 'Rasabali',
          price: '$7.95',
          description: 'Fried cottage cheese patties soaked in sweetened condensed milk',
          spiceLevel: 0,
        },
        {
          name: 'Khira Sagara',
          price: '$7.95',
          description: 'Cottage cheese balls in sweetened milk - temple offering',
          spiceLevel: 0,
        },
      ],
    },
    {
      name: 'Sweet Delights',
      items: [
        {
          name: 'Arisa Pitha',
          price: '$6.95',
          description: 'Traditional rice flour pancake with jaggery',
          spiceLevel: 0,
          vegetarian: true,
        },
        {
          name: 'Manda Pitha',
          price: '$7.95',
          description: 'Steamed rice dumplings with coconut and jaggery filling',
          spiceLevel: 0,
          vegetarian: true,
        },
        {
          name: 'Khaja',
          price: '$6.95',
          description: 'Crispy layered sweet pastry',
          spiceLevel: 0,
          vegetarian: true,
        },
        {
          name: 'Kakara Pitha',
          price: '$7.95',
          description: 'Deep-fried sweet dumplings with coconut filling',
          spiceLevel: 0,
          vegetarian: true,
        },
      ],
    },
    {
      name: 'Beverages',
      items: [
        {
          name: 'Lassi',
          price: '$4.95',
          description: 'Traditional yogurt drink - sweet or salted',
          spiceLevel: 0,
          vegetarian: true,
        },
        {
          name: 'Chacha',
          price: '$3.95',
          description: 'Buttermilk with roasted cumin and curry leaves',
          spiceLevel: 0,
          vegetarian: true,
        },
        {
          name: 'Pana',
          price: '$4.95',
          description: 'Traditional drink made with raw mango, jaggery, and spices',
          spiceLevel: 0,
          vegetarian: true,
        },
        {
          name: 'Masala Chai',
          price: '$3.95',
          description: 'Spiced tea with cardamom and ginger',
          spiceLevel: 1,
          vegetarian: true,
        },
      ],
    },
  ];

  const renderSpiceLevel = (level: number) => {
    if (level === 0) return null;
    return (
      <span className="text-xs text-[hsl(var(--color-primary))]">
        {'🌶️'.repeat(level)}
      </span>
    );
  };

  return (
    <div className="bg-[hsl(var(--background))] min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-serif">
            Our Menu
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Discover authentic Odia cuisine, crafted with traditional recipes
            and the finest ingredients from Odisha&apos;s rich culinary heritage
          </p>
        </div>

        {/* Menu Categories */}
        <div className="max-w-6xl mx-auto space-y-12">
          {menuCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-card p-8">
              <h2 className="text-3xl font-semibold mb-6 text-serif text-center border-b pb-4">
                {category.name}
              </h2>

              {/* Featured dishes with images */}
              {category.items.some((item) => item.featured) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {category.items
                    .filter((item) => item.featured)
                    .map((item) => (
                      <div key={item.name} className="dish-card overflow-hidden">
                        {item.image && (
                          <div className="relative w-full aspect-square">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="dish-image"
                            />
                          </div>
                        )}
                        <div className="p-4 text-center">
                          <h3 className="text-lg font-semibold mb-1 text-serif">
                            {item.name}
                          </h3>
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <p className="text-[hsl(var(--color-primary))] font-bold text-lg">
                              {item.price}
                            </p>
                            {renderSpiceLevel(item.spiceLevel)}
                          </div>
                          <p className="text-sm text-secondary">
                            {item.description}
                          </p>
                          {item.vegetarian && (
                            <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Vegetarian
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Regular menu items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items
                  .filter((item) => !item.featured)
                  .map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start gap-4 p-4 rounded-lg hover:bg-[hsl(var(--background))] transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-serif">
                            {item.name}
                          </h3>
                          {renderSpiceLevel(item.spiceLevel)}
                        </div>
                        <p className="text-sm text-secondary mb-2">
                          {item.description}
                        </p>
                        {item.vegetarian && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Vegetarian
                          </span>
                        )}
                      </div>
                      <p className="text-[hsl(var(--color-primary))] font-bold text-lg flex-shrink-0">
                        {item.price}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-serif">
            Ready to Order?
          </h3>
          <p className="text-secondary mb-6">
            Visit us for dine-in, or order takeout for your next meal
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
