import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons";
import './Menubar.css'

  const MenuBar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className="logo">
          
          <p className="large-circle"></p>
				  <p className="small-circle"></p>
        </div>
        
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" class="active" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Features" class="active" aria-current="page">Features</NavLink>
            </li>
            <li>
              <NavLink to="/Explore" class="active" aria-current="page">Explore Creators</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ" class="active" aria-current="page">FAQ</NavLink>
            </li>
           
          </ul>
        </div>
       
        <div className="input-box">
          <IconContext.Provider value={{ color: 'black', left: '0' }}>
            <div>
              <IoSearch />
            </div>
          </IconContext.Provider>
          <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Search Creators" />

       </div>
       <div className='button-group'>
          <button type="button" className="sign-in-button">Sign in</button>
          <button type="button" className="sign-up-button">Sign up</button>
      </div>
      </div>
    </nav>
  )
}

export default MenuBar