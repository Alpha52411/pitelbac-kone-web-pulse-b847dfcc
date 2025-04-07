
import { Truck, Home, Car, Building, ShoppingCart } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-7 w-7" />,
      title: "Vente de Riz",
      description: "Nous proposons du riz de qualité supérieure en gros et en détail, avec un large choix de variétés pour satisfaire tous vos besoins.",
      link: "/services#rice"
    },
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Import-Export",
      description: "Services d'import-export pour les entreprises et les particuliers avec une expertise en logistique internationale.",
      link: "/services#import-export"
    },
    {
      icon: <Car className="h-7 w-7" />,
      title: "Location & Vente de Voitures",
      description: "Location de véhicules pour tous vos besoins et vente de voitures neuves et d'occasion de qualité supérieure.",
      link: "/services#cars"
    },
    {
      icon: <Building className="h-7 w-7" />,
      title: "Immobilier",
      description: "Solutions immobilières complètes : achat, vente et location de biens résidentiels et commerciaux au Togo.",
      link: "/services#real-estate"
    },
    {
      icon: <ShoppingCart className="h-7 w-7" />,
      title: "Commerce Général",
      description: "Produits variés et services de qualité répondant aux besoins de nos clients particuliers et professionnels.",
      link: "/services#general-trade"
    }
  ];

  // Carousel images
  const carouselImages = [
    "/lovable-uploads/2b795743-282d-450b-9283-cc29814e66d0.png", // Car rental service
    "/lovable-uploads/475d9c87-d417-4462-91b9-49ac0aa12bc0.png", // Flight tracker map
    "/lovable-uploads/e78416d8-09ff-4c9e-8ce7-fcf80e6b74ed.png", // Private jets
    "/lovable-uploads/bd0f9c13-0f00-4736-a349-9844fcb82c08.png", // World map with flights
    "/lovable-uploads/4ca0e03b-58b7-4a71-a993-b943d2401b01.png", // Maritime traffic
    "/lovable-uploads/58a2f63e-1abe-4d67-8227-d8666df51f4d.png", // English Channel shipping
    "/lovable-uploads/8229634c-5e31-49fa-9fab-548c58e0c975.png", // Global logistics concept
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <Hero
        title="PITELBAC KONE"
        subtitle="Avec PITECLAC, la satisfaction est au Quotidien !"
        carouselImages={carouselImages}
        primaryButtonText="Nos Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contactez-nous"
        secondaryButtonLink="/contact"
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Bienvenue chez Pitelbac Kone"
              subtitle="Entreprise togolaise d'excellence fondée en 2010, engagée à fournir des produits et services de qualité supérieure."
            />
          </AnimatedSection>

          <AnimatedSection delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Notre Histoire</h3>
              <p className="text-gray-700 mb-6">
                Fondée en 2010 par un visionnaire togolais passionné par le commerce et l'entrepreneuriat, 
                Pitelbac Kone est née d'un rêve ambitieux : offrir des produits et services de qualité supérieure 
                à tous, tout en contribuant au développement économique de la région.
              </p>
              <p className="text-gray-700 mb-6">
                Tout a commencé avec la vente de riz, un produit essentiel, mais souvent négligé en termes de qualité. 
                Grâce à des partenariats solides avec des producteurs locaux et internationaux, Pitelbac Kone s'est 
                rapidement imposée comme un acteur clé du marché.
              </p>
              <Button asChild className="bg-pitelbac-600 hover:bg-pitelbac-700">
                <Link to="/about">En savoir plus</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1590004953392-5aba2e72269a?auto=format&fit=crop&q=80"
                  alt="Our Story"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-pitelbac-700/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pitelbac-100 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pitelbac-50 rounded-lg -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Nos Services"
              subtitle="Découvrez notre gamme complète de services adaptés à vos besoins personnels et professionnels"
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pitelbac-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à collaborer avec nous ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment Pitelbac Kone peut vous aider.
            </p>
            <Button asChild size="lg" className="bg-white text-pitelbac-700 hover:bg-white/90">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
