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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Shop Smarter with{" "}
                <span className="text-brand-blue-500">AI-Powered</span>{" "}
                Assistance
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of shopping with NaviAI. Find products instantly using voice commands, 
                image recognition, or natural conversation. Shopping has never been this intuitive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl" 
                  aria-label="Start shopping with NaviAI"
                >
                  Start Shopping Now
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-brand-blue-500 text-gray-700 hover:text-brand-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2" 
                  aria-label="Watch NaviAI demo"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Features Section */}
        <section className="py-16 sm:py-24 bg-gray-50" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Three Ways to Shop Intelligently
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose NaviAI?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
        <section className="py-16 sm:py-24 bg-brand-blue-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Shopping Experience?
            </h2>
            <p className="text-xl text-brand-blue-100 mb-8 leading-relaxed">
              Join thousands of satisfied customers who've revolutionized their shopping with NaviAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-50 text-brand-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-blue-500 shadow-lg">
                Get Started Free
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-brand-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-blue-500"
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
