
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";

const About = () => {
  const values = [
    {
      title: "Qualité",
      description: "Nous nous engageons à fournir des produits et services de la plus haute qualité possible."
    },
    {
      title: "Intégrité",
      description: "Nous agissons avec honnêteté et transparence dans toutes nos transactions et relations."
    },
    {
      title: "Innovation",
      description: "Nous cherchons constamment à améliorer nos offres et à trouver de nouvelles solutions."
    },
    {
      title: "Satisfaction Client",
      description: "La satisfaction de nos clients est notre priorité absolue et guide toutes nos actions."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="À Propos de Pitelbac Kone"
              subtitle="Découvrez notre histoire, notre mission et nos valeurs"
              center
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80"
                  alt="Our Story"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-pitelbac-100 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Fondée en 2010 par un visionnaire togolais passionné par le commerce et l'entrepreneuriat, 
                  Pitelbac Kone est née d'un rêve ambitieux : offrir des produits et services de qualité supérieure 
                  à tous, tout en contribuant au développement économique de la région.
                </p>
                <p>
                  Tout a commencé avec la vente de riz, un produit essentiel, mais souvent négligé en termes de qualité. 
                  Grâce à des partenariats solides avec des producteurs locaux et internationaux, Pitelbac Kone s'est 
                  rapidement imposée comme un acteur clé du marché.
                </p>
                <p>
                  La philosophie de l'entreprise repose sur l'idée que la satisfaction des clients doit être une constante, 
                  d'où notre slogan : "Avec PITECLAC, la satisfaction est au Quotidien !"
                </p>
                <p>
                  Au fil des années, l'entreprise a diversifié ses activités en se lançant dans l'import-export, 
                  la location et la vente de voitures, ainsi que dans l'immobilier et le commerce général. 
                  Aujourd'hui, Pitelbac Kone est reconnue pour son professionnalisme, sa fiabilité, 
                  et son engagement envers ses clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-pitelbac-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4 text-pitelbac-700">Notre Mission</h3>
                <p className="text-gray-700">
                  Fournir des produits et services de qualité supérieure qui répondent et dépassent les attentes de nos clients, 
                  tout en contribuant au développement économique du Togo. Nous nous engageons à opérer avec intégrité, 
                  à respecter nos employés et nos partenaires, et à avoir un impact positif sur les communautés que nous servons.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4 text-pitelbac-700">Notre Vision</h3>
                <p className="text-gray-700">
                  Devenir le leader reconnu dans nos domaines d'activité en Afrique de l'Ouest, synonyme d'excellence, 
                  d'innovation et de satisfaction client. Nous aspirons à être un catalyseur de croissance économique 
                  et un exemple de réussite entrepreneuriale africaine, inspirant la prochaine génération d'entrepreneurs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Nos Valeurs"
              subtitle="Les principes qui guident chacune de nos actions"
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                  <CheckCircle2 className="h-6 w-6 text-pitelbac-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
