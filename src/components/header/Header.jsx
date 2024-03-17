import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.css'
import { IoLocationOutline } from "react-icons/io5";

function Header() {
  return (
    <div className='wrapper'>
   

      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>

    </div>
  )
}

export default Header
