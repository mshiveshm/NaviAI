import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-muted/30 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist. Let's get you back to shopping!
        </p>
        <Link href="/">
          <Button className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
