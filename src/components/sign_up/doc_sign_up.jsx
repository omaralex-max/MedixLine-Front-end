import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";

const DocForm = ({ activeForm, onSwitchForm }) => {
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
        <div className="form">
          <div className="inputfield">
            <label>First Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Last Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Date of Birth</label>
            <input type="date" className="input" />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input type="password" className="input" />
          </div>
          <div className="inputfield">
            <label>Confirm Password</label>
            <input type="password" className="input" />
          </div>
          <div className="inputfield">
            <label>Gender</label>
            <div className="custom_select">
              <select>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label>Email Address</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Phone Number</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Specialization</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Address</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>National ID</label>
            <input type="file" className="img-btn" />
          </div>
          <div className="inputfield">
            <label>Syndicate ID</label>
            <input type="file" accept="image/*" className="img-btn" />
          </div>
          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <span>Agreed to terms and conditions</span>
          </div>
          <div className="inputfield">
            <input type="submit" defaultValue="Register" className="btn" />
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
            <Link to="#" className="signin">
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocForm;
