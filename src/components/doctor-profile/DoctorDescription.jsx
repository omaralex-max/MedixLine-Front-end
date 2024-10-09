import React, { useEffect, useState  } from 'react';
import { Link , useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DoctorPage.css"
import axios from 'axios';



const DoctorDescription = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [specialization, setSpecialization] = useState(null)


  useEffect((e) => {
    setUser(JSON.parse(localStorage.getItem('user')))
    axios.get(`http://127.0.0.1:8000/api/doctor/specializations/${user.specialization}`)
    .then(response => {

      setSpecialization(response.data.title)
  })
  .catch(error => {
    console.error(error);
    });
    }, []);

  const location = useLocation();
  const links = [
    { to: '/doctorpage', icon: 'fas fa-calendar-alt', text: 'Calendar' },
    { to: '/doctorpage/appointments', icon: 'fas fa-list-alt', text: 'Appointments' },
    { to: '/doctorpage/chat', icon: 'fas fa-comment-alt', text: 'Chat' },
    { to: '/doctorpage/doctor-reviews', icon: 'fas fa-star', text: 'Patient Review' },
    { to: '/doctorpage/update-profile', icon: 'fas fa-gear', text: 'Profile Settings' },
  ];

  return (
    <div className="card doctor-sidebar h-100">
      <div className="card-body d-flex flex-column">
      <div className="doctor-image-container">
          <div className="cover-image" style={{
            backgroundImage: `url(${require('../../assets/images/logo2.png')})`,
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
      {links.map((link, index) => (
        <Link to={link.to} key={index} className={`btn btn-outline-primary doctor-link mb-4 w-100 text-start ${location.pathname === link.to ? 'active' : ''}`}>
          <i className={link.icon}></i> {link.text}
        </Link>
      ))}
    </div>
      </div>
    </div>
   
  );
};

export default DoctorDescription;