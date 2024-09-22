import React from "react";
import "./sign.css";

const PatientForm = ({ onSwitchForm }) => {
  return (
    <div className="wrapper">
      <div className="title">Sign Up (Patient)</div>
      <button onClick={() => onSwitchForm("doctor")} className="switch">
        Switch to Doctor
      </button>
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
          <textarea className="textarea" defaultValue={""} />
        </div>
        <div className="inputfield terms">
          <label className="check">
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <p>Agreed to terms and conditions</p>
        </div>
        <div className="inputfield">
          <input type="submit" defaultValue="Register" className="btn" />
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
