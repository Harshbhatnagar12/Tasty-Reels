import React, { useState } from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerLogin = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>Welcome Partner</h1>
          <p>Sign in to manage your restaurant and orders</p>
          <span className="badge">Food Partner</span>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Business Email
              <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="partner@restaurant.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
              <span className="required">*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-input"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 'var(--spacing-md)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-lg)',
                }}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Keep me signed in</label>
          </div>

          <div style={{ textAlign: 'right' }}>
            <a href="#" className="btn-link">
              Forgot your password?
            </a>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            New to Tasty Reels?{' '}
            <a href="/food-partner/register">Register your restaurant</a>
          </p>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
            Want to order food?{' '}
            <a href="/user/login">Sign in as Customer</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
