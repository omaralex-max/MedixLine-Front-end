import React, { useState,useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo1.png";
import profile from "../../assets/images/profile.jpg";
import axios from 'axios';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [doctorsDropdown, setDoctorsDropdown] = useState(false);
  const [patientsDropdown, setPatientsDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const handelLogout = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/auth/logout/', {}, {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        console.log(response)
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (dropdownSetter) => {
    
    dropdownSetter(true);
  };

  const handleMouseLeave = (dropdownSetter) => {
          dropdownSetter(false);
    
  };

  useEffect(() => {
    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-links');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navLinks.forEach(link => link.classList.add('scrolledLinks'));
        } else {
            navbar.classList.remove('scrolled');
            navLinks.forEach(link => link.classList.remove('scrolledLinks'));

        }
    };
    window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [specializations, setspecializations] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/doctor/specializations/")
        .then(response => {
          setspecializations(response.data)
          })
          .catch(error => {
            console.error(error);
            });
      }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span className="navbar-title d-none">Doctris</span>
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
              </a>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(setDoctorsDropdown)}
            onMouseLeave={() => handleMouseLeave(setDoctorsDropdown)}
          >
            <a href="#aboutId" className="nav-links">
              DEPARTMENTS{" "}
            </a>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(setPatientsDropdown)}
            onMouseLeave={() => handleMouseLeave(setPatientsDropdown)}
          >
            <a href="#searchContainerId" className="nav-links">
              ABOUT{" "}
             
            </a>
           
          </li>

         
            {user === null ?  
            (
              <>
               <li className="nav-item">
              <a href="/signin" className="nav-links signInButtonNav">SIGN IN</a>
              </li>
              
              </>
              
            )
            :
            (
            <>
            <li className="nav-item">
              <a href="/signup" className="nav-links signInButtonNav" onClick={handelLogout}>LOG OUT</a>
            </li>
            

            </>

            )
            }

        </ul>

        <div className="nav-icons">
          <span className="settings-icon d-none">
            <i className="fas fa-cog"></i>
          </span>
          <img src={profile} alt="Profile" className="profile-icon" />
          {user === null ?  
            (
              <>
              
              
              </>
              
            )
            :
            (
            <>
            <li className="nav-item">
              <h1 className="nav-links mb-4 welcomeUser"> Welcome {user.user.first_name}</h1>
            </li>

            </>

            )
            }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
