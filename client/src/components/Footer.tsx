import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 text-primary flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <h3 className="text-2xl font-bold text-foreground">NaviAI</h3>
                <p className="text-sm text-muted-foreground">Intelligent Shopping Assistant</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-lg leading-relaxed">
              Revolutionizing the shopping experience with cutting-edge AI technology. 
              Find products instantly through voice commands, image recognition, and 
              intelligent conversations. Shopping has never been this intuitive.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Follow us on Twitter">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Follow us on LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">📧 hello@naviai.com</p>
              <p className="mb-2">📞 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>
          
          {/* Features Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Features</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/voice-search" className="hover:text-primary transition-colors flex items-center">Voice Search</Link></li>
              <li><Link href="/image-upload" className="hover:text-primary transition-colors flex items-center">Image Recognition</Link></li>
              <li><Link href="/chat" className="hover:text-primary transition-colors flex items-center">AI Chat Assistant</Link></li>
              <li><a href="/#features" className="hover:text-primary transition-colors flex items-center">Smart Recommendations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center">Price Comparison</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center">Wishlist Management</a></li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status Page</a></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center sm:text-left">
            &copy; 2025 NaviAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Security</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
