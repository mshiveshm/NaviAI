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
        <section className="relative gradient-card py-12 sm:py-16 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/5" />
          <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Shop Smarter with{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">AI-Powered</span>{" "}
                Assistance
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of shopping with NaviAI. Find products instantly using voice commands, 
                image recognition, or natural conversation. Shopping has never been this intuitive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
            </div>
          </div>
        </section>

        {/* Primary Features Section */}
        <section className="py-12 sm:py-16 bg-muted/50" id="features">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
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
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
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
        <section className="py-12 sm:py-16 gradient-primary">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Started Free
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
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
