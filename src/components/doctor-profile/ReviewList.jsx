import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../doctor-profile/ReviewCard";
import "./ReviewList.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const [patientsResponse, ratingsResponse, commentsResponse] = await Promise.all([
        axios.get("http://127.0.0.1:8000/api/patient/", {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` },
        }),
        axios.get("http://127.0.0.1:8000/api/doctor/ratings/"),
        axios.get("http://127.0.0.1:8000/api/doctor/comments/"),
      ]);

      const patients = patientsResponse.data;
      const ratings = ratingsResponse.data;
      const comments = commentsResponse.data;

      const combinedReviews = ratings.map((rating) => {
        const comment = comments.find(
          (c) => c.doctor === rating.doctor && c.patient === rating.patient
        );

        const patient = patients.find((p) => p.id === rating.patient);

        return {
          name: patient.user.first_name,  
          image: patient.profile_picture || "default_image_url", 
          comment: comment ? comment.content : "No comment available.",
          stars: rating.value,
        };
      });

      setReviews(combinedReviews);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching reviews: {error}</p>;

  return (
   <div className="container-fluid">
      <div className="row">
        {reviews.map((review, index) => (
          <div className=" " key={index}>
            <ReviewCard
              name={review.name}
              role={review.role}
              comment={review.comment}
              stars={review.stars}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
