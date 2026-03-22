import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  CalendarCheck,
  Clock,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShoppingBag,
  Smartphone,
  Star,
  Tag,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCreateReservation } from "./hooks/useQueries";

const queryClient = new QueryClient();

function CafeApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    guestName: "",
    phoneNumber: "",
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
  });

  const { mutate: createReservation, isPending } = useCreateReservation();

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.guestName ||
      !formData.phoneNumber ||
      !formData.date ||
      !formData.time ||
      !formData.partySize
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    createReservation(
      {
        guestName: formData.guestName,
        phoneNumber: formData.phoneNumber,
        date: formData.date,
        time: formData.time,
        partySize: BigInt(formData.partySize),
        specialRequests: formData.specialRequests || undefined,
      },
      {
        onSuccess: () => {
          toast.success("🎉 Table reserved! We'll see you soon at Cafe 1991.");
          setFormData({
            guestName: "",
            phoneNumber: "",
            date: "",
            time: "",
            partySize: "",
            specialRequests: "",
          });
        },
        onError: () => toast.error("Something went wrong. Please try again."),
      },
    );
  };

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Location", href: "#location" },
  ];

  const popularItems = [
    {
      name: "Orange Mojito",
      price: "₹129",
      desc: "Zesty fresh orange with mint, citrus burst",
      image: "/assets/generated/menu-orange-mojito.dim_400x400.jpg",
    },
    {
      name: "Onion Rings",
      price: "₹149",
      desc: "Crispy golden rings with signature dip",
      image: "/assets/generated/menu-onion-rings.dim_400x400.jpg",
    },
    {
      name: "Hot Chocolate",
      price: "₹149",
      desc: "Velvety rich cocoa with whipped cream",
      image: "/assets/generated/menu-hot-chocolate.dim_400x400.jpg",
    },
    {
      name: "Cappuccino Latte",
      price: "₹159",
      desc: "Expertly crafted espresso with steamed milk",
      image: "/assets/generated/menu-cappuccino.dim_400x400.jpg",
    },
  ];

  const foodItems = [
    {
      name: "Pizza Margherita",
      price: "₹249",
      desc: "Classic tomato, mozzarella, fresh basil",
      image: "/assets/generated/menu-pizza.dim_400x400.jpg",
    },
    {
      name: "Veggie Pizza",
      price: "₹229",
      desc: "Garden fresh veggies on tangy sauce",
      image: "/assets/generated/menu-pizza.dim_400x400.jpg",
    },
    {
      name: "Cheese Loaded Fries",
      price: "₹179",
      desc: "Crispy fries smothered in molten cheese",
      image: "/assets/generated/menu-fries.dim_400x400.jpg",
    },
    {
      name: "Mac & Cheese",
      price: "₹199",
      desc: "Creamy pasta in rich cheese sauce",
      image: "/assets/generated/menu-fries.dim_400x400.jpg",
    },
    {
      name: "Veggie Burger",
      price: "₹179",
      desc: "Hearty veggie patty with fresh toppings",
      image: "/assets/generated/menu-burger.dim_400x400.jpg",
    },
    {
      name: "Grilled Chicken Burger",
      price: "₹249",
      desc: "Juicy grilled chicken with smoky sauce",
      image: "/assets/generated/menu-burger.dim_400x400.jpg",
    },
    {
      name: "Peri Peri Veg Sandwich",
      price: "₹159",
      desc: "Spicy peri peri veggies in toasted bread",
      image: "/assets/generated/menu-burger.dim_400x400.jpg",
    },
  ];

  const beverageItems = [
    {
      name: "Rose Iced Tea",
      price: "₹149",
      desc: "Floral rose infused chilled tea",
      image: "/assets/generated/menu-rose-tea.dim_400x400.jpg",
    },
    {
      name: "Lotus Biscoff Freak Shake",
      price: "₹199",
      desc: "Indulgent Biscoff shake with toppings",
      image: "/assets/generated/menu-cappuccino.dim_400x400.jpg",
    },
    {
      name: "KitKat Shake",
      price: "₹189",
      desc: "Chocolatey KitKat blended milkshake",
      image: "/assets/generated/menu-hot-chocolate.dim_400x400.jpg",
    },
    {
      name: "Adrak Chai",
      price: "₹49",
      desc: "Traditional ginger cardamom tea",
      image: "/assets/generated/menu-rose-tea.dim_400x400.jpg",
    },
    {
      name: "Frappuccino",
      price: "₹189",
      desc: "Iced blended coffee with whipped cream",
      image: "/assets/generated/menu-cappuccino.dim_400x400.jpg",
    },
  ];

  const reviews = [
    {
      name: "Priya S.",
      rating: 5,
      text: "Pleasant atmosphere, beautiful decor, good music and tasty food. Perfect place to unwind!",
      initials: "PS",
    },
    {
      name: "Arjun M.",
      rating: 5,
      text: "Price, quality, quantity and service all are up to mark. One of the best cafes in Lucknow!",
      initials: "AM",
    },
    {
      name: "Sneha K.",
      rating: 4.5,
      text: "Cool vibe, light music and nice ambience. Perfect place to chill with friends and great coffee!",
      initials: "SK",
    },
  ];

  const galleryImages = [
    {
      src: "/assets/generated/gallery-interior.dim_600x400.jpg",
      alt: "Cozy cafe interior",
    },
    {
      src: "/assets/generated/gallery-customers.dim_600x400.jpg",
      alt: "Happy customers",
    },
    {
      src: "/assets/generated/menu-cappuccino.dim_400x400.jpg",
      alt: "Latte art",
    },
    { src: "/assets/generated/menu-pizza.dim_400x400.jpg", alt: "Pizza" },
    {
      src: "/assets/generated/menu-orange-mojito.dim_400x400.jpg",
      alt: "Orange Mojito",
    },
    {
      src: "/assets/generated/menu-onion-rings.dim_400x400.jpg",
      alt: "Onion Rings",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={
            i <= Math.floor(rating)
              ? "#F59E0B"
              : i - 0.5 === rating
                ? "url(#half)"
                : "none"
          }
          stroke={i <= rating ? "#F59E0B" : "#D1D5DB"}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-cafe-beige border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="cafe-script text-2xl text-cafe-brown font-semibold"
              data-ocid="nav.link"
            >
              Cafe 1991
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cafe-brown-mid hover:text-cafe-brown text-sm font-medium transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                className="bg-cafe-caramel text-primary-foreground hover:opacity-90 rounded-full px-5"
                asChild
                data-ocid="nav.primary_button"
              >
                <a
                  href="https://zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden text-cafe-brown"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cafe-beige border-t border-border px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-cafe-brown-mid hover:text-cafe-brown font-medium"
                onClick={() => setMobileMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full mt-3 bg-cafe-caramel text-primary-foreground rounded-full"
              asChild
            >
              <a
                href="https://zomato.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/cafe-hero.dim_1200x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-cafe-brown/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <p className="text-cafe-footer-text/80 text-sm uppercase tracking-widest mb-3 font-inter">
            Welcome to
          </p>
          <h1 className="cafe-script text-6xl sm:text-7xl lg:text-8xl text-white mb-4 drop-shadow-lg">
            Cafe 1991
          </h1>
          <p className="text-cafe-footer-text text-xl sm:text-2xl font-playfair italic mb-3">
            Where taste meets comfort
          </p>
          <p className="text-cafe-footer-text/80 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Lucknow's coziest corner for Coffee, Conversations &amp; Comfort
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <span>4.5 (742 reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <span>₹200–400 per person</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <Clock className="w-4 h-4" />
              <span>Open till 11 PM</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-cafe-caramel text-primary-foreground hover:opacity-90 rounded-full px-8 text-base font-semibold"
              asChild
              data-ocid="hero.primary_button"
            >
              <a
                href="https://zomato.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 text-base font-semibold bg-transparent"
              asChild
              data-ocid="hero.secondary_button"
            >
              <a href="#reservation">Reserve Table</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Timing strip */}
      <div className="bg-cafe-beige border-y border-border py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-cafe-brown-mid">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cafe-caramel" /> Open Daily
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cafe-caramel" /> Closes at 11 PM
          </span>
          <span className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-cafe-caramel" /> Avg Visit: 30 min –
            1.5 hrs
          </span>
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cafe-caramel text-sm uppercase tracking-widest font-medium mb-2">
              Our Offerings
            </p>
            <h2 className="cafe-heading text-4xl sm:text-5xl text-cafe-brown">
              Our Menu
            </h2>
            <p className="text-cafe-brown-mid mt-3 max-w-lg mx-auto">
              Crafted with love, served with warmth — every item tells a story.
            </p>
          </div>

          <Tabs defaultValue="popular" className="w-full" data-ocid="menu.tab">
            <TabsList className="mx-auto flex w-fit gap-1 bg-cafe-beige rounded-full p-1 mb-10">
              <TabsTrigger
                value="popular"
                className="rounded-full px-6 data-[state=active]:bg-cafe-caramel data-[state=active]:text-primary-foreground"
                data-ocid="menu.tab"
              >
                Popular
              </TabsTrigger>
              <TabsTrigger
                value="food"
                className="rounded-full px-6 data-[state=active]:bg-cafe-caramel data-[state=active]:text-primary-foreground"
                data-ocid="menu.tab"
              >
                Food
              </TabsTrigger>
              <TabsTrigger
                value="beverages"
                className="rounded-full px-6 data-[state=active]:bg-cafe-caramel data-[state=active]:text-primary-foreground"
                data-ocid="menu.tab"
              >
                Beverages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="popular">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularItems.map((item, i) => (
                  <div
                    key={item.name}
                    className="bg-card rounded-2xl shadow-card card-hover overflow-hidden"
                    data-ocid={`menu.item.${i + 1}`}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-cafe-caramel text-primary-foreground text-xs rounded-full">
                        Most Loved
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-cafe-brown text-base">
                        {item.name}
                      </h3>
                      <p className="text-cafe-brown-mid text-sm mt-1 mb-3">
                        {item.desc}
                      </p>
                      <p className="font-bold text-cafe-caramel text-lg">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="food">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {foodItems.map((item, i) => (
                  <div
                    key={item.name}
                    className="bg-card rounded-2xl shadow-card card-hover overflow-hidden"
                    data-ocid={`menu.item.${i + 1}`}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-cafe-brown text-base">
                        {item.name}
                      </h3>
                      <p className="text-cafe-brown-mid text-sm mt-1 mb-3">
                        {item.desc}
                      </p>
                      <p className="font-bold text-cafe-caramel text-lg">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {beverageItems.map((item, i) => (
                  <div
                    key={item.name}
                    className="bg-card rounded-2xl shadow-card card-hover overflow-hidden"
                    data-ocid={`menu.item.${i + 1}`}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-cafe-brown text-base">
                        {item.name}
                      </h3>
                      <p className="text-cafe-brown-mid text-sm mt-1 mb-3">
                        {item.desc}
                      </p>
                      <p className="font-bold text-cafe-caramel text-lg">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Offers Banner */}
      <section id="offers" className="py-12 px-4 bg-cafe-caramel">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Tag className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="cafe-heading text-3xl sm:text-4xl text-primary-foreground mb-3">
            Flat 20% OFF on Your Total Bill!
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Show this offer at the counter and enjoy the discount. Valid on all
            dine-in orders.
          </p>
          <Button
            size="lg"
            className="bg-white text-cafe-caramel hover:bg-cafe-cream rounded-full px-8 font-semibold"
            data-ocid="offers.primary_button"
          >
            Claim Offer
          </Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cafe-caramel text-sm uppercase tracking-widest font-medium mb-2">
              Testimonials
            </p>
            <h2 className="cafe-heading text-4xl sm:text-5xl text-cafe-brown mb-3">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    fill={i <= 4 ? "#F59E0B" : "none"}
                    stroke="#F59E0B"
                  />
                ))}
              </div>
              <span className="text-cafe-brown font-semibold">4.5/5</span>
              <span className="text-cafe-brown-mid text-sm">(742 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className="bg-card rounded-2xl shadow-card p-6 card-hover"
                data-ocid={`reviews.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cafe-beige flex items-center justify-center text-cafe-brown font-bold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-cafe-brown">
                      {review.name}
                    </p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-cafe-brown-mid leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-cafe-beige/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cafe-caramel text-sm uppercase tracking-widest font-medium mb-2">
              What We Offer
            </p>
            <h2 className="cafe-heading text-4xl sm:text-5xl text-cafe-brown">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Utensils,
                title: "Dine-In",
                desc: "Experience the full café ambiance with table service and cozy seating.",
              },
              {
                icon: ShoppingBag,
                title: "Takeaway",
                desc: "Grab your favorites on the go – quick, fresh, and ready in minutes.",
              },
              {
                icon: Smartphone,
                title: "Order Online",
                desc: "Order from Zomato or Swiggy for delivery right to your doorstep.",
              },
              {
                icon: CalendarCheck,
                title: "Table Reservation",
                desc: "Book a table in advance to secure your perfect spot at Cafe 1991.",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl shadow-card p-6 text-center card-hover"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-cafe-caramel/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-cafe-caramel" />
                </div>
                <h3 className="cafe-heading text-xl text-cafe-brown mb-2">
                  {service.title}
                </h3>
                <p className="text-cafe-brown-mid text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cafe-caramel text-sm uppercase tracking-widest font-medium mb-2">
              Peek Inside
            </p>
            <h2 className="cafe-heading text-4xl sm:text-5xl text-cafe-brown">
              Cafe Moments
            </h2>
            <p className="text-cafe-brown-mid mt-3">
              Every corner is Instagram-worthy. Come see for yourself!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.alt}
                className="rounded-2xl overflow-hidden aspect-square card-hover shadow-card"
                data-ocid={`gallery.item.${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-20 px-4 bg-cafe-beige/40">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-cafe-caramel text-sm uppercase tracking-widest font-medium mb-2">
              Book a Spot
            </p>
            <h2 className="cafe-heading text-4xl sm:text-5xl text-cafe-brown">
              Reserve a Table
            </h2>
            <p className="text-cafe-brown-mid mt-3">
              Secure your perfect table at Cafe 1991 in advance.
            </p>
          </div>
          <form
            onSubmit={handleReservationSubmit}
            className="bg-card rounded-2xl shadow-card p-6 sm:p-8 space-y-5"
            data-ocid="reservation.panel"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label className="text-cafe-brown font-medium">
                  Your Name *
                </Label>
                <Input
                  placeholder="E.g. Priya Sharma"
                  value={formData.guestName}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, guestName: e.target.value }))
                  }
                  className="border-border bg-background"
                  data-ocid="reservation.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-cafe-brown font-medium">
                  Phone Number *
                </Label>
                <Input
                  placeholder="E.g. 9935252525"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, phoneNumber: e.target.value }))
                  }
                  className="border-border bg-background"
                  data-ocid="reservation.input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label className="text-cafe-brown font-medium">Date *</Label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, date: e.target.value }))
                  }
                  className="border-border bg-background"
                  data-ocid="reservation.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-cafe-brown font-medium">Time *</Label>
                <Select
                  value={formData.time}
                  onValueChange={(v) => setFormData((p) => ({ ...p, time: v }))}
                  data-ocid="reservation.select"
                >
                  <SelectTrigger
                    className="border-border bg-background"
                    data-ocid="reservation.select"
                  >
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "1:00 PM",
                      "2:00 PM",
                      "3:00 PM",
                      "4:00 PM",
                      "5:00 PM",
                      "6:00 PM",
                      "7:00 PM",
                      "8:00 PM",
                      "9:00 PM",
                      "10:00 PM",
                      "11:00 PM",
                    ].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-cafe-brown font-medium">
                Party Size *
              </Label>
              <Select
                value={formData.partySize}
                onValueChange={(v) =>
                  setFormData((p) => ({ ...p, partySize: v }))
                }
                data-ocid="reservation.select"
              >
                <SelectTrigger
                  className="border-border bg-background"
                  data-ocid="reservation.select"
                >
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-cafe-brown font-medium">
                Special Requests
              </Label>
              <Textarea
                placeholder="Any dietary preferences, special occasions, or seating preferences..."
                value={formData.specialRequests}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    specialRequests: e.target.value,
                  }))
                }
                className="border-border bg-background resize-none h-24"
                data-ocid="reservation.textarea"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-full bg-cafe-caramel text-primary-foreground hover:opacity-90 rounded-full text-base font-semibold"
              data-ocid="reservation.submit_button"
            >
              {isPending ? "Reserving..." : "Reserve My Table"}
            </Button>
          </form>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cafe-caramel text-sm uppercase tracking-widest font-medium mb-2">
              Come Visit Us
            </p>
            <h2 className="cafe-heading text-4xl sm:text-5xl text-cafe-brown">
              Find Us
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-80 lg:h-auto min-h-[320px]">
              <iframe
                title="Cafe 1991 Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3!2d80.9987!3d26.8613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9a1f6c1b1b%3A0x3c8d37c5f5f5f5f5!2s2%2F163%2C%20Vivek%20Khand%202%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl shadow-card p-8 flex flex-col justify-between">
              <div>
                <h3 className="cafe-heading text-2xl text-cafe-brown mb-6">
                  Contact & Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cafe-caramel mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-cafe-brown">Address</p>
                      <p className="text-cafe-brown-mid text-sm">
                        2/163, Vivek Khand 2, Gomti Nagar,
                        <br />
                        Lucknow, Uttar Pradesh 226010
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cafe-caramel mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-cafe-brown">Phone</p>
                      <a
                        href="tel:09935252525"
                        className="text-cafe-brown-mid text-sm hover:text-cafe-caramel transition-colors"
                      >
                        099352 52525
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cafe-caramel mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-cafe-brown">Hours</p>
                      <p className="text-cafe-brown-mid text-sm">
                        Open Daily: 10:00 AM – 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  className="flex-1 bg-cafe-caramel text-primary-foreground hover:opacity-90 rounded-full"
                  asChild
                  data-ocid="location.primary_button"
                >
                  <a href="tel:09935252525">
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-cafe-caramel text-cafe-caramel hover:bg-cafe-caramel/5 rounded-full"
                  asChild
                  data-ocid="location.secondary_button"
                >
                  <a
                    href="https://wa.me/919935252525"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-cafe-brown-mid text-cafe-brown-mid hover:bg-cafe-brown-mid/5 rounded-full"
                  asChild
                  data-ocid="location.secondary_button"
                >
                  <a
                    href="https://maps.google.com/?q=2/163+Vivek+Khand+2+Gomti+Nagar+Lucknow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" /> Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe-footer text-cafe-footer-text py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="cafe-script text-3xl text-cafe-footer-text mb-3">
                Cafe 1991
              </div>
              <p className="text-cafe-footer-text/70 text-sm leading-relaxed">
                Lucknow's coziest corner for Coffee, Conversations & Comfort.
                Come for the coffee, stay for the vibe.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="cafe-heading text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-cafe-footer-text/70 hover:text-cafe-footer-text text-sm transition-colors"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="cafe-heading text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-cafe-footer-text/70">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 2/163,
                  Vivek Khand 2, Gomti Nagar, Lucknow
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 099352 52525
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Daily: 10 AM – 11 PM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-cafe-footer-text/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-cafe-footer-text/60">
            <p>© {new Date().getFullYear()} Cafe 1991. All rights reserved.</p>
            <p>
              Built with{" "}
              <Heart className="inline w-3 h-3 text-cafe-caramel fill-cafe-caramel" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cafe-footer-text transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <Toaster richColors />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CafeApp />
    </QueryClientProvider>
  );
}
