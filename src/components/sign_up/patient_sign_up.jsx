import React, { useEffect, useState } from "react";
import "./sign.css";
import { Link, useNavigate } from "react-router-dom";

const PatientForm = ({ activeForm, onSwitchForm }) => {

  const navigate = useNavigate();

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

  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/");
      }
  }, [navigate])
  
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
        console.log(data)
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
          {errorMessage && <p className="text-danger fw-bold">{errorMessage}</p>}
          <div>
              <label className="bolding"  >Already have an account ?</label>{" "}
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

export default PatientForm;
