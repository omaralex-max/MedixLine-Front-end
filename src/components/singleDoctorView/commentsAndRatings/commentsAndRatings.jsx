import React, { useEffect, useState } from "react";
import axios from "axios";
import "./commentsAndRatings.css";

export default function CommentsAndRatingsList({ doctor, patientsData }) {
    const [allRatings, setAllRatings] = useState([]);
    const [allComments, setAllComments] = useState([]);

    const getPatientNameById = (patientId) => {
        const patient = patientsData.find(p => p.id === patientId);
        return patient ? `${patient.user.first_name} ${patient.user.last_name}` : "Anonymous";
        
    };
    useEffect(() => {
        const fetchRatingAndComments = async () => {
            try {
                const [ratingsResponse, commentsResponse] = await Promise.all([
                    axios.get(`http://127.0.0.1:8000/api/doctor/ratings/`),
                    axios.get(`http://127.0.0.1:8000/api/doctor/comments/`)
                ]);

                if (ratingsResponse.data.length > 0) {
                    const doctorRatings = ratingsResponse.data.filter(r => r.doctor === doctor.id);
                    
                    const ratings = doctorRatings.map((rating) => ({
                        patientName: getPatientNameById(rating.patient),
                        rating: rating.value,
                        patientId: rating.patient, 
                    }));
                    
                    setAllRatings(ratings); 
                }

                if (commentsResponse.data.length > 0) {
                    const doctorComments = commentsResponse.data.filter(c => c.doctor === doctor.id);
                    
                    const comments = doctorComments.map((comment) => ({
                        comment: comment.content,
                        date: new Date(comment.created_at).toLocaleString(),
                        patientId: comment.patient,
                    }));

                    setAllComments(comments); 
                }

            } catch (error) {
                console.error("Error fetching ratings or comments:", error);
            }
        };

        if (doctor) { 
            fetchRatingAndComments();
        }
    }, [doctor, patientsData]); 

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(
                <span key={i} className={i <= rating ? "star filled" : "star"}>
                    ★
                </span>
            );
        }
        return <span className="stars">{stars}</span>;
    };

    return (
        <div className="comments-and-ratings mt-5 ">
        <h3>Ratings</h3>
        {allRatings.length === 0 ? (
            <p>No ratings yet.</p>
        ): (
            <ul className="list-group">
            {allRatings.map((rating, index) => (
                <li key={index} className="list-group-item">
                    <div className="rating-header">
                        <strong>{rating.patientName}</strong>: {renderStars(rating.rating)}
                    </div>
                    <div className="comments-for-rating">
                        {allComments
                            .filter(comment => comment.patientId === rating.patientId)
                            .map((comment, commentIndex) => (
                                <div key={commentIndex} className="comment-item">
                                   {comment.date}: {comment.comment}
                                </div>
                            ))}
                    </div>
                </li>
            ))}
        </ul>

        )}
    </div>
    );
}
