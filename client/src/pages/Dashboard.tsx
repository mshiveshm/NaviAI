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
  Package,
  Home,
  Menu,
  X
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

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

type DashboardSection = 'home' | 'voice-searches' | 'image-searches' | 'chat-history' | 'viewed-products' | 'purchased-products' | 'profile';

const sidebarItems = [
  { id: 'home' as DashboardSection, label: 'Home', icon: Home },
  { id: 'voice-searches' as DashboardSection, label: 'Voice Searches', icon: Mic },
  { id: 'image-searches' as DashboardSection, label: 'Image Searches', icon: Camera },
  { id: 'chat-history' as DashboardSection, label: 'Chat History', icon: MessageSquare },
  { id: 'viewed-products' as DashboardSection, label: 'Viewed Products', icon: Eye },
  { id: 'purchased-products' as DashboardSection, label: 'Purchased Products', icon: ShoppingBag },
  { id: 'profile' as DashboardSection, label: 'Profile', icon: User },
];

export default function Dashboard() {
  const { toast } = useToast();
  const [token, setToken] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<DashboardSection>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    return null;
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

  const renderMainContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, {user.firstName}!
              </h2>
              <p className="text-muted-foreground">
                Here's your personalized NaviAI dashboard overview
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Mic className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{dashboardData.recentVoiceSearches.length}</p>
                      <p className="text-sm text-muted-foreground">Voice Searches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{dashboardData.recentImageSearches.length}</p>
                      <p className="text-sm text-muted-foreground">Image Searches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{dashboardData.viewedProducts.length}</p>
                      <p className="text-sm text-muted-foreground">Viewed Products</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{dashboardData.purchasedProducts.length}</p>
                      <p className="text-sm text-muted-foreground">Purchases</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Recent Chat Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {dashboardData.recentChatHistory.length > 0 ? (
                    <div className="space-y-3">
                      {dashboardData.recentChatHistory.slice(0, 3).map((chat) => (
                        <div key={chat.id} className="p-3 bg-muted rounded-lg">
                          <p className="text-sm font-medium">{chat.message}</p>
                          <span className="text-xs text-muted-foreground">
                            {new Date(chat.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">No chat history yet</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="w-5 h-5" />
                    <span>Recent Purchases</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {dashboardData.purchasedProducts.length > 0 ? (
                    <div className="space-y-3">
                      {dashboardData.purchasedProducts.slice(0, 3).map((product) => (
                        <div key={product.id} className="flex items-center space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-primary font-semibold">${product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">No purchases yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'voice-searches':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Voice Searches</h2>
            <Card>
              <CardContent className="p-6">
                {dashboardData.recentVoiceSearches.length > 0 ? (
                  <div className="space-y-4">
                    {dashboardData.recentVoiceSearches.map((search) => (
                      <div key={search.id} className="p-4 bg-muted rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium">{search.query}</p>
                            <div className="flex items-center space-x-2 mt-2">
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
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">No voice searches yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        );

      case 'image-searches':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Image Searches</h2>
            <Card>
              <CardContent className="p-6">
                {dashboardData.recentImageSearches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dashboardData.recentImageSearches.map((search) => (
                      <div key={search.id} className="p-4 bg-muted rounded-lg">
                        <img
                          src={search.imageUrl}
                          alt="Search result"
                          className="w-full h-32 rounded object-cover mb-3"
                        />
                        <p className="font-medium">{search.aiResult}</p>
                        <span className="text-xs text-muted-foreground flex items-center space-x-1 mt-2">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(search.timestamp).toLocaleDateString()}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">No image searches yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        );

      case 'chat-history':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Chat History</h2>
            <Card>
              <CardContent className="p-6">
                {dashboardData.recentChatHistory.length > 0 ? (
                  <div className="space-y-4">
                    {dashboardData.recentChatHistory.map((chat) => (
                      <div key={chat.id} className="p-4 bg-muted rounded-lg">
                        <div className="flex items-start space-x-2 mb-3">
                          <User className="w-4 h-4 mt-1 text-primary" />
                          <p className="font-medium">{chat.message}</p>
                        </div>
                        <div className="flex items-start space-x-2 mb-2">
                          <Bot className="w-4 h-4 mt-1 text-green-600" />
                          <p className="text-muted-foreground">{chat.response}</p>
                        </div>
                        <span className="text-xs text-muted-foreground flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(chat.timestamp).toLocaleDateString()}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">No chat history yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        );

      case 'viewed-products':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Viewed Products</h2>
            <Card>
              <CardContent className="p-6">
                {dashboardData.viewedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dashboardData.viewedProducts.map((product) => (
                      <div key={product.id} className="p-4 bg-muted rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-32 rounded object-cover mb-3"
                        />
                        <h4 className="font-medium mb-1">{product.name}</h4>
                        <p className="text-primary font-semibold mb-2">${product.price}</p>
                        <span className="text-xs text-muted-foreground flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>Viewed {new Date(product.viewedAt).toLocaleDateString()}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">No products viewed yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        );

      case 'purchased-products':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Purchased Products</h2>
            <Card>
              <CardContent className="p-6">
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
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Profile</h2>
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
                      {user.firstName} {user.lastName}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {user.email}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Account Status</p>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 text-primary flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <h1 className="text-lg font-bold text-foreground">NaviAI</h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-sm">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-foreground">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {renderMainContent()}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}