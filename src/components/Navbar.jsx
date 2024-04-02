import React from 'react'
import logo from '../img/logo.png'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user'>
        <img src={logo} alt="logo" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
