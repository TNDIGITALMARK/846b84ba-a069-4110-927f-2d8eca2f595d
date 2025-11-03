import Image from 'next/image';
import Link from 'next/link';
import { UtensilsCrossed, Heart, ChefHat, Users, Calendar, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  const signatureDishes = [
    {
      name: 'Chicken Dum Biryani',
      price: '₹130',
      image: '/generated/biryani-meal.jpg',
      description: 'Aromatic basmati rice layered with tender chicken and spices',
    },
    {
      name: 'Tandoori Chicken',
      price: '₹180/350',
      image: '/generated/tandoori-chicken.jpg',
      description: 'Juicy chicken marinated in yogurt and spices, cooked in tandoor',
    },
    {
      name: 'Chilli Paneer',
      price: '₹80/150',
      image: '/generated/chilli-paneer.jpg',
      description: 'Indo-Chinese favorite with crispy paneer in spicy sauce',
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
              src="/generated/biryani-meal.jpg"
              alt="Chicken Dum Biryani"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/generated/tandoori-chicken.jpg"
              alt="Tandoori Chicken"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/generated/chilli-paneer.jpg"
              alt="Chilli Paneer"
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
            Family Restaurant
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="bg-white max-w-6xl mx-auto shadow-card my-8">
        {/* About the Restaurant Section */}
        <section className="section">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4 text-serif">ABOUT OUR RESTAURANT</h2>
            <p className="text-base leading-relaxed text-secondary max-w-3xl">
              Taste of Odisha Family Restaurant offers a diverse menu featuring the best of Indian, Chinese,
              and Tandoori cuisines. From aromatic biryanis and sizzling tandoori delicacies to flavorful
              Indo-Chinese dishes and traditional Indian curries, we serve authentic flavors that bring families
              together. Our chefs use fresh ingredients and time-tested recipes to create memorable dining experiences.
              Whether you&apos;re craving spicy Chilli Chicken, tender Tandoori specialties, or comforting home-style
              Indian meals, we have something for everyone. Experience quality food, warm hospitality, and great value
              at Taste of Odisha - your family&apos;s favorite dining destination.
            </p>
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
