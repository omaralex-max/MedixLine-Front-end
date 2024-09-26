import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Signin = () => {

  const [formData, setFormData] = useState({

    username: "",
    password: "",

  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();



    const payload = {

        username: formData.username,
        password: formData.password,
    }
      


    fetch("http://localhost:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setSuccessMessage("Patient registered successfully!");
          setErrorMessage("");
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          if (data.user.user.role === "doctor") {
            navigate('/doctorpage/');  
          } else if (data.user.user.role === "patient") {
            navigate('/');
          }

        } else {
          setErrorMessage("Error: " + JSON.stringify(data));
        }
      })
      .catch((error) => {
        setErrorMessage("Error: " + error.message);
      });
  };


  return (
    <div className="wrapper push">

      <div className="title">Sign In</div>

        <form className="form" onSubmit={handleSubmit}>   

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

          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <span>Remember me</span>
            <a href="#" className="forgot">Forgot password ?</a>
          </div>

          <div className="inputfield">
            <input type="submit" value="Sign In" className="btn" />
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
            <label>Don't have an account ?</label>{" "}
            <Link to="/signup" className="signin">
              Sign up
            </Link>
          </div>

          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </form>
    </div>
  );
}

export default Signin;
