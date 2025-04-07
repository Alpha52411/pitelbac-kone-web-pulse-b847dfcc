
import { 
  ShoppingCart, 
  Truck, 
  Car, 
  Building, 
  ChevronRight 
} from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Nos Services"
              subtitle="Découvrez notre gamme complète de services adaptés à vos besoins"
              center
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Rice Service */}
      <section id="rice" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e8c6?auto=format&fit=crop&q=80"
                  alt="Vente de Riz"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -left-5 w-36 h-36 bg-pitelbac-100 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-3xl font-bold mb-6 text-pitelbac-700">Vente de Riz</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Chez Pitelbac Kone, nous sommes fiers de proposer une gamme complète de riz de la plus haute qualité. 
                  Notre offre comprend diverses variétés pour répondre à tous les goûts et besoins culinaires.
                </p>
                <p>
                  Nous travaillons directement avec des producteurs locaux et internationaux pour garantir l'excellence 
                  de nos produits. Notre riz est disponible en vente en gros et en détail, avec des options de livraison 
                  dans tout le Togo.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Nos offres incluent :</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Riz blanc de qualité supérieure</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Riz parfumé</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Riz complet</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Variétés spéciales d'importation</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild className="bg-pitelbac-600 hover:bg-pitelbac-700">
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Import-Export */}
      <section id="import-export" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-pitelbac-700">Import-Export</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre expertise en import-export nous permet de faciliter le commerce international pour nos clients. 
                  Nous offrons des solutions complètes pour l'importation et l'exportation de diverses marchandises 
                  entre le Togo et le reste du monde.
                </p>
                <p>
                  Grâce à notre réseau étendu de partenaires logistiques et notre connaissance approfondie des 
                  réglementations douanières, nous assurons un service fluide et efficace pour tous vos besoins commerciaux internationaux.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Nos services comprennent :</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Conseil en import-export</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Gestion des procédures douanières</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Solutions logistiques intégrées</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Recherche de fournisseurs internationaux</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild className="bg-pitelbac-600 hover:bg-pitelbac-700">
                    <Link to="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="order-1 md:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                  alt="Import-Export"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-pitelbac-100 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Car Services */}
      <section id="cars" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80"
                  alt="Location et Vente de Voitures"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -left-5 w-36 h-36 bg-pitelbac-100 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-3xl font-bold mb-6 text-pitelbac-700">Location & Vente de Voitures</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre département automobile offre des services de location et de vente de véhicules de qualité. 
                  Que vous ayez besoin d'une voiture pour quelques jours ou que vous souhaitiez acquérir un nouveau véhicule, 
                  nous avons la solution qu'il vous faut.
                </p>
                <p>
                  Notre flotte de location comprend une large gamme de véhicules bien entretenus pour répondre à tous les besoins. 
                  Pour la vente, nous proposons des voitures neuves et d'occasion soigneusement sélectionnées pour leur qualité et leur fiabilité.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Nos services automobiles incluent :</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Location de voitures à court et long terme</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Vente de véhicules neufs et d'occasion</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Services de chauffeur</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Entretien et réparation</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild className="bg-pitelbac-600 hover:bg-pitelbac-700">
                    <Link to="/catalog">Voir notre flotte</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Real Estate */}
      <section id="real-estate" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-pitelbac-700">Immobilier</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre division immobilière offre une gamme complète de services pour répondre à tous vos besoins 
                  en matière de propriété. Que vous cherchiez à acheter, vendre ou louer un bien résidentiel ou 
                  commercial, notre équipe d'experts est là pour vous accompagner.
                </p>
                <p>
                  Nous disposons d'un large portefeuille de propriétés à Lomé et dans tout le Togo, et nous nous 
                  engageons à trouver la solution parfaite pour chaque client.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Nos services immobiliers comprennent :</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Achat et vente de propriétés</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Location résidentielle et commerciale</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Conseil en investissement immobilier</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Gestion de propriétés</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild className="bg-pitelbac-600 hover:bg-pitelbac-700">
                    <Link to="/catalog">Voir nos propriétés</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="order-1 md:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                  alt="Immobilier"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-pitelbac-100 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* General Trade */}
      <section id="general-trade" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80"
                  alt="Commerce Général"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -left-5 w-36 h-36 bg-pitelbac-100 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-3xl font-bold mb-6 text-pitelbac-700">Commerce Général</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre division de commerce général propose une variété de produits et services pour répondre 
                  aux besoins diversifiés de notre clientèle. Nous nous spécialisons dans la fourniture de produits 
                  de qualité pour les particuliers et les entreprises.
                </p>
                <p>
                  Grâce à notre réseau étendu de fournisseurs et notre engagement envers l'excellence, 
                  nous sommes en mesure d'offrir des solutions complètes et personnalisées à nos clients.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Notre offre comprend :</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Produits alimentaires</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Fournitures pour entreprises</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Équipements divers</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-pitelbac-600 mr-2" />
                    <span>Services de conseil commercial</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild className="bg-pitelbac-600 hover:bg-pitelbac-700">
                    <Link to="/contact">Demander des informations</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pitelbac-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un service personnalisé ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques. Notre équipe se fera un plaisir de vous proposer une solution adaptée.
            </p>
            <Button asChild size="lg" className="bg-white text-pitelbac-700 hover:bg-white/90">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
