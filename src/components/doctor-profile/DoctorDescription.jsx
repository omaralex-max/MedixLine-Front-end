// src/components/doctor-profile/DoctorDescription.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorPage.css';

const DoctorDescription = () => {
  return (
    <div className="doctor-sidebar">
      <div className="doctor-image-container">
        <img src={require('../assets/th (2).jpeg')} className="img-fluid" alt="Dr. John Doe" />
      </div>
      <div className="doctor-info">
        <h5 className="doctor-name">Dr. Jonny sense</h5>
        <p className="doctor-profession">Cardiologist</p>
        <p className="doctor-description">
          Dr. Jonny sense is a highly experienced cardiologist with over 15 years of practice. He specializes in
          treating heart-related issues and is known for his compassionate care.
        </p>
        <p className="doctor-updated"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <hr />
      <div className="doctor-links">
        <Link to="/doctorpage" className="doctor-link">Schedule</Link>
        <Link to="/doctorpage/appointments" className="doctor-link">Appointments</Link>
        <Link to="/chat" className="doctor-link">Chat</Link>
        <Link to="/review" className="doctor-link">Patient Review</Link>
        <Link to="/logout" className="doctor-link">Log out</Link>
      </div>
    </div>
  );
};

export default DoctorDescription;
