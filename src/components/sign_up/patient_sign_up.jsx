import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";

const PatientForm = ({ activeForm, onSwitchForm }) => {


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
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }


    const payload = {
      user: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        password: formData.password,
        email: formData.email,
        role: 'patient'
      },
      
      date_of_birth: formData.date_of_birth,
      gender: formData.gender,
      phone_number: formData.phone_number,
      address: formData.address,
    };

    console.log("Payload: ", payload);

    fetch("http://localhost:8000/api/patient/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setSuccessMessage("Patient registered successfully!");
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
      {activeForm === "patient" && (
        <form className="form" onSubmit={handleSubmit}>

        <div className="inputfield">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="inputfield">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="input"
            required
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

        <div className="inputfield terms">
          <label className="check">
            <input type="checkbox" required />
            <span className="checkmark" />
          </label>
          <span>Agreed to terms and conditions</span>
        </div>

        <div className="inputfield">
          <input type="submit" value="Register" className="btn" />
        </div>
        <div>
            <label>Already have an account ?</label>{" "}
            <Link to="/signin" className="signin">
              Sign in
            </Link>
          </div>
        
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      )}
    </div>
  );
};

export default PatientForm;
