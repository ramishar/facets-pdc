import React, { useState} from 'react';
import "./Navbar.css"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
 
  const changeBackground = () => {
    if (window.pageYOffset >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    
    <>
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className='navbar-container'>
        <div className='navbar-logo'>
      <a href="#home">Facets PDC</a>
      </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href="#home">Home</a>
          </li>
          <li className='nav-item'>
          <a href="#about">About</a>
          </li>
          <li className='nav-item'>
          <a href="#programs">Our Programmes</a>
          </li>
          <li className='nav-item'>
          <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Navbar
