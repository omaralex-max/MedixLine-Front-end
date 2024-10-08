import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ name, role, comment, stars }) => {
  return (
    <div className="card review-card mb-4 shadow-sm">
      <div className="card-body">
        <div className="review-info">
          <h5 className="card-title review-name">{name}</h5>
          <span className="card-subtitle mb-2 text-muted review-role">{role}</span>
        </div>
        {comment && <p className="card-text review-comment">{comment}</p>}
        <div className="stars">
          {Array.from({ length: stars }, (_, index) => (
            <span key={index} className="star">★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
