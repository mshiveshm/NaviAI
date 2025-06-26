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
      <nav className="max-w-full mx-auto px-6 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 text-primary flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15h24v16a3 3 0 01-3 3H11a3 3 0 01-3-3V15z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                <path d="M14 15V11a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <circle cx="20" cy="23" r="3" fill="currentColor" opacity="0.9"/>
                <circle cx="16" cy="20" r="1.5" fill="currentColor" opacity="0.7"/>
                <circle cx="24" cy="20" r="1.5" fill="currentColor" opacity="0.7"/>
                <circle cx="16" cy="26" r="1.5" fill="currentColor" opacity="0.7"/>
                <circle cx="24" cy="26" r="1.5" fill="currentColor" opacity="0.7"/>
                <path d="M17.2 21.2L18.8 21.8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
                <path d="M22.8 21.2L21.2 21.8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
                <path d="M17.2 24.8L18.8 24.2" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
                <path d="M22.8 24.8L21.2 24.2" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
                <path d="M17 7c1.5-2 4.5-2 6 0" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>
                <path d="M15 5c2.5-3 7.5-3 10 0" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.3" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NaviAI</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Intelligent Shopping Assistant</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Features</a>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link>
            <ThemeToggle />
            <Link href="/auth">
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
              <Link href="/auth">
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
