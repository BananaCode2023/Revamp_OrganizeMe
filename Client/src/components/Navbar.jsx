import React, { useEffect, useState } from 'react'
import '../css/navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/OrganizeMe.png'
import whiteLogo from '../assets/OrganizeMeLogo-white.png'
import menuBtn from '../assets/OrganizeMe-white.png'
import closeMenu from '../assets/closeMenu.png'


function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav className={openMenu ? "" : visible ? "slide-down" : "slide-up"}>

        <div className='mobile-nav'>
          <Link to='/' onClick={()=>setOpenMenu(false)}>
            <img src={logo} alt='OrganizeMe' className='logo'/>
          </Link>
          <button
          onClick={handleOpenMenu}
          className='menuBtn'
          >
            <img src={openMenu? closeMenu : menuBtn}/>
          </button>
        </div>
        
        <div className='main-nav'>
          <Link to='/'>
            <img src={whiteLogo} alt="OrganizeMe Logo" />
          </Link>

          <div className='nav-links'>
            <Link 
            to='/features'
            id='nav-features'
            >
              Features
            </Link>
            <Link
            to='/about'
            id='nav-about'
            >
              About
            </Link>
            <Link
            to='/auth/login'
            id='nav-login'
            >
              Login
            </Link>
            <Link
            to='auth/signup'
            >
              Start For Free
            </Link>
          </div>
        </div>


      </nav>

        <div className={openMenu? 'overlay' : ''}>
          <div className={openMenu? 'menu' : 'slide-out'}>
            <Link to='/features' onClick={handleOpenMenu}>
              Features
            </Link>
            <Link to='/about' onClick={handleOpenMenu}>
              About
            </Link>
            <Link to='/auth/login' onClick={handleOpenMenu}>
              Login
            </Link>
            <Link to='auth/signup' onClick={handleOpenMenu}>
              Start For Free
            </Link>
          </div>
        </div>
    </>
  )
}

export default Navbar