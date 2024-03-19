import React from 'react'
import logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user'>
        <img src={logo} alt="logo" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
