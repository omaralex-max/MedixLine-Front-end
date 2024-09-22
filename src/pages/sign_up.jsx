import React, { useState } from 'react';
import DocForm from '../components/sign_up/doc_sign_up';
import PatientForm from '../components/sign_up/patient_sign_up';

const Sign_up = () => {
  // State to control which form to show: default is 'patient'
  const [isDoctorForm, setIsDoctorForm] = useState(false);

  // Function to handle form switching
  const handleSwitchForm = (formType) => {
    if (formType === 'doctor') {
      setIsDoctorForm(true);  // Show doctor form
    } else {
      setIsDoctorForm(false);  // Show patient form
    }
  };

  return (
    <div>
      {/* Conditionally render the form based on the state */}
      {isDoctorForm ? (
        <DocForm onSwitchForm={handleSwitchForm} />
      ) : (
        <PatientForm onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default Sign_up;
