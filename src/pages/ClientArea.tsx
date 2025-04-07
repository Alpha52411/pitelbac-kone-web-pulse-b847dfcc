
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "" 
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setTimeout(() => {
      setIsLoggedIn(true);
      toast({
        title: "Connexion réussie!",
        description: "Bienvenue dans votre espace client.",
        duration: 3000,
      });
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Erreur d'inscription",
        description: "Les mots de passe ne correspondent pas.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Simulate registration
    setTimeout(() => {
      setIsLoggedIn(true);
      toast({
        title: "Inscription réussie!",
        description: "Votre compte a été créé avec succès.",
        duration: 3000,
      });
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: "", password: "" });
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté de votre compte.",
      duration: 3000,
    });
  };

  // Mock client data
  const clientData = {
    name: "Thomas Amorin",
    email: "thomas.amorin@example.com",
    phone: "+228 91234567",
    orders: [
      { id: "ORD-2025-001", date: "03/04/2025", status: "Livré", amount: "150 000 FCFA" },
      { id: "ORD-2025-002", date: "25/03/2025", status: "En cours", amount: "75 000 FCFA" }
    ],
    appointments: [
      { id: "APT-2025-001", date: "10/04/2025", time: "10:00", service: "Consultation Immobilière" },
      { id: "APT-2025-002", date: "17/04/2025", time: "14:30", service: "Essai Véhicule" }
    ]
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle
              title="Espace Client"
              subtitle={isLoggedIn 
                ? `Bienvenue, ${clientData.name}` 
                : "Connectez-vous ou créez un compte pour accéder à votre espace personnalisé"
              }
              center
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {!isLoggedIn ? (
            <AnimatedSection>
              <div className="max-w-md mx-auto">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Connexion</TabsTrigger>
                    <TabsTrigger value="register">Inscription</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <Card>
                      <CardHeader>
                        <CardTitle>Connexion</CardTitle>
                        <CardDescription>
                          Entrez vos identifiants pour accéder à votre espace client
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="login-email">Email</Label>
                            <Input
                              id="login-email"
                              name="email"
                              type="email"
                              placeholder="votre@email.com"
                              value={loginData.email}
                              onChange={handleLoginChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <Label htmlFor="login-password">Mot de passe</Label>
                              <Button variant="link" className="p-0 h-auto text-sm">
                                Mot de passe oublié ?
                              </Button>
                            </div>
                            <Input
                              id="login-password"
                              name="password"
                              type="password"
                              placeholder="••••••••"
                              value={loginData.password}
                              onChange={handleLoginChange}
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-pitelbac-600 hover:bg-pitelbac-700">
                            Se connecter
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="register">
                    <Card>
                      <CardHeader>
                        <CardTitle>Créer un compte</CardTitle>
                        <CardDescription>
                          Rejoignez-nous pour bénéficier de services personnalisés
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleRegister} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="register-name">Nom complet</Label>
                            <Input
                              id="register-name"
                              name="name"
                              placeholder="Votre nom"
                              value={registerData.name}
                              onChange={handleRegisterChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="register-email">Email</Label>
                            <Input
                              id="register-email"
                              name="email"
                              type="email"
                              placeholder="votre@email.com"
                              value={registerData.email}
                              onChange={handleRegisterChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="register-phone">Téléphone</Label>
                            <Input
                              id="register-phone"
                              name="phone"
                              placeholder="Votre numéro de téléphone"
                              value={registerData.phone}
                              onChange={handleRegisterChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="register-password">Mot de passe</Label>
                            <Input
                              id="register-password"
                              name="password"
                              type="password"
                              placeholder="••••••••"
                              value={registerData.password}
                              onChange={handleRegisterChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="register-confirm-password">Confirmer le mot de passe</Label>
                            <Input
                              id="register-confirm-password"
                              name="confirmPassword"
                              type="password"
                              placeholder="••••••••"
                              value={registerData.confirmPassword}
                              onChange={handleRegisterChange}
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-pitelbac-600 hover:bg-pitelbac-700">
                            Créer un compte
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <Tabs defaultValue="dashboard" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
                    <TabsTrigger value="orders">Commandes</TabsTrigger>
                    <TabsTrigger value="appointments">Rendez-vous</TabsTrigger>
                  </TabsList>

                  <TabsContent value="dashboard">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tableau de bord</CardTitle>
                        <CardDescription>
                          Aperçu de votre compte et activités récentes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="border rounded-lg p-4 bg-gray-50">
                          <h3 className="text-lg font-semibold mb-4">Informations personnelles</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Nom complet</p>
                              <p>{clientData.name}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p>{clientData.email}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Téléphone</p>
                              <p>{clientData.phone}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" size="sm">
                              Modifier mes informations
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-4">Commandes récentes</h3>
                            {clientData.orders.length > 0 ? (
                              <div className="space-y-3">
                                {clientData.orders.slice(0, 2).map(order => (
                                  <div key={order.id} className="border-b pb-3 last:border-0">
                                    <div className="flex justify-between">
                                      <span className="font-medium">{order.id}</span>
                                      <span className={`text-sm ${
                                        order.status === 'Livré' ? 'text-green-600' : 'text-orange-500'
                                      }`}>{order.status}</span>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      <span>{order.date}</span>
                                      <span className="mx-2">•</span>
                                      <span>{order.amount}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-500">Aucune commande récente</p>
                            )}
                            <div className="mt-4">
                              <Button variant="link" className="p-0 h-auto">
                                Voir toutes les commandes
                              </Button>
                            </div>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-4">Prochains rendez-vous</h3>
                            {clientData.appointments.length > 0 ? (
                              <div className="space-y-3">
                                {clientData.appointments.map(apt => (
                                  <div key={apt.id} className="border-b pb-3 last:border-0">
                                    <div className="font-medium">{apt.service}</div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      <span>{apt.date}</span>
                                      <span className="mx-2">•</span>
                                      <span>{apt.time}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-500">Aucun rendez-vous prévu</p>
                            )}
                            <div className="mt-4">
                              <Button variant="link" className="p-0 h-auto">
                                Gérer mes rendez-vous
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={handleLogout}>
                          Se déconnecter
                        </Button>
                        <Button className="bg-pitelbac-600 hover:bg-pitelbac-700">
                          Nouveau rendez-vous
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="orders">
                    <Card>
                      <CardHeader>
                        <CardTitle>Mes Commandes</CardTitle>
                        <CardDescription>
                          Historique et suivi de vos commandes
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <div className="grid grid-cols-4 bg-gray-100 p-3 font-medium text-sm">
                            <div>N° Commande</div>
                            <div>Date</div>
                            <div>Montant</div>
                            <div>Statut</div>
                          </div>
                          {clientData.orders.map(order => (
                            <div key={order.id} className="grid grid-cols-4 p-3 border-t text-sm">
                              <div className="font-medium">{order.id}</div>
                              <div>{order.date}</div>
                              <div>{order.amount}</div>
                              <div className={`${
                                order.status === 'Livré' ? 'text-green-600' : 'text-orange-500'
                              }`}>{order.status}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="appointments">
                    <Card>
                      <CardHeader>
                        <CardTitle>Mes Rendez-vous</CardTitle>
                        <CardDescription>
                          Gérez vos rendez-vous et consultations
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <div className="grid grid-cols-4 bg-gray-100 p-3 font-medium text-sm">
                            <div>Référence</div>
                            <div>Service</div>
                            <div>Date</div>
                            <div>Heure</div>
                          </div>
                          {clientData.appointments.map(apt => (
                            <div key={apt.id} className="grid grid-cols-4 p-3 border-t text-sm">
                              <div className="font-medium">{apt.id}</div>
                              <div>{apt.service}</div>
                              <div>{apt.date}</div>
                              <div>{apt.time}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button className="bg-pitelbac-600 hover:bg-pitelbac-700">
                            Prendre un nouveau rendez-vous
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientArea;
