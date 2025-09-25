# SM Technology Frontend Development Task

A responsive frontend application built with Next.js, Tailwind CSS, and Redux RTK Query for SM Technology's development task.

## 🚀 Technology Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit with RTK Query
- **Testing**: Jest with React Testing Library
- **Linting**: ESLint with Next.js config

## 📋 Features

- ✅ Responsive design across all devices
- ✅ Modern UI components with Tailwind CSS
- ✅ Redux RTK Query for API integration
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Testing setup with Jest
- ✅ SEO optimized with Next.js
- ✅ Performance optimized

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd sm-technology-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://your-live-server-url.com

# App Configuration
NEXT_PUBLIC_APP_NAME=SM Technology
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Page sections
│   │   └── Hero.tsx
│   ├── ui/               # UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── LoadingSpinner.tsx
│   └── providers/        # Context providers
│       └── Providers.tsx
├── store/                # Redux store
│   ├── index.ts          # Store configuration
│   ├── hooks.ts          # Typed hooks
│   └── api/              # API slices
│       └── apiSlice.ts
├── types/                # TypeScript types
│   └── index.ts
└── config/               # Configuration
    └── env.ts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 🌐 API Integration

The application uses Redux RTK Query for API integration. The base configuration is set up in `src/store/api/apiSlice.ts`.

### Adding New API Endpoints

1. Define your endpoint in the `apiSlice.ts` file:

```typescript
export const api = createApi({
  // ... existing config
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      providesTags: ['User'],
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})
```

2. Export the generated hooks:

```typescript
export const {
  useGetUsersQuery,
  useCreateUserMutation,
} = api
```

3. Use in your components:

```typescript
import { useGetUsersQuery } from '@/store/api/apiSlice'

function UsersList() {
  const { data: users, error, isLoading } = useGetUsersQuery()
  
  if (isLoading) return <LoadingSpinner />
  if (error) return <div>Error loading users</div>
  
  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

## 🎨 Styling Guidelines

The project uses Tailwind CSS for styling. Follow these guidelines:

- Use utility classes for styling
- Create custom components for reusable UI elements
- Follow mobile-first responsive design
- Use consistent spacing and color schemes
- Maintain accessibility standards

## 🧪 Testing

The project includes Jest and React Testing Library for testing.

### Writing Tests

Create test files with `.test.tsx` or `.spec.tsx` extension:

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Deploy to Other Platforms

The application can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Responsive Design

The application is fully responsive and tested on:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 🔒 Security Considerations

- Environment variables are properly configured
- API tokens are handled securely
- Input validation is implemented
- XSS protection is enabled
- CSRF protection is configured

## 📈 Performance Optimization

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- Lazy loading for components
- Bundle analysis and optimization
- SEO optimization with Next.js metadata

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📞 Support

For any questions or support, please contact:
- Phone: 01886807417
- Email: info@smtechnology.com

## 📄 License

This project is created for SM Technology's frontend development task.

---

**Project Submission Date**: September 27, 2025, 11:59 PM
**Submission Link**: [Submit Here](https://forms.gle/TpfNJBsXcWqjLQmE6)