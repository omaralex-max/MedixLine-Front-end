import React, { useState } from 'react';
import DocForm from '../components/sign_up/doc_sign_up';
import PatientForm from '../components/sign_up/patient_sign_up';

const Sign_up = () => {
  const [isDoctorForm, setIsDoctorForm] = useState(false);

  const handleSwitchForm = (formType) => {
    if (formType === 'doctor') {
      setIsDoctorForm(true);
    } else {
      setIsDoctorForm(false);
    }
  };

  return (
    <div>
      {isDoctorForm ? (
        <DocForm onSwitchForm={handleSwitchForm} />
      ) : (
        <PatientForm onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default Sign_up;
