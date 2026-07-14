import React, { useState } from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const UserRegister = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join us to order amazing food from local restaurants</p>
          <span className="badge">User</span>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              placeholder="John Doe"
            />
          </div>

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
                placeholder="Create a strong password"
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
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <a href="/user/login">Sign in</a>
          </p>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
            Want to partner with us?{' '}
            <a href="/food-partner/register">Register as Food Partner</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
