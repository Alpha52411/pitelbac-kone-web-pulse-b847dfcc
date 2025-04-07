
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  carouselImages?: string[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const Hero = ({
  title,
  subtitle,
  carouselImages = [],
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Auto rotate carousel every 7 seconds
  useEffect(() => {
    if (carouselImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 7000); // 7 seconds
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="relative">
      {/* Background Image or Carousel */}
      {carouselImages.length > 0 ? (
        <div className="absolute inset-0 transition-opacity duration-1000">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000"
              style={{ 
                backgroundImage: `url(${image})`,
                opacity: index === currentImage ? 1 : 0 
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
          ))}
        </div>
      ) : null}

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
