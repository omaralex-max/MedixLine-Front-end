import React, { useState } from 'react';
import DocForm from '../components/sign_up/doc_sign_up';
import PatientForm from '../components/sign_up/patient_sign_up';

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
    </div>
  );
};

export default SignUp;
