
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-pitelbac-400 overflow-hidden">
      <CardHeader>
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pitelbac-50 text-pitelbac-600">
          {icon}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-pitelbac-600 hover:text-pitelbac-800">
          <Link to={link} className="flex items-center">
            En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
