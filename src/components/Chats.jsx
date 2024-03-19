import React from 'react'
import logo from '../img/logo.png'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
          <img src={logo} alt="" />
        <div className='userChatInfo'>
          <span>John</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={logo} alt="" />
        <div className='userChatInfo'>
          <span>John</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={logo} alt="" />
        <div className='userChatInfo'>
          <span>John</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={logo} alt="" />
        <div className='userChatInfo'>
          <span>John</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
