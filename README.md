# Call Automation Platform - Frontend

A modern Next.js frontend application for managing and automating phone calls with Google Sheets integration.

## Features

- **Modern UI/UX**: Clean, responsive design built with Next.js 14 and Tailwind CSS
- **Supabase Authentication**: Secure authentication system with JWT validation
- **User Dashboard**: Comprehensive dashboard for managing call automation
- **Google Sheets Integration**: Automatic Google Sheet creation and management
- **Profile Management**: User profile settings and customization
- **Responsive Design**: Mobile-first approach with responsive components
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **Authentication**: Supabase
- **State Management**: React Context + Hooks
- **Package Manager**: pnpm
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase project
- Google Cloud Project with Sheets API enabled

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# API Configuration
# Backend API URL is hardcoded to: https://www.badarai-site/api

# App Configuration
NEXT_PUBLIC_APP_NAME=Call Automation
NEXT_PUBLIC_APP_URL=https://www.badarai-site
```

### 3. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
call-automation-fe/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── profile-settings/  # Profile management
│   ├── analytics/         # Analytics pages
│   ├── admin/             # Admin interface
│   ├── demo/              # Demo pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── ui/                # Base UI components
│   ├── navbar.tsx         # Navigation component
│   ├── auth-modal.tsx     # Authentication modal
│   └── ...                # Other components
├── lib/                    # Utility libraries
│   ├── auth-context.tsx   # Authentication context
│   ├── api.ts             # API service functions
│   └── auth-schemas.ts    # Authentication schemas
├── hooks/                  # Custom React hooks
├── styles/                 # Additional styles
├── public/                 # Static assets
├── package.json            # Dependencies
└── README.md              # This file
```

## Key Components

### Authentication System

- **Auth Context**: Centralized authentication state management
- **Auth Modal**: Login/signup modal with Supabase integration
- **Protected Routes**: Automatic route protection for authenticated users
- **JWT Validation**: Secure token validation and refresh

### Dashboard

- **Overview**: Quick stats and activity summary
- **Google Sheets Status**: Real-time sheet creation and management
- **Quick Actions**: Easy access to common tasks
- **Recent Activity**: User activity tracking

### Google Sheets Integration

- **Automatic Creation**: Sheets created when users first access
- **Status Monitoring**: Real-time sheet status and health checks
- **Fallback Support**: Basic functionality if full service unavailable
- **User Permissions**: Automatic permission management

## Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript type checking

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:push         # Push schema to database
pnpm db:studio       # Open Prisma Studio

# Testing
pnpm test             # Run tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Generate coverage report
```

## API Integration

### Backend API

The frontend communicates with the Django backend via REST API:

- **Base URL**: `https://www.badarai-site/api`
- **Authentication**: JWT tokens from Supabase
- **Endpoints**: User profiles, Google Sheets, analytics

### Supabase Integration

- **Authentication**: User signup, login, and session management
- **Real-time**: Live updates for collaborative features
- **Storage**: File uploads and media management

## Styling & Design

### Design System

- **Colors**: Consistent color palette with CSS variables
- **Typography**: Scalable type system with proper hierarchy
- **Spacing**: Consistent spacing scale (4px base unit)
- **Components**: Reusable UI components with variants

### Tailwind CSS

- **Custom Configuration**: Extended color palette and spacing
- **Component Classes**: Utility-first approach with custom components
- **Responsive Design**: Mobile-first responsive utilities
- **Dark Mode**: Built-in dark mode support

## Development Guidelines

### Code Style

- **TypeScript**: Strict mode enabled, proper type definitions
- **ESLint**: Consistent code formatting and best practices
- **Prettier**: Automatic code formatting
- **Conventions**: Follow Next.js and React best practices

### Component Structure

```tsx
// Component template
interface ComponentProps {
  // Props interface
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Component logic
  
  return (
    // JSX
  )
}
```

### State Management

- **Local State**: useState for component-specific state
- **Global State**: Context API for app-wide state
- **Server State**: React Query for API data management
- **Form State**: React Hook Form for form handling

## Deployment

### Production Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Environment Variables

Ensure all required environment variables are set in production:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`

**Note**: Backend API URL is hardcoded to `https://www.badarai-site/api` and no longer requires environment variable configuration.

### Deployment Platforms

- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative deployment option
- **Self-hosted**: Docker or traditional hosting

## Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Verify Supabase credentials
   - Check JWT token validity
   - Ensure proper CORS configuration

2. **API Connection Issues**
   - Verify backend server is running
   - Check API URL configuration
   - Ensure proper authentication headers

3. **Google Sheets Issues**
   - Verify service account configuration
   - Check API permissions
   - Use backend test endpoints

### Development Tips

- Use React DevTools for debugging
- Check browser console for errors
- Verify environment variables are loaded
- Test on different screen sizes

## Contributing

1. Follow the established code style
2. Add proper TypeScript types
3. Include error handling
4. Test thoroughly before submitting
5. Update documentation as needed

## License

This project is proprietary and confidential.

## Support

For technical support or questions:
- Check the troubleshooting section
- Review backend API documentation
- Contact the development team