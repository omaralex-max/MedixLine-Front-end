import React, { useEffect, useState } from "react";
import "./sign.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const DocForm = ({ activeForm, onSwitchForm }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    date_of_birth: "",
    password: "",
    confirmPassword: "",
    gender: "",
    email: "",
    phone_number: "",
    address: "",
    specialization: null,
    national_id: null,
    syndicate_id: null,
    profile_picture: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0], 
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    let payload = new FormData()

    payload.append("user.username", formData.username);
    payload.append("user.password", formData.password);
    payload.append("user.email", formData.email);
    payload.append("user.first_name", formData.first_name);
    payload.append("user.last_name", formData.last_name);
    payload.append("user.role", 'doctor');

    payload.append("date_of_birth", formData.date_of_birth);
    payload.append("gender", formData.gender);
    payload.append("phone_number", formData.phone_number);
    payload.append("address", formData.address);
    payload.append("specialization", formData.specialization);

    console.log(formData)

    if (formData.national_id) {
      payload.append("national_id", formData.national_id);
    }
    if (formData.syndicate_id) {
      payload.append("syndicate_id", formData.syndicate_id);
    }
    if (formData.profile_picture) {
      payload.append("profile_picture", formData.profile_picture);
    }
    
    fetch("http://localhost:8000/api/doctor/register/", {
      method: "POST",
      body: payload
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          alert("Registered successfully!, Please check your email inbox to activate your account");
          setErrorMessage("");
        } else {
          if (data.user) {
            setErrorMessage(extractFirstErrorMessage(data.user))
          }
          else {
            setErrorMessage(extractFirstErrorMessage(data));
          }
        }
      })
      .catch((error) => {
        setErrorMessage("Error: " + error.message);
      });
  };

  const extractFirstErrorMessage = (errorData) => {
    for (let field in errorData) {
      if (errorData[field] && errorData[field].length > 0) {
        
        return errorData[field][0];
      }
    }
   
    return "An unknown error occurred.";
  };


  return (
    <div className="signuphoder">
      <div className="wrapper">
        <div className="title">Sign Up</div>
        <button
          onClick={() => onSwitchForm("patient")}
          className={`switch ${activeForm === "patient" ? "active" : ""}`}
        >
          Patient
        </button>
        <button
          onClick={() => onSwitchForm("doctor")}
          className={`switch ${activeForm === "doctor" ? "active" : ""}`}
        >
          Doctor
        </button>
        {activeForm === "doctor" && (
          <form className="form" onSubmit={handleSubmit}>
      
            <div className="inputfield">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                className="input"
                value={formData.first_name}
                required
                onChange={handleChange}
              />
            </div>
      
            <div className="inputfield">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                className="input"
                value={formData.last_name}
                required
                onChange={handleChange}
              />
            </div>
      
            <div className="inputfield">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
      
            <div className="inputfield">
              <label>Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
      
            <div className="inputfield">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
      
            <div className="inputfield">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
      
            <div className="inputfield">
              <label>Gender</label>
              <div className="custom_select">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
      
            <div className="inputfield">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
      
            <div className="inputfield">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
      
            <div className="inputfield">
              <label>Specialization</label>
              <div className="custom_select">
                <select
                  name="specialization"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {
                    specializations.map(specialization => (
                      <option key={specialization.title} value={specialization.id}>
                        {specialization.title}</option>
                    ))
                  }
                </select>
              </div>
            </div>
      
            <div className="inputfield">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
      
            <div className="inputfield">
              <label>Personal Image</label>
              <input
                type="file"
                name="profile_picture"
                className="img-btn"
                required
                onChange={handleChange}
              />
            </div>
      
            <div className="inputfield">
              <label>National ID</label>
              <input
                type="file"
                name="national_id"
                className="img-btn"
                required
                onChange={handleChange}
              />
            </div>
      
            <div className="inputfield">
              <label>Syndicate ID</label>
              <input
                type="file"
                name="syndicate_id"
                className="img-btn"
                required
                onChange={handleChange}
              />
            </div>
      
            <div className="inputfield terms">
              <label className="check">
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <span>Agreed to terms and conditions</span>
            </div>
      
            <div className="inputfield">
              <input type="submit" value="Register" className="btn" />
            </div>

            {errorMessage && <p className="text-danger fw-bold">{errorMessage}</p>}

      
            <div className="or">
              <p>Or</p>
            </div>
      
            <div className="out-social">
              <a href="#">
                <button className="social fac">Facebook</button>
              </a>
              <a href="#">
                <button className="social goo">Google</button>
              </a>
            </div>
      
            <div>
              <label className="bolding">Already have an account ?</label>{" "}
              <Link to="/signin" className="signin">
                Sign in
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DocForm;
