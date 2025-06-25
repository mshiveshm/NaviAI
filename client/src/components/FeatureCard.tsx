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
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-blue-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-brand-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue-200 transition-colors">
          <Icon className="w-8 h-8 text-brand-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <Link href={href} className="w-full">
          <Button 
            className="w-full bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 group-hover:scale-105"
            aria-label={ariaLabel}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
