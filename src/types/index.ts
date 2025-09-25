// User types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user'
  createdAt: string
  updatedAt: string
}

// Product types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
  createdAt: string
  updatedAt: string
}

// Order types
export interface Order {
  id: string
  userId: string
  products: OrderItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  productId: string
  quantity: number
  price: number
}

// Category types
export interface Category {
  id: string
  name: string
  description?: string
  image?: string
  createdAt: string
  updatedAt: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

// Error types
export interface ApiError {
  message: string
  status: number
  code?: string
}
