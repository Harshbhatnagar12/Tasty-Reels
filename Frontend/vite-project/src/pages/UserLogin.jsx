import React, { useState } from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account to access delicious meals</p>
          <span className="badge">User</span>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
              <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="you@example.com"
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
            <label htmlFor="remember">Remember me</label>
          </div>

          <div style={{ textAlign: 'right' }}>
            <a href="#" className="btn-link">
              Forgot password?
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
            Don't have an account?{' '}
            <a href="/user/register">Register here</a>
          </p>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
            Are you a Food Partner?{' '}
            <a href="/food-partner/login">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
