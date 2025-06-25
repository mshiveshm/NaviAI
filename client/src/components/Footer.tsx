import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 text-primary flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14h24v18a2 2 0 01-2 2H10a2 2 0 01-2-2V14z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <path d="M14 14V10a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <circle cx="20" cy="22" r="2.5" fill="currentColor"/>
                  <circle cx="20" cy="22" r="5" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.6"/>
                  <circle cx="20" cy="22" r="7.5" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">NaviAI</h3>
                <p className="text-sm text-muted-foreground">Intelligent Shopping Assistant</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">
              Revolutionizing the shopping experience with cutting-edge AI technology. 
              Find products instantly through voice commands, image recognition, and 
              intelligent conversations. Shopping has never been this intuitive.
            </p>
            <div className="flex space-x-4 mb-6">
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
        
        {/* Newsletter Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Get the latest updates on new features and shopping insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
