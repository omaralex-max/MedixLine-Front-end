import React from "react";
import "./header.css"
import TestPhoto from "../../home_page/static/images/icon.png"
import DoctorPng from "../static/doctor.jpeg"
export default function HeaderDocPat(){
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = month + "/" + date + "/" + year;
    return(
        <>
    
    <div className="container-fluid headContainerDocPat">
            <div className="row align-items-center">
                <div className="col-md-4 col-12 text-center d-flex justify-content-center">
                    <img src={DoctorPng} className="img-fluid docPatImage" alt="Doctor" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center justify-content-md-start">
                    <div className="text-center text-md-start">
                        <p className="text-secondary d-none d-md-block">Today's Date: {currentDate}</p>
                        <h1 className="doctorNamePat text-primary">Dr. Christopher Burrell</h1>
                        <p className="fw-3 fs-3">Total Ratings: 2345 ★</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}