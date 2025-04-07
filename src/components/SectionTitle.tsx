
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false,
  className = "" 
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        "mb-12", 
        center && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-pitelbac-600 mt-4",
        center && "mx-auto"
      )} />
    </div>
  );
};
