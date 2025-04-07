
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, Search } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Les Meilleures Variétés de Riz pour Chaque Plat",
    excerpt: "Découvrez les différentes variétés de riz et comment les utiliser pour optimiser vos préparations culinaires.",
    date: "05 Avril 2025",
    author: "Jean Koffi",
    category: "Alimentation",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8c6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Guide d'Entretien pour Votre Véhicule de Location",
    excerpt: "Conseils pratiques pour maintenir votre véhicule de location en parfait état et éviter les frais supplémentaires.",
    date: "28 Mars 2025",
    author: "Marie Adebayor",
    category: "Automobile",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Investir dans l'Immobilier au Togo : Opportunités et Défis",
    excerpt: "Analyse du marché immobilier togolais, zones prometteuses et conseils pour les investisseurs.",
    date: "15 Mars 2025",
    author: "Robert Mensah",
    category: "Immobilier",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Les Tendances Automobiles en 2025",
    excerpt: "Découvrez les nouvelles technologies et tendances qui façonnent l'industrie automobile cette année.",
    date: "02 Mars 2025",
    author: "Sophie Amegah",
    category: "Automobile",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Conseils pour Réussir dans l'Import-Export",
    excerpt: "Guide pratique pour les entrepreneurs souhaitant se lancer dans le commerce international.",
    date: "20 Février 2025",
    author: "Paul Atakpama",
    category: "Business",
    image: "https://images.unsplash.com/photo-1501159599894-155982264a55?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Aménager Votre Espace de Travail à Domicile",
    excerpt: "Idées et conseils pour créer un espace de travail productif et confortable chez vous.",
    date: "10 Février 2025",
    author: "Claire Donou",
    category: "Immobilier",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=800"
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Blog & Actualités"
              subtitle="Restez informé des dernières nouvelles et tendances dans nos domaines d'expertise"
              center
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-1/2 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-wrap gap-2 justify-end">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                className={selectedCategory === null ? "bg-pitelbac-600" : ""}
                onClick={() => setSelectedCategory(null)}
              >
                Tous
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-pitelbac-600" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pitelbac-100 text-pitelbac-800">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="p-0 text-pitelbac-600 hover:text-pitelbac-800">
                        <Link to={`/blog/${post.id}`}>Lire la suite</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Aucun article trouvé</h3>
              <p className="text-gray-600 mb-6">Essayez différents termes de recherche ou catégories.</p>
              <Button onClick={() => {setSearchTerm(""); setSelectedCategory(null);}} className="bg-pitelbac-600">
                Réinitialiser la recherche
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-pitelbac-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Abonnez-vous à notre newsletter</h2>
            <p className="text-lg text-gray-700 mb-8">
              Recevez nos derniers articles et actualités directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Votre adresse email" 
                className="rounded-md sm:flex-1"
              />
              <Button className="bg-pitelbac-600 hover:bg-pitelbac-700">
                S'abonner
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;
