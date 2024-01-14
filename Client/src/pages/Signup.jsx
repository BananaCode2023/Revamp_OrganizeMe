import React from 'react'
import '../css/signup.css'
import signupHeroImg from '../assets/signup-hero-img.svg'
import organizeMeLogo from '../assets/OrganizeMeLogo-colored.png'
import googleLogo from '../assets/google-logo.png'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

function Signup() {
  return (
    <>
      <div className='signup-page'>
        <div className='signup-form'>
          <div className='signup-heading'>
            <Link to='/'>
              <img src={organizeMeLogo} alt="" />
            </Link>
            <h2>Create an Account</h2>
            <p>
              Welcome! Select a method to Sign up.
            </p>
          </div>
          <form>

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

            <div className='form-diversion'>
              <hr className='signup-hr'/>
              <small>or continue with </small>
            </div>

            <button>
              <img src={googleLogo} alt="google logo" />Continue with Google
            </button>

          </form>
          <small>
            Already have an account? <Link to='/auth/login'>Click here to Log in</Link>
          </small>
        </div>

        <div className='signup-hero'>
          <div className='hero-text'>
            <h2>Welcome Aboard</h2>
            <p>
            Welcome to Organize Me! Get ready to unlock<br/> a world of possibilities. Your journey starts here.
            </p>
          </div>
          <img src={signupHeroImg} alt="" />
        </div>
      </div>
      <ScrollToTop/>
    </>
  )
}

export default Signup