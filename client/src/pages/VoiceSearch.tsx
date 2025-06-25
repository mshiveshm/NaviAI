import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, ArrowLeft, Play, Square } from "lucide-react";
import { useState } from "react";

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTranscript("Listening... Try saying something like 'I need a red dress for a wedding'");
    } else {
      setTranscript("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 hover:bg-muted">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Voice Search</h1>
          <p className="text-xl text-muted-foreground">
            Speak naturally to find the products you're looking for
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="gradient-card p-8 text-center border-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl mb-4 text-foreground">Start Voice Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <button
                  onClick={toggleListening}
                  className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                      : 'gradient-primary hover:scale-110'
                  } text-white shadow-xl hover:shadow-2xl transform hover:scale-105`}
                  aria-label={isListening ? "Stop listening" : "Start listening"}
                >
                  {isListening ? (
                    <Square className="w-12 h-12" />
                  ) : (
                    <Mic className="w-12 h-12" />
                  )}
                </button>
              </div>
              
              <p className="text-lg font-medium text-foreground mb-4">
                {isListening ? "Listening..." : "Click the microphone to start"}
              </p>
              
              {transcript && (
                <div className="bg-muted rounded-lg p-4 mb-6 border border-border">
                  <p className="text-foreground">{transcript}</p>
                </div>
              )}

              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Try saying:</strong></p>
                <p>"I need a black leather jacket"</p>
                <p>"Show me wireless headphones under $100"</p>
                <p>"Find running shoes for women"</p>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-foreground">How Voice Search Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Speak Naturally</h3>
                  <p className="text-muted-foreground">Describe what you're looking for in your own words</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Processing</h3>
                  <p className="text-muted-foreground">Our AI understands context, preferences, and intent</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Get Results</h3>
                  <p className="text-muted-foreground">Receive personalized product recommendations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
