import React, { useState} from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom"

const Navbar = () => {


const [toggle, setToggle] = useState(false)


  return (
    
    <nav>
      <div className="left-nav">
 
        <a href='/' className='logo'>
          <img src="/logo.png" alt='logo' />
          <span>LamaEstate</span>
        </a>

        <Link className='menu-items' to='/'>Home</Link>
        <Link className='menu-items' to='/list'>Listings</Link>
        <Link className='menu-items' to='/'>Contacts</Link>
        <Link  className='menu-items' to='/'>Agents</Link>

      </div>

      <div className="right-nav">

        <a href='/'>Sign In</a>
        <a href='/' className='register'>Sign Up</a>

        <div className="menu-icon">
          <img src='/menu.png' alt='menu icon' onClick={() => setToggle(!toggle)} />
        </div>

        <div className={toggle ? "ham-menu active" : "ham-menu"}>
          <Link to='/'>Home</Link>
          <Link to='/list'>Listings</Link>
          <Link to='/'>Contacts</Link>
          <Link to='/'>Agents</Link>
          <Link to='/'>Sign In</Link>
          <Link to='/'>Sign Up</Link>
        </div>

      </div>     
    </nav>
  )
}

export default Navbar
