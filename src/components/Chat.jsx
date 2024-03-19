import React from 'react';
import { BsCameraVideo, BsThreeDots } from "react-icons/bs";
import { HiMiniUserPlus } from "react-icons/hi2";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jahn</span>
        <div className="chatIcon">
          <span><BsCameraVideo /></span>
          <span><HiMiniUserPlus/></span>
          <span><BsThreeDots /></span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
