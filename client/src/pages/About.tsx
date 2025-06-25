import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award, Zap, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Active Users", value: "10,000+", icon: Users },
    { label: "Products Searched", value: "1M+", icon: Target },
    { label: "AI Accuracy", value: "98.5%", icon: Zap },
    { label: "Countries", value: "25+", icon: Globe }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      description: "Former Google AI researcher with 10+ years in machine learning"
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-founder", 
      description: "Ex-Amazon engineer specializing in computer vision and NLP"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      description: "Product leader with experience at Shopify and Square"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="gradient-card py-6 sm:py-8 lg:py-12">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">About NaviAI</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
                Revolutionizing Shopping with{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
                We're on a mission to make online shopping as intuitive as having a conversation with a knowledgeable friend.
                Our AI-powered platform transforms how people discover and find products.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 sm:py-8 bg-muted/50">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-6 sm:py-8 bg-background">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    NaviAI was born from a simple frustration: spending hours searching for products online, 
                    only to end up more confused than when we started. We realized that despite all the 
                    technological advances, shopping still felt broken.
                  </p>
                  <p>
                    In 2023, our founders came together with a shared vision: what if shopping could be as 
                    simple as describing what you need to a friend? What if AI could understand not just 
                    your words, but your intent, preferences, and context?
                  </p>
                  <p>
                    Today, NaviAI serves thousands of users worldwide, helping them find exactly what 
                    they're looking for through voice, images, and natural conversation.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="gradient-card border-border p-6">
                  <Lightbulb className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Pushing the boundaries of AI in e-commerce</p>
                </Card>
                <Card className="gradient-card border-border p-6">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Delivering the highest quality experience</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-6 sm:py-8 bg-muted/50">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate experts in AI, product design, and e-commerce, working together to transform shopping.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="gradient-card border-border text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 sm:py-8 gradient-primary">
          <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to Experience the Future of Shopping?
            </h2>
            <p className="text-xl text-white/80 mb-4 leading-relaxed">
              Join thousands who have already transformed their shopping experience with NaviAI.
            </p>
            <Button className="bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              Try NaviAI Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}