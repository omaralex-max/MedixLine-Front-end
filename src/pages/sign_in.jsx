import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '../assets/icons/house-solid.svg';
import './signup.css';
import Signin from '../components/sign_in/signin.';

const SignIn = () => {
  return (
    <div>
      <Signin />
      <div className='home'>
        <Link to="/">
          <img src={HomeIcon} alt='Home' style={{ width: '30px', height: '30px' }}></img>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
