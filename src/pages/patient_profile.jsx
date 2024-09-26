import Profile from "../components/patient_profile/patient-profile";
import Pfp from "../assets/images/FB_IMG_1596651719832.jpg";
import BG from "../assets/images/bg-profile.2859920b4c41966e4d91.jpg";
import ProfileSetting from "../components/patient_profile/patient-profile-setting";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

const PatientProfile = () => {
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
                    src={Pfp}
                    className="rounded-circle shadow-md avatar avatar-md-md"
                  />
                  <h5 className="mt-3 mb-1 h5">Christopher Burrell</h5>
                  <p className="text-muted mb-0">25 Years old</p>
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
                    <p className="text-muted mb-0 ms-2">Female</p>
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
                    <h6 className="mb-0 h6">Birthday</h6>
                    <p className="text-muted mb-0 ms-2">13th Sep 1993</p>
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
                    <p className="text-muted mb-0 ms-2">+(125) 458-8547</p>
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
                    <p className="text-muted mb-0 ms-2">Sydney, Australia</p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="align-text-bottom text-primary h5 mb-0 me-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M118.2 55l-2.5 5.02C108.9 73.86 99.93 79 91.97 79c-7.96 0-16.99-5.17-23.92-19.03l-16.1 8.06C61.02 86.17 75.99 97 91.97 97c14.43 0 27.93-8.91 37.03-24h82v419h18V73h81.8c7.3 11.92 17.2 19.95 28.2 22.82V119h18V95.84c12.5-3.24 23.7-13.13 31.1-27.81l-16.2-8.06C365 73.83 356 79 348 79c-8 0-17-5.17-23.9-19.03L321.6 55zm171.1 82c-1.3 3-3.9 9.6-5.4 19.8-1.9 12.9-2.9 29.5-2.9 47.2 0 33.5 3.8 70.9 10.5 93.5 14 6 35.3 9.5 56.5 9.5 21.2 0 42.5-3.5 56.5-9.5 6.7-22.6 10.5-60 10.5-93.5 0-17.7-1-34.3-2.9-47.2-1.5-10.2-4.1-16.8-5.4-19.8zm5.3 77c35.3 7.2 70.6 10.5 105.9 0-.5 24-2.4 45-10.2 69.6-28.9 3-56.5 11.4-89.9-3.9zm91.1 107.7c-5.8 1.1-11.8 1.9-17.9 2.4.7 3.1 1.5 6.6 2.3 10.6 2.4 11.4 4.4 25.3 3.9 32.7v.1c-.4 6.3-3 13.3-6.2 21.1-3.2 7.8-6.9 16.5-7.7 26.7-1.2 14.7 1.4 34.1 4.1 50.4 2.7 16.3 5.6 29.4 5.6 29.4l17.6-4s-2.9-12.6-5.5-28.3c-2.5-15.8-4.7-35-3.8-46.1.5-6.4 3.2-13.4 6.4-21.3s6.9-16.6 7.5-26.8c.7-11.5-1.8-25.6-4.2-37.5-.7-3.4-1.5-6.6-2.1-9.4zm-74.7.1v24.5h18v-22.1c-6.1-.5-12.2-1.3-18-2.4z"></path>
                    </svg>
                    <h6 className="mb-0 h6">Blood Group</h6>
                    <p className="text-muted mb-0 ms-2">B +</p>
                  </div>
                </div>
              </div>
            </div>
            <Profile />
            {/* <ProfileSetting /> */}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PatientProfile;
