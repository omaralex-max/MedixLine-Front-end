import "./patient_profile.css";
import React, { useEffect, useState } from "react";


const PatientProfile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect((e) => {
    setUser(JSON.parse(localStorage.getItem('user')))
    }, []);
  return (
    <>
          <div className="tab-content p-4">
            <div className="tab-pane fade show active">
              <div className="row">
                <div className="col-lg-6 col-12 mt-4 pwidth">
                  <h5 classNameName="h5">Appointment List</h5>
                  <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="h3 fw-normal text-primary mb-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C10.0226 20.3135 4.91699 17.563 2.86894 13.001L1 13V11L2.21045 11.0009C2.07425 10.3633 2 9.69651 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 9.68542 4.09035 10.3516 4.26658 11.0004L6.43381 11L8.5 7.55635L11.5 12.5563L12.4338 11H17V13H13.5662L11.5 16.4437L8.5 11.4437L7.56619 13L5.10789 13.0006C5.89727 14.3737 7.09304 15.6681 8.64514 16.9029C9.39001 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5Z"></path>
                    </svg>
                    <div className="flex-1 overflow-hidden ms-2">
                      <h6 className="mb-0 h6">Cardiogram</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Dr. Calvin Carlo
                      </p>
                    </div>
                    <span className="mb-0">13 March</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="h3 fw-normal text-success mb-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 3V5H6V9C6 11.2091 7.79086 13 10 13C12.2091 13 14 11.2091 14 9V5H12V3H15C15.5523 3 16 3.44772 16 4V9C16 11.9727 13.8381 14.4405 11.0008 14.9169L11 16.5C11 18.433 12.567 20 14.5 20C15.9973 20 17.275 19.0598 17.7749 17.7375C16.7283 17.27 16 16.2201 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15C22 16.3711 21.0802 17.5274 19.824 17.8854C19.2102 20.252 17.0592 22 14.5 22C11.4624 22 9 19.5376 9 16.5L9.00019 14.9171C6.16238 14.4411 4 11.9731 4 9V4C4 3.44772 4.44772 3 5 3H8ZM19 14C18.4477 14 18 14.4477 18 15C18 15.5523 18.4477 16 19 16C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"></path>
                    </svg>
                    <div className="flex-1 overflow-hidden ms-2">
                      <h6 className="mb-0 h6">Checkup</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Dr. Cristino Murphy
                      </p>
                    </div>
                    <span className="mb-0">5 May</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="h3 fw-normal text-warning mb-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.7163 1.94727L17.4506 3.38074L16.7339 5.2479L15.8003 4.88928L15.0539 6.83418C15.8328 7.29566 16.4983 7.92829 16.9986 8.68026L18.9014 7.83237L18.4947 6.91882L20.3218 6.10535L21.9487 9.75953L20.1216 10.573L19.7149 9.65946L17.8126 10.5069C17.9348 10.9842 17.9998 11.4844 17.9998 11.9998C17.9998 12.4061 17.9594 12.8029 17.8825 13.1865L19.8265 13.9325L20.1852 12.9996L22.0523 13.7163L20.6189 17.4506L18.7517 16.7339L19.1094 15.8007L17.1654 15.0539C16.7039 15.8328 16.0713 16.4983 15.3194 16.9986L16.1672 18.9014L17.0808 18.4947L17.8943 20.3218L14.2401 21.9487L13.4266 20.1216L14.3402 19.7149L13.4927 17.8126C13.0154 17.9348 12.5152 17.9998 11.9998 17.9998C11.5932 17.9998 11.196 17.9594 10.8121 17.8823L10.0662 19.827L11 20.1852L10.2833 22.0523L6.54897 20.6189L7.2657 18.7517L8.19803 19.1098L8.9457 17.1654C8.16683 16.7039 7.50133 16.0713 7.00097 15.3194L5.09818 16.1672L5.50492 17.0808L3.67782 17.8943L2.05088 14.2401L3.87797 13.4266L4.28379 14.3406L6.18702 13.4927C6.06479 13.0154 5.99981 12.5152 5.99981 11.9998C5.99981 11.5935 6.04018 11.1967 6.11714 10.8131L4.17174 10.0666L3.81443 11L1.94727 10.2833L3.38074 6.54897L5.2479 7.2657L4.88888 8.19844L6.83418 8.9457C7.29566 8.16683 7.92829 7.50133 8.68026 7.00097L7.83237 5.09818L6.91882 5.50492L6.10535 3.67782L9.75953 2.05088L10.573 3.87797L9.65946 4.28471L10.5069 6.18702C10.9842 6.06479 11.4844 5.99981 11.9998 5.99981C12.4061 5.99981 12.8029 6.04018 13.1865 6.11714L13.9321 4.17215L12.9996 3.81443L13.7163 1.94727ZM11.9998 7.99981C9.79067 7.99981 7.99981 9.79067 7.99981 11.9998C7.99981 14.2089 9.79067 15.9998 11.9998 15.9998C14.2089 15.9998 15.9998 14.2089 15.9998 11.9998C15.9998 9.79067 14.2089 7.99981 11.9998 7.99981ZM11.4998 12.8658C11.9781 13.142 12.142 13.7536 11.8658 14.2319C11.5897 14.7101 10.9781 14.874 10.4998 14.5979C10.0215 14.3217 9.85764 13.7101 10.1338 13.2319C10.4099 12.7536 11.0215 12.5897 11.4998 12.8658ZM13.9998 10.9998C14.5521 10.9998 14.9998 11.4475 14.9998 11.9998C14.9998 12.5521 14.5521 12.9998 13.9998 12.9998C13.4475 12.9998 12.9998 12.5521 12.9998 11.9998C12.9998 11.4475 13.4475 10.9998 13.9998 10.9998ZM11.8658 9.76776C12.142 10.246 11.9781 10.8576 11.4998 11.1338C11.0215 11.4099 10.4099 11.246 10.1338 10.7678C9.85764 10.2895 10.0215 9.67787 10.4998 9.40173C10.9781 9.12559 11.5897 9.28946 11.8658 9.76776Z"></path>
                    </svg>
                    <div className="flex-1 overflow-hidden ms-2">
                      <h6 className="mb-0 h6">Covid Test</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Dr. Alia Reddy
                      </p>
                    </div>
                    <span className="mb-0">19 June</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="h3 fw-normal text-secondary mb-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 2V4H20C20.5523 4 21 4.44772 21 5V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V5C3 4.44772 3.44772 4 4 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM13 11V13H15V15H12.999L13 17H11L10.999 15H9V13H11V11H13ZM15 4H9V6H15V4Z"></path>
                    </svg>
                    <div className="flex-1 overflow-hidden ms-2">
                      <h6 className="mb-0 h6">Dentist</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Dr. Toni Kovar
                      </p>
                    </div>
                    <span className="mb-0">20 June</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="h3 fw-normal text-info mb-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 11.4872 7.07719 10.9925 7.22057 10.5268C7.61175 11.3954 8.48527 12 9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.48527 11.3954 7.61175 10.5269 7.21995C10.9925 7.07719 11.4872 7 12 7Z"></path>
                    </svg>
                    <div className="flex-1 overflow-hidden ms-2">
                      <h6 className="mb-0 h6">Eye Test</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Dr. Jessica McFarlane
                      </p>
                    </div>
                    <span className="mb-0">31 Aug</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="h3 fw-normal text-danger mb-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.1962 2.26791L16.4462 7.89708C16.7223 8.37537 16.5584 8.98696 16.0801 9.2631L14.7806 10.0122L15.7811 11.7452L14.049 12.7452L13.0485 11.0122L11.75 11.7631C11.2717 12.0392 10.6601 11.8754 10.384 11.3971L8.5462 8.2146C6.49383 8.8373 5 10.7442 5 13C5 13.6253 5.1148 14.2238 5.32447 14.7756C6.0992 14.284 7.01643 14 8 14C9.68408 14 11.1737 14.8326 12.0797 16.1086L19.7681 11.6704L20.7681 13.4024L12.8898 17.9509C12.962 18.2892 13 18.6401 13 19C13 19.3427 12.9655 19.6773 12.8999 20.0006L21 20V22L4.00054 22.0012C3.3723 21.1653 3 20.1261 3 19C3 17.9927 3.29782 17.0551 3.81021 16.2702C3.29276 15.2948 3 14.1816 3 13C3 10.0047 4.88131 7.44875 7.52677 6.44942L7.13397 5.76791C6.58169 4.81133 6.90944 3.58815 7.86603 3.03586L10.4641 1.53586C11.4207 0.983577 12.6439 1.31133 13.1962 2.26791ZM8 16C6.34315 16 5 17.3431 5 19C5 19.3506 5.06014 19.6871 5.17067 19.9999H10.8293C10.9399 19.6871 11 19.3506 11 19C11 17.3431 9.65685 16 8 16ZM11.4641 3.26791L8.86602 4.76791L11.616 9.53105L14.2141 8.03105L11.4641 3.26791Z"></path>
                    </svg>
                    <div className="flex-1 overflow-hidden ms-2">
                      <h6 className="mb-0 h6">Orthopedic</h6>
                      <p className="text-muted mb-0 text-truncate small">
                        Dr. Elsie Sherman
                      </p>
                    </div>
                    <span className="mb-0">1 Sep</span>
                  </div>
                </div>
              </div>
              {/* temporary */}
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
