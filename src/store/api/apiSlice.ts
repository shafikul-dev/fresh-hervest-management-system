import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User, Product, Order, Category, ApiResponse, PaginatedResponse } from '@/types'

// Define the base URL for the API
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-live-server-url.com'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // Add authentication token if available
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('authToken')
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
      }
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  tagTypes: ['User', 'Product', 'Order', 'Category'],
  endpoints: (builder) => ({
    // User endpoints
    getUsers: builder.query<PaginatedResponse<User>, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 } = {}) => `users?page=${page}&limit=${limit}`,
      providesTags: ['User'],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    createUser: builder.mutation<ApiResponse<User>, Partial<User>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation<ApiResponse<User>, { id: string; user: Partial<User> }>({
      query: ({ id, user }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
    deleteUser: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),

    // Product endpoints
    getProducts: builder.query<PaginatedResponse<Product>, { page?: number; limit?: number; category?: string }>({
      query: ({ page = 1, limit = 10, category } = {}) => {
        const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() })
        if (category) params.append('category', category)
        return `products?${params.toString()}`
      },
      providesTags: ['Product'],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
    createProduct: builder.mutation<ApiResponse<Product>, Partial<Product>>({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation<ApiResponse<Product>, { id: string; product: Partial<Product> }>({
      query: ({ id, product }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }],
    }),
    deleteProduct: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),

    // Order endpoints
    getOrders: builder.query<PaginatedResponse<Order>, { page?: number; limit?: number; userId?: string }>({
      query: ({ page = 1, limit = 10, userId } = {}) => {
        const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() })
        if (userId) params.append('userId', userId)
        return `orders?${params.toString()}`
      },
      providesTags: ['Order'],
    }),
    getOrderById: builder.query<Order, string>({
      query: (id) => `orders/${id}`,
      providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
    createOrder: builder.mutation<ApiResponse<Order>, Partial<Order>>({
      query: (order) => ({
        url: 'orders',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Order'],
    }),
    updateOrderStatus: builder.mutation<ApiResponse<Order>, { id: string; status: Order['status'] }>({
      query: ({ id, status }) => ({
        url: `orders/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Order', id }],
    }),

    // Category endpoints
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
      providesTags: ['Category'],
    }),
    getCategoryById: builder.query<Category, string>({
      query: (id) => `categories/${id}`,
      providesTags: (result, error, id) => [{ type: 'Category', id }],
    }),
    createCategory: builder.mutation<ApiResponse<Category>, Partial<Category>>({
      query: (category) => ({
        url: 'categories',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['Category'],
    }),

    // Authentication endpoints
    login: builder.mutation<ApiResponse<{ user: User; token: string }>, { email: string; password: string }>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<ApiResponse<{ user: User; token: string }>, { name: string; email: string; password: string }>({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    logout: builder.mutation<ApiResponse<void>, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => 'auth/profile',
      providesTags: ['User'],
    }),
  }),
})

export const {
  // User hooks
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  
  // Product hooks
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  
  // Order hooks
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
  
  // Category hooks
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  
  // Auth hooks
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetProfileQuery,
} = api
