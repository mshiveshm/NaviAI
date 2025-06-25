import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Lightbulb } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">NaviAI</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Intelligent Shopping Assistant</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Features</a>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</Link>
            <ThemeToggle />
            <Link href="/voice-search">
              <Button 
                className="gradient-primary text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl" 
                aria-label="Get started with NaviAI"
              >
                Get Started
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Features</a>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</Link>
              <Link href="/voice-search">
                <Button className="gradient-primary text-white w-fit px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
