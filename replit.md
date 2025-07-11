# NaviAI - Intelligent Shopping Assistant

## Overview

NaviAI is a full-stack web application that provides AI-powered shopping assistance through multiple interaction methods including voice search, image recognition, and chat functionality. The application is built with a modern TypeScript stack featuring React for the frontend and Express.js for the backend, with PostgreSQL as the database layer.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Centralized in `shared/schema.ts` for type sharing

## Key Components

### Frontend Components
1. **Page Components**:
   - Home page with feature showcase
   - Voice Search interface with microphone controls
   - Image Upload with drag-and-drop functionality
   - Chat interface for conversational AI
   - 404 error handling

2. **Shared Components**:
   - Header with navigation and branding
   - Footer with links and company information
   - FeatureCard for highlighting capabilities
   - BenefitCard for displaying advantages

3. **UI System**:
   - Complete shadcn/ui component library
   - Consistent design tokens and theming
   - Responsive design patterns
   - Accessibility-first approach

### Backend Components
1. **Server Structure**:
   - Express application with middleware setup
   - Route registration system
   - Error handling middleware
   - Request/response logging

2. **Storage Layer**:
   - Abstract storage interface for CRUD operations
   - In-memory storage implementation for development
   - User management functionality
   - Ready for database integration

3. **Development Tools**:
   - Vite integration for HMR in development
   - Static file serving
   - Development error overlay

## Data Flow

### Client-Server Communication
1. **API Requests**: Centralized through `queryClient.ts` with custom fetch wrapper
2. **Error Handling**: Unified error responses with status codes and messages
3. **Authentication**: Session-based approach (ready for implementation)
4. **Data Validation**: Zod schemas for runtime type checking

### State Management
1. **Server State**: TanStack Query for caching and synchronization
2. **UI State**: Local React state for component interactions
3. **Form State**: React Hook Form with Zod validation
4. **Global State**: Context providers for shared functionality

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Tailwind CSS
- **Database**: Drizzle ORM, PostgreSQL driver
- **Development**: Vite, TypeScript, ESBuild
- **Utilities**: date-fns, clsx, class-variance-authority

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations
- **Replit Integration**: Development error modal and cartographer

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds client assets to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Served from the build output directory

### Environment Configuration
- **Development**: Hot module reloading with Vite middleware
- **Production**: Static file serving with Express
- **Database**: Environment-based connection string
- **Port Configuration**: Configurable through environment variables

### Platform Integration
- **Replit**: Configured for autoscale deployment
- **Database**: Ready for PostgreSQL with Neon serverless
- **Monitoring**: Request logging and error tracking

## Recent Changes

- **Authentication System Implementation** (June 26, 2025): Added complete JWT-based authentication with MongoDB integration, secure password hashing, and user registration/login functionality
- **Replit Migration** (June 26, 2025): Successfully migrated from Replit Agent to standard Replit environment with proper security practices and client/server separation
- **Database Integration** (June 26, 2025): Connected to MongoDB using user-provided credentials with fallback to in-memory storage for development
- **Security Enhancements** (June 26, 2025): Implemented bcrypt password hashing, JWT token authentication, and secure API endpoints
- **Simplified Navigation** (June 25, 2025): Removed Contact page, simplified hero section description for better clarity
- **Layout Consistency** (June 25, 2025): Applied uniform spacing and margins across About and Contact pages
- **Enhanced Hero Section** (June 25, 2025): Added comprehensive AI shopping features showcase with stats, feature grid, and expanded content
- **Logo Refinement** (June 25, 2025): Improved logo design with shopping bag and neural network elements, added AI signal waves
- **Vertical Spacing Optimization** (June 25, 2025): Reduced excessive padding throughout application for more compact layout
- **Enhanced Footer** (June 25, 2025): Expanded footer with wider margins, comprehensive links, and contact information
- **Custom Logo Design** (June 25, 2025): Created modern minimalistic logo combining shopping bag with AI signal waves

## Changelog

```
Changelog:
- June 25, 2025. Enhanced design with dark/light theme system
- June 25, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Design preferences: Modern, clean aesthetic with dark/light theme support and enhanced colors.
```