import React from "react";
import Rating from "../doctor-profile/Rating";
import ReviewList from "../doctor-profile/ReviewList";
import "./DoctorReviews.css";

const DoctorReviews = () => {
  return (
    <div className="Doctor-review-wrapper">
      <h2 className="main-title">Patients Review</h2>
      <div className="Doctor-review-container">
        <div className="rating-section">
          <Rating />
        </div>

        <div className="review-section">
          <ReviewList />
        </div>
      </div>
    </div>
  );
};

export default DoctorReviews;
