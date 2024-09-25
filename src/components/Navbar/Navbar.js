import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo1.png";
import profile from "../../assets/images/profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [doctorsDropdown, setDoctorsDropdown] = useState(false);
  const [patientsDropdown, setPatientsDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (dropdownSetter) => {
    dropdownSetter(true);
  };

  const handleMouseLeave = (dropdownSetter) => {
    dropdownSetter(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span className="navbar-title">Doctris</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(setHomeDropdown)}
            onMouseLeave={() => handleMouseLeave(setHomeDropdown)}
          >
            <a href="/" className="nav-links">
              HOME{" "}
              <i
                className={
                  homeDropdown ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
            </a>
            {homeDropdown && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Profile</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Settings</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Notifications</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Activity</a>
                </li>
              </ul>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(setDoctorsDropdown)}
            onMouseLeave={() => handleMouseLeave(setDoctorsDropdown)}
          >
            <a href="/" className="nav-links">
              DOCTORS{" "}
              <i
                className={
                  doctorsDropdown ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
            </a>
            {doctorsDropdown && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/">Doctor List</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Schedules</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Appointments</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Messages</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Reports</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Billing</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Settings</a>
                </li>
              </ul>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(setPatientsDropdown)}
            onMouseLeave={() => handleMouseLeave(setPatientsDropdown)}
          >
            <a href="/" className="nav-links">
              PATIENTS{" "}
              <i
                className={
                  patientsDropdown ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
            </a>
            {patientsDropdown && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/">Patient List</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Medical Records</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Appointments</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Prescriptions</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Invoices</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Insurance</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Lab Results</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Messages</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Settings</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Feedback</a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="nav-icons">
          <span className="settings-icon">
            <i className="fas fa-cog"></i>
          </span>
          <img src={profile} alt="Profile" className="profile-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
