import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  LogOut, 
  Mic, 
  Camera, 
  MessageSquare, 
  Eye, 
  ShoppingBag,
  Clock,
  Globe,
  Bot,
  Package
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface DashboardData {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
  };
  recentVoiceSearches: {
    id: string;
    query: string;
    language: string;
    timestamp: string;
  }[];
  recentImageSearches: {
    id: string;
    imageUrl: string;
    aiResult: string;
    timestamp: string;
  }[];
  recentChatHistory: {
    id: string;
    message: string;
    response: string;
    timestamp: string;
  }[];
  viewedProducts: {
    id: string;
    name: string;
    image: string;
    price: number;
    viewedAt: string;
  }[];
  purchasedProducts: {
    id: string;
    name: string;
    image: string;
    price: number;
    purchaseDate: string;
  }[];
}

export default function Dashboard() {
  const { toast } = useToast();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      window.location.href = "/auth";
      return;
    }
    setToken(storedToken);
  }, []);

  const { data: dashboardData, isLoading, error } = useQuery({
    queryKey: ['/api/user/dashboard'],
    queryFn: async () => {
      const response = await fetch("/api/user/dashboard", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      
      return response.json() as Promise<DashboardData>;
    },
    enabled: !!token,
    retry: false
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    window.location.href = "/";
  };

  if (!token) {
    return null; // Will redirect to auth
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error || !dashboardData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-red-600">Access Denied</CardTitle>
            <CardDescription>
              Unable to load dashboard. Please log in again.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = "/auth"} className="w-full">
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { user } = dashboardData;
  const userInitials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              NaviAI Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="text-lg font-semibold">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">
                    Welcome back, {user.firstName}!
                  </CardTitle>
                  <CardDescription className="text-base">
                    Here's your personalized NaviAI dashboard
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Profile Info */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Profile Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                  <p className="text-base">{user.firstName} {user.lastName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-base">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Member Since</p>
                  <p className="text-base">{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Voice Searches */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mic className="w-5 h-5" />
                <span>Recent Voice Searches</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dashboardData.recentVoiceSearches.length > 0 ? (
                <div className="space-y-3">
                  {dashboardData.recentVoiceSearches.map((search) => (
                    <div key={search.id} className="flex items-start justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{search.query}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="flex items-center space-x-1">
                            <Globe className="w-3 h-3" />
                            <span>{search.language}</span>
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{new Date(search.timestamp).toLocaleDateString()}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">No voice searches yet</p>
              )}
            </CardContent>
          </Card>

          {/* Recent Image Searches */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Recent Image Searches</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dashboardData.recentImageSearches.length > 0 ? (
                <div className="space-y-3">
                  {dashboardData.recentImageSearches.map((search) => (
                    <div key={search.id} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                      <img
                        src={search.imageUrl}
                        alt="Search result"
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{search.aiResult}</p>
                        <span className="text-xs text-muted-foreground flex items-center space-x-1 mt-1">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(search.timestamp).toLocaleDateString()}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">No image searches yet</p>
              )}
            </CardContent>
          </Card>

          {/* Recent Chat History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Recent Chat History</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dashboardData.recentChatHistory.length > 0 ? (
                <div className="space-y-3">
                  {dashboardData.recentChatHistory.slice(0, 5).map((chat) => (
                    <div key={chat.id} className="p-3 bg-muted rounded-lg">
                      <div className="flex items-start space-x-2 mb-2">
                        <User className="w-4 h-4 mt-1 text-primary" />
                        <p className="text-sm font-medium">{chat.message}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Bot className="w-4 h-4 mt-1 text-green-600" />
                        <p className="text-sm text-muted-foreground">{chat.response}</p>
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center space-x-1 mt-2">
                        <Clock className="w-3 h-3" />
                        <span>{new Date(chat.timestamp).toLocaleDateString()}</span>
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">No chat history yet</p>
              )}
            </CardContent>
          </Card>

          {/* Viewed Products */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Viewed Products</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dashboardData.viewedProducts.length > 0 ? (
                <div className="space-y-3">
                  {dashboardData.viewedProducts.map((product) => (
                    <div key={product.id} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-primary font-semibold">${product.price}</p>
                        <span className="text-xs text-muted-foreground flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>Viewed {new Date(product.viewedAt).toLocaleDateString()}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">No products viewed yet</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Purchased Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Purchased Products</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {dashboardData.purchasedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dashboardData.purchasedProducts.map((product) => (
                  <div key={product.id} className="p-4 bg-muted rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 rounded object-cover mb-3"
                    />
                    <h4 className="font-medium mb-1">{product.name}</h4>
                    <p className="text-primary font-semibold mb-2">${product.price}</p>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Package className="w-3 h-3" />
                      <span>Purchased {new Date(product.purchaseDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">No purchases yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}