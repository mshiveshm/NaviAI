import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="text-center p-6 group">
      <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 group-hover:scale-110">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
