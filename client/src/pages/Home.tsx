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
        <section className="relative gradient-card py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Shop Smarter with{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">AI-Powered</span>{" "}
                Assistance
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of shopping with NaviAI. Find products instantly using voice commands, 
                image recognition, or natural conversation. Shopping has never been this intuitive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-xl" 
                  aria-label="Start shopping with NaviAI"
                >
                  Start Shopping Now
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-lg" 
                  aria-label="Watch NaviAI demo"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Features Section */}
        <section className="py-16 sm:py-24 bg-muted/50" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Three Ways to Shop Intelligently
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred method to discover and find products with the power of AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose NaviAI?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience shopping like never before with cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <section className="py-16 sm:py-24 gradient-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Shopping Experience?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join thousands of satisfied customers who've revolutionized their shopping with NaviAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary shadow-xl hover:shadow-2xl">
                Get Started Free
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white/50 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
