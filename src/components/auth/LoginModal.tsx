'use client'

import { useEffect } from 'react'

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  // small event link to open register via DOM (keeps header simple). Header will listen and open register.
  // Always declare the hook; conditionally attach only when open so hook order is stable.
  useEffect(() => {
    if (!open) return
    const btn = document.getElementById('open-register')
    function handler() {
      const ev = new CustomEvent('open-register-modal')
      window.dispatchEvent(ev)
      onClose()
    }
    btn?.addEventListener('click', handler)
    return () => btn?.removeEventListener('click', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[1000]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="absolute inset-0 flex items-start sm:items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200">
          {/* Header */}
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>

          <div className="px-6 pt-8 pb-2 text-center">
            <h3 className="text-2xl font-extrabold text-slate-800">Login</h3>
          </div>

          <div className="px-6 pb-6">
            {/* Email */}
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full  text-black  rounded-lg border border-gray-300 px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Password */}
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full  text-black rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">👁️</span>
            </div>

            {/* Options */}
            <div className="mt-3 flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <button className="text-sm text-gray-600 hover:text-gray-800">Forgot Password</button>
            </div>

            {/* Login button */}
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2.5">
              Login
            </button>

            {/* Divider */}
            <div className="my-4 flex items-center gap-3 text-sm text-gray-500">
              <div className="flex-1 h-px bg-gray-200" />
              <span>Or Sign in with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Providers */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 text-black">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
                <span className="text-sm text-black">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12"/>
                </svg>
                <span className="text-sm text-black">Facebook</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account? <button id="open-register" className="text-orange-500 font-semibold">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


