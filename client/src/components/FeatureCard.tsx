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
    <div className="group gradient-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 hover-lift">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link href={href} className="w-full">
          <Button 
            className="w-full gradient-primary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl"
            aria-label={ariaLabel}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
