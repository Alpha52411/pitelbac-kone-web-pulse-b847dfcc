
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé!",
        description: "Nous vous répondrons dans les plus brefs délais.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Contactez-nous"
              subtitle="Nous sommes à votre disposition pour toute question ou demande"
              center
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-pitelbac-100 flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-pitelbac-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Notre Adresse</h3>
                <p className="text-gray-700">Togo, Lomé - Baguida</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-pitelbac-100 flex items-center justify-center mb-6">
                  <Phone className="h-8 w-8 text-pitelbac-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Téléphone</h3>
                <p className="text-gray-700 mb-2">+228 93321459</p>
                <p className="text-gray-700">WhatsApp: +228 93893645</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-pitelbac-100 flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-pitelbac-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <p className="text-gray-700">contact@pitelbac-kone.com</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-pitelbac-700">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-pitelbac-600 hover:bg-pitelbac-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Check className="h-4 w-4 mr-2 animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer le message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold mb-6 text-pitelbac-700">Notre Localisation</h2>
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    title="Pitelbac Kone Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d1.2554132!3d6.202073399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185df1%3A0x3224b5422caf411d!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    aria-hidden="false"
                    tabIndex={0}
                  ></iframe>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-gray-700">
                    Venez nous rencontrer en personne du lundi au vendredi de 8h à 17h.
                    Nos bureaux sont facilement accessibles depuis le centre-ville de Lomé.
                  </p>
                  <p className="text-gray-700">
                    Pour toute urgence en dehors des heures d'ouverture, veuillez nous contacter par WhatsApp au +228 93893645.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
