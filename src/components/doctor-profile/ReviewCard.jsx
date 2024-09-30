import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ name, role, image, comment, stars }) => {
  return (
    <div className="review-card">
      <img src={image} alt={name} className="review-image" />
      <div className="review-info">
        <h5 className="review-name">{name}</h5>
        <span className="review-role">{role}</span>
      </div>
      <p className="review-comment">{comment}</p>
      <div className="stars">
        {Array.from({ length: stars }, (_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
