
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PITELBAC KONE</h3>
            <p className="text-gray-300">
              Entreprise togolaise spécialisée dans la vente de riz, l'import-export, la location et vente de voitures, l'immobilier et le commerce général.
            </p>
            <p className="text-pitelbac-400 font-semibold italic">
              "Avec PITECLAC, la satisfaction est au Quotidien !"
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-pitelbac-400 transition-colors">À propos</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Nos services</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Catalogue</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Vente de Riz</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Import-Export</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Location de Voitures</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Vente de Voitures</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Immobilier</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pitelbac-400 transition-colors">Commerce Général</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-pitelbac-400" />
                Togo, Lomé - Baguida
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-pitelbac-400" />
                +228 93321459
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-pitelbac-400" />
                WhatsApp: +228 93893645
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-pitelbac-400" />
                contact@pitelbac-kone.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pitelbac Kone. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
