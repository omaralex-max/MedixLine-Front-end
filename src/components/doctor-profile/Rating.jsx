import React from "react";
import "./Rating.css";

const Rating = () => {
  return (
    <div className="rating-container">
      <div className="rating-header">
        <h1 className="rating-number">4.9</h1>
        <span className="rating-meta">Avg.Ratings..</span>
      </div>

      <div className="rating-bars">
        <div className="rating-bar">
          <div className="rating-labels">
            <p>Very satisfied</p>
            <span>5 Star</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="rating-bar">
          <div className="rating-labels">
            <p>Satisfied</p>
            <span>4 Star</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "60%" }}></div>
          </div>
        </div>
        <div className="rating-bar">
          <div className="rating-labels">
            <p>Neutral</p>
            <span>3 Star</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "30%" }}></div>
          </div>
        </div>
        <div className="rating-bar">
          <div className="rating-labels">
            <p>Dissatisfied</p>
            <span>2 Star</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "10%" }}></div>
          </div>
        </div>
        <div className="rating-bar">
          <div className="rating-labels">
            <p>Very Dissatisfied</p>
            <span>1 Star</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "5%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
