
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

// Mock data
const riceProducts = [
  {
    id: 1,
    name: "Riz Basmati Premium",
    description: "Riz à grain long parfumé, idéal pour les plats d'accompagnement.",
    price: "15 000 FCFA",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8c6?auto=format&fit=crop&q=80&w=500",
    category: "rice"
  },
  {
    id: 2,
    name: "Riz Jasmin",
    description: "Riz asiatique parfumé au jasmin, délicieusement aromatique.",
    price: "12 500 FCFA",
    image: "https://images.unsplash.com/photo-1586201375813-7d3d3d66552a?auto=format&fit=crop&q=80&w=500",
    category: "rice"
  },
  {
    id: 3,
    name: "Riz Complet Bio",
    description: "Riz complet de culture biologique, riche en nutriments.",
    price: "18 000 FCFA",
    image: "https://images.unsplash.com/photo-1594481535702-4b30c510fa69?auto=format&fit=crop&q=80&w=500",
    category: "rice"
  }
];

const carProducts = [
  {
    id: 4,
    name: "SUV Toyota RAV4",
    description: "SUV compact, idéal pour la ville et les terrains accidentés.",
    price: "Location: 45 000 FCFA/jour",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=500",
    category: "cars"
  },
  {
    id: 5,
    name: "Berline Honda Accord",
    description: "Berline confortable pour vos déplacements professionnels.",
    price: "Location: 35 000 FCFA/jour",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=500",
    category: "cars"
  },
  {
    id: 6,
    name: "Minibus Toyota Hiace",
    description: "Parfait pour les groupes, capacité de 15 personnes.",
    price: "Location: 70 000 FCFA/jour",
    image: "https://images.unsplash.com/photo-1609520505218-7421346e438f?auto=format&fit=crop&q=80&w=500",
    category: "cars"
  }
];

const realEstateProducts = [
  {
    id: 7,
    name: "Villa Moderne à Lomé",
    description: "5 chambres, piscine, jardin, quartier résidentiel sécurisé.",
    price: "Vente: 150 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=500",
    category: "realestate"
  },
  {
    id: 8,
    name: "Appartement Centre-ville",
    description: "3 chambres, entièrement meublé, vue sur la ville.",
    price: "Location: 450 000 FCFA/mois",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=500",
    category: "realestate"
  },
  {
    id: 9,
    name: "Local Commercial",
    description: "Espace de 200m², idéal pour commerce ou bureau.",
    price: "Location: 800 000 FCFA/mois",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=500",
    category: "realestate"
  }
];

const allProducts = [...riceProducts, ...carProducts, ...realEstateProducts];

const Catalog = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleInquiry = (productName: string) => {
    toast({
      title: "Demande envoyée!",
      description: `Nous vous contacterons bientôt concernant "${productName}".`,
      duration: 5000,
    });
  };

  const filteredProducts = activeTab === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeTab);

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Notre Catalogue"
              subtitle="Découvrez notre sélection de produits et services de qualité"
              center
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="rice">Riz</TabsTrigger>
                <TabsTrigger value="cars">Véhicules</TabsTrigger>
                <TabsTrigger value="realestate">Immobilier</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <AnimatedSection key={product.id} delay={index * 100}>
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-pitelbac-600">
                            {product.price}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{product.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            className="w-full bg-pitelbac-600 hover:bg-pitelbac-700"
                            onClick={() => handleInquiry(product.name)}
                          >
                            Demander plus d'infos
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-pitelbac-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Vous ne trouvez pas ce que vous cherchez ?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Notre catalogue en ligne ne représente qu'une partie de notre offre. Contactez-nous pour des produits ou services spécifiques.
            </p>
            <Button asChild size="lg" className="bg-pitelbac-600 hover:bg-pitelbac-700">
              <a href="/contact">Nous contacter</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
