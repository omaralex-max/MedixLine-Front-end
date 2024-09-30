import OneCard from "./one-card";
import "./card.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


const CardHolder = () => {
  const [doctors, setDoctors] = useState([]);
  const location = useLocation();
  const { id: specializationId } = location.state;
  const { title: specializationName } = location.state;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/doctor/") 
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the doctors' data", error);
      });
  }, []);
  return (
    <>
      <div className="root">
        <section className="card-bg-half-150 bg-light d-table w-100">
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-12">
                <div className="section-title text-center">
                  <h1 className="sub-title mb-4 Dbold">{specializationName}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              {doctors
                  .filter((doctor) => doctor.specialization === specializationId)
                  .map((doctor) => (
                    <OneCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardHolder;
