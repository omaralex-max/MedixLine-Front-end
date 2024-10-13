import React from 'react';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import "./overView.css"
const OverViewAppt = ({doctor}) => {

  // const [doctor, setDoctor] = useState({
  //   name: "Dr. Christopher Burrell",
  //   specialty: "Family Medicine",
  //   description: "An experienced family doctor dedicated to providing comprehensive care for patients of all ages.",
  //   contact: {
  //     phone: "+1 (555) 012-3456",
  //     email: "dr.christopher@hospital.com",
  //     location: "123 Health St, Wellness City, USA"
  //   }
  // });
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow border-0 rounded">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Dr. {doctor.user.first_name}</h2>
              <h5 className="text-primary text-center mb-3">{doctor.specialization.title}</h5>
              <p className="text-muted text-center mb-4">{doctor.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card shadow border-0 rounded">
            <div className="card-body">
              <ul className="list-unstyled">
                <li><strong>Phone:</strong> {doctor.phone_number}</li>
                <li><strong>Email:</strong> <a href={`mailto:${doctor.user.email}`}>{doctor.user.email}</a></li>
                <li><strong>Location:</strong> {doctor.address}</li>
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
    </div>
  );
};

export default OverViewAppt;