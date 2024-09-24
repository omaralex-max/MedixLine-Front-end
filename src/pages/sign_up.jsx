import React, { useState } from 'react';
import DocForm from '../components/sign_up/doc_sign_up';
import PatientForm from '../components/sign_up/patient_sign_up';
import HomeIcon from '../assets/icons/house-solid.svg';
import { Link } from "react-router-dom";
import './signup.css';

const SignUp = () => {
  const [activeForm, setActiveForm] = useState("patient");

  const handleSwitchForm = (form) => {
    setActiveForm(form);
  };

  return (
    <div>
      {activeForm === "doctor" ? (
        <DocForm activeForm={activeForm} onSwitchForm={handleSwitchForm} />
      ) : (
        <PatientForm activeForm={activeForm} onSwitchForm={handleSwitchForm} />
      )}
      <div className='home'>
        <Link to="/">
          <img src={HomeIcon} alt='Home' style={{ width: '30px', height: '30px' }}></img>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
