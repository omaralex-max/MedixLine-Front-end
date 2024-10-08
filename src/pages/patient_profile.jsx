import Profile from "../components/patient_profile/patient-profile";
import male from "../assets/images/patient-male.png";
import female from "../assets/images/girl.png";
import BG from "../assets/icons/logo2.png";
import ProfileSetting from "../components/patient_profile/patient-profile-setting";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Scrolling from "../components/scrolling-up/scrolling"
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';

const PatientProfile = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  const [currentPage, setCurrentPage] = useState('profile')

  if (!user || user.user.role === "doctor") {
    return <Navigate to={user ? '/doctorpage' : '/signin'} />;
  }

  const handleProfile = () => {
    setCurrentPage('profile')
  };

  const handleProfileSetting = () => {
    setCurrentPage('setting')
  };

  return (
    <>
      <Nav/>
      <section className="bg-hero">
        <div className="container">
          <div className="row mt-lg-5">
            <div className="col-md-6 col-lg-4">
              <div className="rounded shadow overflow-hidden sticky-bar">
                <div className="card border-0">
                  <img src={BG} className="img-fluid" />
                </div>
                <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                  <img
                    src={user.gender === 'male' ? male : female}
                    className="rounded-circle shadow-md avatar avatar-md-md"
                  />
                  <h5 className="mt-3 mb-1 h5">{user.user.first_name.charAt(0).toUpperCase() + user.user.first_name.slice(1).toLowerCase() + " "}
                  {user.user.last_name.charAt(0).toUpperCase() + user.user.last_name.slice(1).toLowerCase()}</h5>
                </div>
                <div className="list-unstyled p-4">
                  <div className="d-flex align-items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="align-text-bottom text-primary h5 mb-0 me-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <h6 className="mb-0 h6">Gender</h6>
                    <p className="text-muted mb-0 ms-2">{user.gender.charAt(0).toUpperCase() + user.gender.slice(1).toLowerCase()}</p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="align-text-bottom text-primary h5 mb-0 me-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <h6 className="mb-0 h6">Date Of Birth</h6>
                    <p className="text-muted mb-0 ms-2">{user.date_of_birth}</p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      className="align-text-bottom text-primary h5 mb-0 me-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.5 2H9l-.35.15-.65.64-.65-.64L7 2H1.5l-.5.5v10l.5.5h5.29l.86.85h.7l.86-.85h5.29l.5-.5v-10l-.5-.5zm-7 10.32l-.18-.17L7 12H2V3h4.79l.74.74-.03 8.58zM14 12H9l-.35.15-.14.13V3.7l.7-.7H14v9zM6 5H3v1h3V5zm0 4H3v1h3V9zM3 7h3v1H3V7zm10-2h-3v1h3V5zm-3 2h3v1h-3V7zm0 2h3v1h-3V9z"
                      ></path>
                    </svg>
                    <h6 className="mb-0 h6">Phone No.</h6>
                    <p className="text-muted mb-0 ms-2">{user.phone_number}</p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="align-text-bottom text-primary h5 mb-0 me-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path>
                    </svg>
                    <h6 className="mb-0 h6">Address</h6>
                    <p className="text-muted mb-0 ms-2">{user.address}</p>
                  </div>
                  
                </div>
              </div>
              
            </div>

            <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 shadow overflow-hidden">
                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0 Prof">
                  <li className="nav-item" onClick={handleProfile}>
                  <a className={`nav-link rounded-0 ${currentPage === 'profile' ? 'active' : ''}`} href="#">
                  <div className="text-center pt-1 pb-1">
                        <h5 className="title fw-normal mb-0 h5">Profile</h5>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item" onClick={handleProfileSetting}>
                  <a className={`nav-link rounded-0 ${currentPage === 'setting' ? 'active' : ''}`} href="#">
                      <div className="text-center pt-1 pb-1">
                        <h5 className="title fw-normal mb-0 h5">Profile Settings</h5>
                      </div>
                    </a>
                  </li>
                </ul>
                {
                  currentPage === 'profile' ? (<Profile />) :
                  (<ProfileSetting />)
                }
              </div>
            </div>            
          </div>
        </div>
      </section>
      <Footer/>
      <Scrolling />
    </>
  );
};

export default PatientProfile;
