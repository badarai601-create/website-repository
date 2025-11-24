"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<void>
  signOut: () => Promise<void>
  getAccessToken: () => string | null
  refreshToken: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    checkAuthState()
  }, [])

  const checkAuthState = async () => {
    try {
      setLoading(true)
      
      // Check if we have a valid token
      const token = getAccessToken()
      if (token) {
        // Try to get user info from localStorage or validate token
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          try {
            const userData = JSON.parse(storedUser)
            setUser(userData)
          } catch (e) {
            console.warn('Failed to parse stored user data:', e)
            // Clear invalid data
            localStorage.removeItem('user')
            localStorage.removeItem('supabase.auth.token')
          }
        }
      }
    } catch (error) {
      console.error('Auth state check failed:', error)
      // Clear any invalid auth data
      clearAuthData()
    } finally {
      setLoading(false)
    }
  }

  const getAccessToken = (): string | null => {
    if (typeof window === 'undefined') return null
    
    try {
      const supabaseToken = localStorage.getItem('supabase.auth.token')
      if (supabaseToken) {
        const parsed = JSON.parse(supabaseToken)
        // Supabase stores tokens in currentSession.access_token
        if (parsed.currentSession?.access_token) {
          return parsed.currentSession.access_token
        }
        // Fallback to direct token if structure is different
        if (parsed.access_token) {
          return parsed.access_token
        }
      }
      
      // Fallback to legacy token storage
      return localStorage.getItem('accessToken')
    } catch (e) {
      console.warn('Failed to get access token:', e)
      return null
    }
  }

  const clearAuthData = () => {
    localStorage.removeItem('supabase.auth.token')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
    localStorage.removeItem('userProfile')
    localStorage.removeItem('googleSheetStatus')
    setUser(null)
  }

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      
      // For now, simulate Supabase auth
      // In a real app, you would call Supabase auth.signInWithPassword
      const mockUser: User = {
        id: 'mock-user-id',
        email,
        full_name: email.split('@')[0]
      }
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(mockUser))
      
      // Store mock token (in real app, this would come from Supabase)
      const mockToken = `mock-token-${Date.now()}`
      localStorage.setItem('accessToken', mockToken)
      
      setUser(mockUser)
    } catch (error) {
      console.error('Sign in failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setLoading(true)
      
      // For now, simulate Supabase auth
      // In a real app, you would call Supabase auth.signUp
      const mockUser: User = {
        id: 'mock-user-id',
        email,
        full_name: fullName
      }
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(mockUser))
      
      // Store mock token (in real app, this would come from Supabase)
      const mockToken = `mock-token-${Date.now()}`
      localStorage.setItem('accessToken', mockToken)
      
      setUser(mockUser)
    } catch (error) {
      console.error('Sign up failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      clearAuthData()
      
      // Redirect to base URL
      if (typeof window !== 'undefined') {
        window.location.href = '/'
      }
    } catch (error) {
      console.error('Sign out failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const refreshToken = async () => {
    try {
      // In a real app, you would call Supabase auth.refreshSession
      // For now, just check if current token is still valid
      const token = getAccessToken()
      if (!token) {
        throw new Error('No token to refresh')
      }
      
      // Simulate token refresh
      console.log('Token refreshed successfully')
    } catch (error) {
      console.error('Token refresh failed:', error)
      // If refresh fails, clear auth data and redirect to base URL
      clearAuthData()
      if (typeof window !== 'undefined') {
        window.location.href = '/'
      }
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    getAccessToken,
    refreshToken
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
