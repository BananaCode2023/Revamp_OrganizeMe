import React from 'react'
import '../css/login.css'
import loginHeroImg from '../assets/login-hero-img.svg'
import organizeMeLogo from '../assets/OrganizeMeLogo-colored.png'
import googleLogo from '../assets/google-logo.png'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

function Login() {
  return (
    <>
      <div className='login-page'>
        <div className='login-hero'>
          <div className='hero-text'>
            <h2>Welcome Organizers</h2>
            <p>
              Get a chance to explore the best to-do list app.<br/>
              Unlock your productivity potential with OrganizeMe.
            </p>
          </div>
          <img src={loginHeroImg} alt="" />
        </div>

        <div className='login-form'>
          <div className='login-heading'>
            <Link to='/'>
              <img src={organizeMeLogo} alt="" />
            </Link>
            <h2>Log in to your account</h2>
            <p>Welcome! Select method to Log in:</p>
          </div>
          <form>
            <button>
              <img src={googleLogo} alt="google logo" />Continue with Google
            </button>

            <div className='form-diversion'>
              <hr className='login-hr'/>
              <small>or continue with email</small>
            </div>

            <input 
            className='form-input'
            type="email" 
            placeholder='✉️ Email'
            />
            <input 
            className='form-input'
            type="password" 
            placeholder='🔑 Password'
            />
            <div className='checkbox'>
              <input 
              type="checkbox"
              name='checkbox'
              />
              <label htmlFor="checkbox">Remember Me</label>
            </div>

            <button
            className='submit-btn'
            type='submit'
            >
              LOG IN
            </button>
          </form>
          <small>
            Don't have an account? <Link to='/auth/signup'>Sign-up now!</Link>
          </small>
        </div>
      </div>
      <ScrollToTop/>
    </>
  )
}

export default Login