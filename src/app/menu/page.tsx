import Image from 'next/image';
import Link from 'next/link';

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'Appetizers',
      items: [
        {
          name: 'Spring Rolls',
          price: '$8.95',
          description: 'Crispy vegetable spring rolls with sweet chili sauce',
          spiceLevel: 1,
        },
        {
          name: 'Chicken Satay',
          price: '$12.95',
          description: 'Grilled chicken skewers with peanut sauce',
          spiceLevel: 2,
        },
        {
          name: 'Paneer Tikka',
          price: '$11.95',
          description: 'Marinated cottage cheese grilled in tandoor',
          spiceLevel: 2,
          vegetarian: true,
        },
      ],
    },
    {
      name: 'Signature Dishes',
      items: [
        {
          name: 'Chilly Chicken',
          price: '$16.95',
          description: 'Tender chicken pieces in spicy garlic sauce',
          image: '/generated/chilly-chicken.png',
          spiceLevel: 3,
          featured: true,
        },
        {
          name: 'Chilly Garlic Noodles',
          price: '$14.95',
          description: 'Hand-pulled noodles with fresh garlic and chilies',
          image: '/generated/chilly-garlic-noodles.png',
          spiceLevel: 3,
          featured: true,
        },
        {
          name: 'Thai Red Curry',
          price: '$18.95',
          description: 'Coconut-based curry with traditional Thai spices',
          image: '/generated/thai-red-curry.png',
          spiceLevel: 3,
          featured: true,
        },
      ],
    },
    {
      name: 'Curries',
      items: [
        {
          name: 'Butter Chicken',
          price: '$17.95',
          description: 'Creamy tomato-based curry with tender chicken',
          spiceLevel: 2,
        },
        {
          name: 'Lamb Rogan Josh',
          price: '$19.95',
          description: 'Aromatic lamb curry with traditional spices',
          spiceLevel: 3,
        },
        {
          name: 'Paneer Makhani',
          price: '$15.95',
          description: 'Cottage cheese in rich tomato cream sauce',
          spiceLevel: 1,
          vegetarian: true,
        },
      ],
    },
    {
      name: 'Tandoori Specialties',
      items: [
        {
          name: 'Tandoori Chicken',
          price: '$16.95',
          description: 'Half chicken marinated in yogurt and spices',
          spiceLevel: 2,
        },
        {
          name: 'Seekh Kebab',
          price: '$17.95',
          description: 'Minced lamb skewers grilled in tandoor',
          spiceLevel: 2,
        },
        {
          name: 'Tandoori Prawns',
          price: '$21.95',
          description: 'Jumbo prawns marinated and grilled',
          spiceLevel: 2,
        },
      ],
    },
    {
      name: 'Rice & Noodles',
      items: [
        {
          name: 'Vegetable Fried Rice',
          price: '$12.95',
          description: 'Wok-tossed rice with fresh vegetables',
          spiceLevel: 1,
          vegetarian: true,
        },
        {
          name: 'Chicken Biryani',
          price: '$16.95',
          description: 'Fragrant basmati rice with spiced chicken',
          spiceLevel: 2,
        },
        {
          name: 'Hakka Noodles',
          price: '$13.95',
          description: 'Indo-Chinese style stir-fried noodles',
          spiceLevel: 2,
        },
      ],
    },
    {
      name: 'Desserts',
      items: [
        {
          name: 'Gulab Jamun',
          price: '$6.95',
          description: 'Soft milk dumplings in rose-cardamom syrup',
          spiceLevel: 0,
        },
        {
          name: 'Mango Kulfi',
          price: '$7.95',
          description: 'Traditional Indian ice cream with fresh mango',
          spiceLevel: 0,
        },
        {
          name: 'Ras Malai',
          price: '$7.95',
          description: 'Cottage cheese patties in sweetened milk',
          spiceLevel: 0,
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
            Discover our authentic Indian and Indo-Chinese cuisine, crafted with
            tradition and passion
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
