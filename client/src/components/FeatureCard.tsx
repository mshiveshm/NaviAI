import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  ariaLabel: string;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  href, 
  ariaLabel 
}: FeatureCardProps) {
  return (
    <div className="group gradient-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 hover-lift">
      <div className="flex flex-col items-center text-center h-full">
        <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
          {description}
        </p>
        <Link href={href} className="w-full mt-auto">
          <Button 
            className="w-full gradient-primary text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl text-sm"
            aria-label={ariaLabel}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
