import React from 'react';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import "./overView.css"
const OverViewAppt = () => {

  const [doctor, setDoctor] = useState({
    name: "Dr. Christopher Burrell",
    specialty: "Family Medicine",
    description: "An experienced family doctor dedicated to providing comprehensive care for patients of all ages.",
    contact: {
      phone: "+1 (555) 012-3456",
      email: "dr.christopher@hospital.com",
      location: "123 Health St, Wellness City, USA"
    }
  });
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow border-0 rounded">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Dr. {user.user.first_name}</h2>
              <h5 className="text-primary text-center mb-3">{doctor.specialty}</h5>
              <p className="text-muted text-center mb-4">{doctor.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card shadow border-0 rounded">
            <div className="card-body">
              <h6 className="mb-3">Contact Information</h6>
              <ul className="list-unstyled">
                <li><strong>Phone:</strong> {user.user.phone_number}</li>
                <li><strong>Email:</strong> <a href={`mailto:${doctor.contact.email}`}>{user.user.email}</a></li>
                <li><strong>Location:</strong> {doctor.contact.location}</li>
              </ul>
              <hr />
              <h6 className="mb-3">Social Media</h6>
              <div className="d-flex justify-content-around">
                <a href="#" className="btn btn-facebook btn-lg">
                  <FaFacebook size={40} />
                </a>
                <a href="#" className="btn btn-google btn-lg">
                  <AiFillGoogleCircle size={40} />
                </a>
                <a href="#" className="btn btn-instagram btn-lg">
                  <BiLogoInstagramAlt size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card shadow border-0 rounded">
            <div className="card-body">
              <h6 className="mb-3">About the Doctor</h6>
              <p className="text-muted">{doctor.description}</p>
              <hr />
              <h6 className="mb-3">Education and Training</h6>
              <ul className="list-unstyled">
                <li><strong>Medical School:</strong> XYZ University</li>
                <li><strong>Residency:</strong> ABC Hospital</li>
                <li><strong>Fellowship:</strong> DEF University</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverViewAppt;