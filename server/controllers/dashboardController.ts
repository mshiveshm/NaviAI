import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth';

export const getDashboardData = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const userId = req.user.id;
    
    // For now, we'll return mock data structure that would come from your database
    // In a real application, you'd query your database for actual user activity
    const dashboardData = {
      user: {
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        createdAt: req.user.createdAt
      },
      recentVoiceSearches: [
        {
          id: '1',
          query: 'Find wireless headphones under $100',
          language: 'English',
          timestamp: new Date(Date.now() - 86400000).toISOString() // 1 day ago
        },
        {
          id: '2',
          query: 'Best running shoes for marathon',
          language: 'English', 
          timestamp: new Date(Date.now() - 172800000).toISOString() // 2 days ago
        },
        {
          id: '3',
          query: 'Smart home devices comparison',
          language: 'English',
          timestamp: new Date(Date.now() - 259200000).toISOString() // 3 days ago
        }
      ],
      recentImageSearches: [
        {
          id: '1',
          imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
          aiResult: 'Nike Air Max sneakers - Sports footwear',
          timestamp: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: '2', 
          imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200&h=200&fit=crop',
          aiResult: 'iPhone 15 Pro - Smartphone device',
          timestamp: new Date(Date.now() - 172800000).toISOString()
        }
      ],
      recentChatHistory: [
        {
          id: '1',
          message: 'What are the best laptops for programming?',
          response: 'For programming, I recommend laptops with good processors like MacBook Pro M3, Dell XPS 13, or ThinkPad X1 Carbon. Consider 16GB+ RAM and SSD storage.',
          timestamp: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
        },
        {
          id: '2',
          message: 'Compare iPhone vs Samsung Galaxy phones',
          response: 'iPhones offer seamless iOS ecosystem and regular updates. Samsung Galaxy phones provide more customization, better cameras in some models, and Android flexibility.',
          timestamp: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: '3',
          message: 'Best budget gaming setup under $800?',
          response: 'For $800 gaming setup: AMD Ryzen 5 processor, GTX 1660 or RTX 3060, 16GB RAM, 500GB SSD. Consider used parts to maximize performance.',
          timestamp: new Date(Date.now() - 172800000).toISOString()
        }
      ],
      viewedProducts: [
        {
          id: '1',
          name: 'Sony WH-1000XM4 Wireless Headphones',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
          price: 349.99,
          viewedAt: new Date(Date.now() - 7200000).toISOString() // 2 hours ago
        },
        {
          id: '2',
          name: 'MacBook Pro 14-inch M3',
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
          price: 1999.99,
          viewedAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: '3',
          name: 'Nike Air Force 1 Sneakers',
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop',
          price: 90.00,
          viewedAt: new Date(Date.now() - 172800000).toISOString()
        }
      ],
      purchasedProducts: [
        {
          id: '1',
          name: 'Apple AirPods Pro (2nd Gen)',
          image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop',
          price: 249.99,
          purchaseDate: new Date(Date.now() - 604800000).toISOString() // 1 week ago
        },
        {
          id: '2',
          name: 'Logitech MX Master 3S Mouse',
          image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop',
          price: 99.99,
          purchaseDate: new Date(Date.now() - 1209600000).toISOString() // 2 weeks ago
        }
      ]
    };

    res.json(dashboardData);
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};