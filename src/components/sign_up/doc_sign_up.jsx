import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";

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
    specialization: "",
    national_id: null,
    syndicate_id: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    const payload = {
      user: {
        username: formData.username,
        password: formData.password,
        role: 'patient'
      },
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      date_of_birth: formData.date_of_birth,
      gender: formData.gender,
      phone_number: formData.phone_number,
      address: formData.address,
      specialization: formData.specialization,
      national_id: formData.national_id,
      syndicate_id: formData.syndicate_id,
    };

    if (formData.national_id && formData.national_id !== 'null') {
      payload.append("national_id", formData.national_id);
    }
    if (formData.syndicate_id && formData.syndicate_id !== 'null') {
      payload.append("syndicate_id", formData.syndicate_id);
    }
    
    fetch("http://localhost:8000/api/doctor/register/", {
      method: "POST",
      body: JSON.stringify(payload),  //wrong
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setSuccessMessage("Doctor registered successfully!");
          setErrorMessage("");
        } else {
          setErrorMessage("Error: " + JSON.stringify(data));
        }
      })
      .catch((error) => {
        setErrorMessage("Error: " + error.message);
      });
  };

  return (
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
            <input
              type="text"
              name="specialization"
              className="input"
              value={formData.specialization}
              onChange={handleChange}
            />
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
            <label>National ID</label>
            <input
              type="file"
              name="national_id"
              className="img-btn"
              value={formData.national_id}
              onChange={handleChange}
            />
          </div>

          <div className="inputfield">
            <label>Syndicate ID</label>
            <input
              type="file"
              name="syndicate_id"
              className="img-btn"
              value={formData.syndicate_id}
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
            <label>Already have an account ?</label>{" "}
            <Link to="/signin" className="signin">
              Sign in
            </Link>
          </div>
          
        </form>
      )}
    </div>
  );
};

export default DocForm;
