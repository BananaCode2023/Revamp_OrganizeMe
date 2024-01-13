import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaRegEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className='footer-row'>
        <div className='contact'>
          <h5>Contact</h5>
          <div className='footer-content'>
            <p>
              +63 921 453 9876 <br/>
              (043) 321 7654
            </p>
            
          </div>
        </div>
        <div className='quick-links'>
          <h5>Quick Links</h5>
          <div className='footer-content'>
            <Link>Features</Link><br/>
            <Link>About</Link><br/>
            <Link>Sign Up</Link><br/>
          </div>
        </div>
        <div className='social-media'>
          <h5>Social Media</h5>
          <div className='footer-content'>
            <Link>
              <FaFacebookSquare/>
            </Link>
            <Link>
              <FaTwitterSquare/>
            </Link>
            <Link>
              <FaInstagramSquare/>
            </Link>
          </div>
        </div>
        <div className='get-in-touch'>
          <h5>Get In Touch</h5>
          <div className='footer-form'>
            Receive latest updates and notifications from OrganizeMe
            <form>
              <input type="email" placeholder='example@gmail.com'/>
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>

        <small>© 2023 OrganizeMe All Rights Reserved</small>
    </footer>
  )
}

export default Footer