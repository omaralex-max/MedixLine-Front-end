import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DoctorPage.css"
const DoctorDescription = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="card doctor-sidebar h-100">
      <div className="card-body d-flex flex-column">
      <div className="doctor-image-container">
        <img src={require('../assets/th (2).jpeg')} className="img-fluid Dimg" alt="Dr. John Doe" />
      </div>
      <div className="doctor-info">
        <h5 className="doctor-name">Dr. {user.user.first_name}</h5>
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
    </div>
  );
};

export default DoctorDescription;