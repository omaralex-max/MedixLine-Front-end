import "./card.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const OneCard = ({ doctor }) => {
  const [days, setDays] = useState([]);
  const token = localStorage.getItem('token');
  const [workingDays, setWorkingDays] = useState([]);




  const fetchWorkingDaysNames = (dayIds) => {
    if (!Array.isArray(dayIds)) {
      console.error('working_days is not an array or is undefined');
      return;
  }
    dayIds.forEach((dayId) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/workingdays/${dayId}`, {
        })
        .then(response => {
            const dayName = response.data.day.charAt(0).toUpperCase() + response.data.day.slice(1).toLowerCase();  
            setWorkingDays(prevDays => [...prevDays, dayName]);  
        })
        .catch(error => {
            console.error(`Error fetching details for day ${dayId}:`, error);
        });
    });
};

  useEffect(() => {
    fetchWorkingDaysNames(doctor.working_days);
  }, []);

  const filledStars = Math.round(doctor.average_rating);
  const totalStars = 5;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className="col-lg-6 col-md-12 mt-4 pt-2">
      <div className="card team border-0 rounded overflow-hidden customCardEachDoctor">
        <div className="row align-items-center cardpad customCardEachDoctor">
          <div className="col-md-6 d-flex justify-content-center">
            <Link to={{ pathname: `/doctordetails/${doctor.id}`, state: { doctor } }}>
              <div className="team-person position-relative overflow-hidden">
                <img src={doctor.profile_picture} className="img-fluid rounded-circle" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="title text-dark h5 d-block mb-0 Dtext">
                {capitalizeFirstLetter(doctor.user.first_name)} {capitalizeFirstLetter(doctor.user.last_name)}
              </h1>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <ul className="list-unstyled mb-0">
                  {[...Array(totalStars)].map((_, index) => (
                    <li key={index} className="list-inline-item">
                      <i className={`mdi mdi-star ${index < filledStars ? 'text-star-filled-cards' : 'text-muted'}`} />
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="list-unstyled mt-2 mb-0">
                <li className="d-flex ms-0">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="text-primary align-middle"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
                  </svg>
                  <small className="text-muted ms-2">{doctor.address}</small>
                </li>

                {workingDays.length > 0 && (
                  <li className="d-flex ms-0 mt-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-primary align-middle"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" />
                    </svg>
                    <small className="text-muted ms-2">
                      Available Days: {workingDays.map((day, index) => (
                        <span key={day}>{day}{index < workingDays.length - 1 ? ', ' : ''}</span>
                      ))}
                    </small>
                  </li>
                )}
                
                <li className="d-flex ms-0 mt-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="text-primary align-middle"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 16.4212 7.5866 20.0029 12.0049 20.0029ZM8.50488 14.0029H14.0049C14.281 14.0029 14.5049 13.7791 14.5049 13.5029C14.5049 13.2268 14.281 13.0029 14.0049 13.0029H10.0049C8.62417 13.0029 7.50488 11.8836 7.50488 10.5029C7.50488 9.12222 8.62417 8.00293 10.0049 8.00293H11.0049V6.00293H13.0049V8.00293H15.5049V10.0029H10.0049C9.72874 10.0029 9.50488 10.2268 9.50488 10.5029C9.50488 10.7791 9.72874 11.0029 10.0049 11.0029H14.0049C15.3856 11.0029 16.5049 12.1222 16.5049 13.5029C16.5049 14.8836 15.3856 16.0029 14.0049 16.0029H13.0049V18.0029H11.0049V16.0029H8.50488V14.0029Z" />
                  </svg>
                  <small className="text-muted ms-2">EGP {doctor.price} / Visit</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
