import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DoctorPage.css"
import axios from 'axios';



const DoctorDescription = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [specialization, setSpecialization] = useState(null)


  useEffect((e) => {
    axios.get(`http://127.0.0.1:8000/api/doctor/specializations/${user.specialization}`)
    .then(response => {

      setSpecialization(response.data.title)
  })
  .catch(error => {
    console.error(error);
    });
    }, [token]);

  return (
    <div className="card doctor-sidebar h-100">
      <div className="card-body d-flex flex-column">
      <div className="doctor-image-container">
          <div className="cover-image" style={{
            backgroundImage: `url(${require('../../assets/icons/logo2.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            width: '100%',
            position: 'relative',
          }}>
            <img
              src={`http://127.0.0.1:8000/${user.profile_picture}`}
              className="img-fluid rounded-circle mt-5"
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                border: '3px solid lightgray',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              alt="Dr. John Doe"
            />
          </div>
        </div>
        <div className="doctor-info text-center mt-5">
          <h5 className="card-title doctor-name">Dr. {user.user.first_name}</h5>
          <p className="card-text doctor-profession">{specialization}</p>
          <p className="card-text doctor-description">
            {user.description}
          </p>
        </div>
        <hr />
        <div className="doctor-links flex-grow-1 my-5">
          <Link to="/doctorpage" style={{width:"100%" ,  textAlign: "left"}} className="btn btn-outline-primary doctor-link"> <i className="fas fa-calendar-alt"></i> Schedule</Link> <br />
          <Link to="/doctorpage/appointments" style={{width:"100%" ,  textAlign: "left"}} className="btn btn-outline-primary doctor-link mt-4"><i className="fas fa-list-alt"></i> Appointments</Link> <br />
          <Link to="/chat" style={{width:"100%" ,  textAlign: "left"}} className="btn btn-outline-primary doctor-link mt-4"><i className="fas fa-comment-alt"></i> Chat</Link> <br />
          <Link to="/review" style={{width:"100%" ,  textAlign: "left"}} className="btn btn-outline-primary doctor-link mt-4"> <i className="fas fa-star"></i> Patient Review</Link> <br />
          <Link to="/doctorpage/update-profile" style={{width:"100%" ,  textAlign: "left", marginBottom:"25%"}} className="btn btn-outline-primary doctor-link mt-4"> <i className="fas fa-gear"></i> Profile Settings</Link> <br />
          {/* <Link to="/logout" style={{width:"100%" ,  textAlign: "left"}} className="btn btn-outline-primary doctor-link mt-3"> <i className="fas fa-sign-out-alt"></i> Log out</Link> <br /> */}
        </div>
      </div>
    </div>
   
  );
};

export default DoctorDescription;