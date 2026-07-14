import React, { useState } from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>Partner Registration</h1>
          <p>Grow your restaurant business with us</p>
          <span className="badge">Food Partner</span>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="businessName" className="form-label">
              Business Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="businessName"
              className="form-input"
              placeholder="Your Restaurant Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactName" className="form-label">
              Contact Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              className="form-input"
              placeholder="Full Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
              <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="+1 (555) 000-0000"
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
              placeholder="partner@restaurant.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="address"
              className="form-input"
              placeholder="Restaurant Address"
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

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Register Restaurant
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <a href="/food-partner/login">Sign in</a>
          </p>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
            Want to order food?{' '}
            <a href="/user/register">Register as Normal User</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
