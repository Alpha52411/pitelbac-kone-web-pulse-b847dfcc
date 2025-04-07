
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const Hero = ({
  title,
  subtitle,
  imageSrc,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-24 md:pt-48 md:pb-40 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {primaryButtonText && primaryButtonLink && (
            <Button asChild size="lg" className="bg-pitelbac-600 hover:bg-pitelbac-700">
              <Link to={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
