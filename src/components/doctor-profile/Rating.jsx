import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Rating.css";

const Rating = () => {
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCounts, setRatingCounts] = useState([0, 0, 0, 0, 0]); 
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRatings = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/doctor/ratings/", {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      });

      const ratings = response.data;

      const counts = Array(5).fill(0);
      let totalValue = 0;

      ratings.forEach((rating) => {
        counts[rating.value - 1]++; 
        totalValue += rating.value;
      });

      setTotalRatings(ratings.length); 
      if (ratings.length > 0) {
        setAverageRating((totalValue / ratings.length).toFixed(1));
      }

      setRatingCounts(counts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching ratings: {error}</p>;

  return (
    <div className="rating-container">
      <div className="rating-header">
        <h1 className="rating-number">{averageRating}</h1>
        <span className="rating-meta">Avg. Ratings</span>
      </div>

      <div className="rating-bars">
        {ratingCounts.map((count, index) => {
          const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;

          return (
            <div className="rating-bar" key={index}>
              <div className="rating-labels">
                <p>{index === 0 ? "Very Dissatisfied" : index === 1 ? "Dissatisfied" : index === 2 ? "Neutral" : index === 3 ? "Satisfied" : "Very Satisfied"}</p>
                <span>{index + 1} Star</span>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
