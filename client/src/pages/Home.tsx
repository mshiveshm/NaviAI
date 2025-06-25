import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import BenefitCard from "@/components/BenefitCard";
import { Button } from "@/components/ui/button";
import { Mic, Camera, MessageCircle, Zap, CheckCircle, Shield, Heart } from "lucide-react";

export default function Home() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant results with our optimized AI algorithms"
    },
    {
      icon: CheckCircle,
      title: "Highly Accurate",
      description: "Advanced AI ensures precise product matching"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is secure and never shared without consent"
    },
    {
      icon: Heart,
      title: "Personalized",
      description: "Tailored recommendations based on your preferences"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative gradient-card py-8 sm:py-12 lg:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/5" />
          <div className="relative max-w-full mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Shop Smarter with{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">AI-Powered</span>{" "}
                Assistance
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-5xl mx-auto leading-relaxed">
                Transform your shopping experience with cutting-edge artificial intelligence. Discover products through voice search, 
                image recognition, and smart conversations with our AI assistant.
              </p>
              
              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-background/60 dark:bg-background/40 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Voice Shopping</h3>
                  <p className="text-sm text-muted-foreground">Simply speak what you need. Our AI understands natural language and context.</p>
                </div>
                
                <div className="bg-background/60 dark:bg-background/40 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Visual Search</h3>
                  <p className="text-sm text-muted-foreground">Upload any image and find similar or exact products instantly across thousands of stores.</p>
                </div>
                
                <div className="bg-background/60 dark:bg-background/40 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Smart Chat</h3>
                  <p className="text-sm text-muted-foreground">Get personalized recommendations and shopping advice from our intelligent assistant.</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">98.5%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50M+</div>
                  <div className="text-sm text-muted-foreground">Products Indexed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3 sec</div>
                  <div className="text-sm text-muted-foreground">Average Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Availability</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link href="/voice-search">
                  <Button 
                    className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-xl" 
                    aria-label="Start shopping with NaviAI"
                  >
                    Start Shopping Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="outline"
                    className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-lg" 
                    aria-label="Learn more about NaviAI"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Join over 100,000+ users who trust NaviAI for their shopping needs • Free to get started
              </p>
            </div>
          </div>
        </section>

        {/* Primary Features Section */}
        <section className="py-8 sm:py-12 bg-muted/50" id="features">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Three Ways to Shop Intelligently
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your preferred method to discover and find products with the power of AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <FeatureCard
                icon={Mic}
                title="Voice Search"
                description="Simply speak your product needs. Our AI understands natural language and finds exactly what you're looking for."
                buttonText="Try Voice Search"
                href="/voice-search"
                ariaLabel="Try Voice Search feature"
              />
              
              <FeatureCard
                icon={Camera}
                title="Image Upload"
                description="Upload or take a photo of any item. Our visual AI identifies products and finds similar or exact matches instantly."
                buttonText="Upload Image"
                href="/image-upload"
                ariaLabel="Try Image Upload feature"
              />
              
              <FeatureCard
                icon={MessageCircle}
                title="Chat with AI"
                description="Have a conversation with our intelligent assistant. Get personalized recommendations and shopping advice."
                buttonText="Start Chatting"
                href="/chat"
                ariaLabel="Start Chat with AI"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-12 bg-background">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Why Choose NaviAI?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience shopping like never before with cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-8 sm:py-12 gradient-primary">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Started Free
            </h2>
            <p className="text-xl text-white/80 mb-6 leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied customers who've revolutionized their shopping with NaviAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/voice-search">
                <Button className="bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary shadow-xl hover:shadow-2xl">
                  Start Voice Search
                </Button>
              </Link>
              <Link href="/image-upload">
                <Button 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  Upload Image
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
