import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Lightbulb } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-blue-500 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NaviAI</h1>
              <p className="text-sm text-gray-500 hidden sm:block">Intelligent Shopping Assistant</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-brand-blue-600 transition-colors font-medium">Features</a>
            <a href="#about" className="text-gray-600 hover:text-brand-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-blue-600 transition-colors font-medium">Contact</a>
            <Button 
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2" 
              aria-label="Get started with NaviAI"
            >
              Get Started
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-brand-blue-600 transition-colors font-medium">Features</a>
              <a href="#about" className="text-gray-600 hover:text-brand-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-600 hover:text-brand-blue-600 transition-colors font-medium">Contact</a>
              <Button className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white w-fit px-4 py-2 rounded-lg font-medium">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
