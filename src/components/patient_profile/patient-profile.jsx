import axios from "axios";
import "./patient_profile.css";
import React, { useEffect, useState } from "react";


const PatientProfile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [appointments, setAppointments] = useState([])
  

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/appointment/all/');
        const userAppointments = response.data.filter(appointment => appointment.patient === user.id);

        const detailedAppointments = await Promise.all(userAppointments.map(async (appointment) => {
          const doctorResponse = await axios.get(`http://127.0.0.1:8000/api/doctor/${appointment.doctor}`);
          const specializationResponse = await axios.get(`http://127.0.0.1:8000/api/doctor/specializations/${doctorResponse.data.specialization}`);
          const specialization = specializationResponse.data;

          return {
            ...appointment,
            first_name: doctorResponse.data.user.first_name,
            last_name: doctorResponse.data.user.last_name,
            specialization: specialization.title
          };
        }));

        setAppointments(detailedAppointments);
      } catch (error) {
        console.error('Error fetching appointments or doctors:', error);
      }
    };

    fetchAppointments();
  }, [user]);
  console.log(appointments)
  return (
    <>
          <div className="tab-content p-4">
            <div className="tab-pane fade show active">
              <div className="row">
                <div className="col-lg-6 col-12 mt-4 pwidth">
                  <h5 classNameName="h5">Appointment List</h5>
                  {appointments.map((appointment, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h3 fw-normal text-primary mb-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C10.0226 20.3135 4.91699 17.563 2.86894 13.001L1 13V11L2.21045 11.0009C2.07425 10.3633 2 9.69651 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 9.68542 4.09035 10.3516 4.26658 11.0004L6.43381 11L8.5 7.55635L11.5 12.5563L12.4338 11H17V13H13.5662L11.5 16.4437L8.5 11.4437L7.56619 13L5.10789 13.0006C5.89727 14.3737 7.09304 15.6681 8.64514 16.9029C9.39001 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5Z"></path>
                  </svg>
                  <div className="flex overflow-hidden ms-2">
                    <h6 className="mb-0 h6">{appointment.specialization}</h6>
                    <p className="text-muted mb-0 text-truncate small">
                      Dr. {appointment.first_name} {appointment.last_name}
                      
                    </p>
                  </div>
                  <span className="mb-0">{new Date(appointment.date).toLocaleDateString()}</span>
                  <span className={`mb-0 ${
                      appointment.status === 'pending' ? 'text-secondary' :
                      appointment.status === 'confirmed' ? 'text-success' :
                      appointment.status === 'cancelled' ? 'text-danger' : ''
                        }`}>
                      {appointment.status}
                  </span>
                </div>
              ))}
                 
                </div>
              </div>
          
              <h5 className="mb-0 mt-4 pt-2">Contact us</h5>
              <div className="row">
                <div className="col-md-12 col-lg-6 mt-4">
                  <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                    <div className="icon text-center rounded-lg mx-auto">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        className="align-middle h3"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M239.49,23.16a13,13,0,0,0-13.23-2.26L23.6,100.21a18.22,18.22,0,0,0,3.12,34.86L76,144.74V200a20,20,0,0,0,34.4,13.88l22.67-23.51L170.35,223a20,20,0,0,0,32.7-10.54L243.67,35.91A13,13,0,0,0,239.49,23.16ZM147.41,77.52,85.22,122.09l-34.43-6.75ZM100,190.06V161.35l15,13.15Zm81.16,10.52-73.88-64.77L213.59,59.63Z"></path>
                      </svg>
                    </div>
                    <div className="card-body p-0 mt-3 Messages">
                      <a className="title text-dark h6 d-block" href="#">
                        New Messages
                      </a>
                      <a className="link" href="#">
                        Read more
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="ri-arrow-right-line align-middle"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mt-4">
                  <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                    <div className="icon text-center rounded-lg mx-auto">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="align-middle h3"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 13H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19.5 21.75L16.855 23.1406L17.3601 20.1953L15.2202 18.1094L18.1775 17.6797L19.5 15L20.8225 17.6797L23.7798 18.1094L21.6399 20.1953L22.145 23.1406L19.5 21.75Z"></path>
                      </svg>
                    </div>
                    <div className="card-body p-0 mt-3 Messages">
                      <a className="title text-dark h6 d-block" href="#">
                        Latest Proposals
                      </a>
                      <a className="link" href="#">
                        Read more
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="ri-arrow-right-line align-middle"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default PatientProfile;
