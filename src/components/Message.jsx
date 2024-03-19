import React from 'react';
import logo from '../img/logo.png';

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={logo} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Message
