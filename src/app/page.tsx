import Image from 'next/image';
import Link from 'next/link';
import { UtensilsCrossed, Heart, ChefHat, Users, Calendar, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  const signatureDishes = [
    {
      name: 'Dalma',
      price: '$12.95',
      image: '/generated/dalma.png',
      description: 'Traditional Odia lentil curry with vegetables and aromatic spices',
    },
    {
      name: 'Machha Besara',
      price: '$16.95',
      image: '/generated/machha-besara.png',
      description: 'Fish curry in mustard gravy - an Odisha specialty',
    },
    {
      name: 'Chhena Poda',
      price: '$8.95',
      image: '/generated/chhena-poda.png',
      description: 'Caramelized cottage cheese dessert - pride of Odisha',
    },
  ];

  const experienceItems = [
    { icon: UtensilsCrossed, label: 'Fine Dining' },
    { icon: Heart, label: 'Made with Love' },
    { icon: ChefHat, label: 'Expert Chefs' },
    { icon: Users, label: 'Family Friendly' },
    { icon: Calendar, label: 'Reservations' },
    { icon: ShoppingBag, label: 'Takeout' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <div className="relative w-full h-full">
            <Image
              src="/generated/dalma.png"
              alt="Dalma - Traditional Odia Lentil Curry"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/generated/machha-besara.png"
              alt="Machha Besara - Fish in Mustard Gravy"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/generated/chhena-poda.png"
              alt="Chhena Poda - Traditional Odisha Dessert"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 text-serif">
            TASTE OF ODISHA
          </h1>
          <p className="text-white text-xl md:text-2xl italic text-serif">
            Authentic Odia Cuisine & Cultural Heritage
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="bg-white max-w-6xl mx-auto shadow-card my-8">
        {/* About the Chef Section */}
        <section className="section">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/generated/chef-gopinath.png"
                alt="Chef Gopinath Pramanik"
                width={120}
                height={120}
                className="chef-image"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-serif">ABOUT OUR CUISINE</h2>
              <p className="text-base leading-relaxed text-secondary">
                Taste of Odisha brings you the authentic flavors of Odisha&apos;s rich culinary heritage.
                Known for its balanced flavors and temple-style cooking, Odia cuisine is a celebration of
                tradition and taste. Our dishes are prepared using age-old recipes passed down through generations,
                featuring minimal oil, subtle spices, and the freshest ingredients. From the famous Dalma and
                Machha Besara to the sweet delicacy Chhena Poda, every dish tells a story of Odisha&apos;s
                vibrant culture and culinary excellence. Experience the true essence of Odia cooking -
                simple, wholesome, and incredibly flavorful.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Highlights Section */}
        <section className="section bg-[hsl(var(--background))]">
          <h2 className="text-2xl font-semibold text-center mb-8 text-serif">
            MENU HIGHLIGHTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {signatureDishes.map((dish) => (
              <div
                key={dish.name}
                className="dish-card overflow-hidden"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="dish-image"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1 text-serif">
                    {dish.name}
                  </h3>
                  <p className="text-[hsl(var(--color-primary))] font-bold text-lg mb-2">
                    {dish.price}
                  </p>
                  <p className="text-sm text-secondary">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/menu"
              className="btn-primary inline-block"
            >
              VIEW FULL MENU
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="text-2xl font-semibold text-center mb-10 text-serif">
            EXPERIENCE TASTE OF ODISHA
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {experienceItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="icon-circle">
                  <item.icon className="w-6 h-6 text-[hsl(var(--color-secondary))]" strokeWidth={2} />
                </div>
                <p className="text-sm font-medium uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
