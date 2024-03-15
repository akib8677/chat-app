import React from 'react';
import "../style.scss";
import avater  from "../img/avater.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-rapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{display: "none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img src={avater} alt="avater" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login </p>
      </div>
    </div>
  )
}

export default Register;
