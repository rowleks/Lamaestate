import React, { useCallback, useState} from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom"

const Navbar = React.memo(({user, logUser}) => {


const [toggle, setToggle] = useState(false)

const handleLog = () => {
  setToggle(!toggle)
  logUser

}


  return (
    
    <nav>
      <div className="left-nav">
 
        <Link className='logo' to="/">
          <img src="/logo.png" alt='logo' width={40} height={40} />
          <span>LamaEstate</span>
        </Link>

        <Link className='menu-items' to='/'>Home</Link>
        <Link className='menu-items' to='/list'>Listings</Link>
        <Link className='menu-items' to='/'>Contacts</Link>
        <Link  className='menu-items' to='/'>Agents</Link>

      </div>

      <div className="right-nav">

        { user ?
         (<div className='user'>
          <img src="/favicon.png" alt="" />
          <span className='username'>John Doe</span>
          <Link onClick={logUser} className='register logout'>Log out</Link>

        </div>) : 
          ( <><Link to="/signin">Sign In</Link>
         <Link className='register' to="/signup">Sign Up</Link>
        </>)

        }


        <div className="menu-icon">
          <img src='/menu.png' alt='menu icon' onClick={() => setToggle(!toggle)} />
        </div>

        <div className={toggle ? "ham-menu active" : "ham-menu"}>
          <Link to='/' 
          onClick={() => setToggle(!toggle)}>Home</Link>
          <Link to='/list' 
          onClick={() => setToggle(!toggle)}>Listings</Link>
          <Link to='/' 
          onClick={() => setToggle(!toggle)}>Contacts</Link>
          <Link to='/' 
          onClick={() => setToggle(!toggle)}>Agents</Link>
          { user ? (<Link to='/' 
          onClick={() => {setToggle(!toggle); logUser();} }>Logout</Link>) : 
          (<><Link 
            onClick={() => {setToggle(!toggle)}} to="/signin">Sign In</Link>
            <Link to='/signup' 
            onClick={() => setToggle(!toggle)}>Sign Up</Link>
          </>)}
        </div>

      </div>     
    </nav>
  )
})

export default Navbar
