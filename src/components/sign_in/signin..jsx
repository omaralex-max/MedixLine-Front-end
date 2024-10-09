import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Signin = () => {

  const [formData, setFormData] = useState({

    username: "",
    password: "",

  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


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
  
    const payload = {
      username: formData.username,
      password: formData.password,
    };
  
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
          setSuccessMessage("Logged in successfully!");
          setErrorMessage("");
          localStorage.setItem('token', data.token);
          localStorage.setItem('patient_id', data.user.id);
          // console.log(data)
  
          axios
            .get('http://127.0.0.1:8000/api/auth/detail/', {
              headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
              },
            })
            .then((response) => {
              localStorage.setItem('user', JSON.stringify(response.data));
  
              // Navigate based on user role
              if (response.data.user.role === "doctor") {
                navigate('/doctorpage/');
              } else if (response.data.user.role === "patient") {
                navigate('/');
              }
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };


  return (
    <div className="signhoder">
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
              <label className="bolding">Don't have an account ?</label>{" "}
              <Link to="/signup" className="signin">
                Sign up
              </Link>
            </div>
      
            {successMessage && <p>{successMessage}</p>}
          </form>
      </div>
    </div>
  );
}

export default Signin;
