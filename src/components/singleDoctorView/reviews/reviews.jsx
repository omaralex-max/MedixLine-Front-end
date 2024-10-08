import React, { useState, useEffect } from "react";
import "./reviews.css";
import { Rating } from "@mui/material";
import axios from "axios";

export default function Reviews({ doctor }) {
    const [value, setValue] = useState(0);
    const [existingRatingId, setExistingRatingId] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/doctor/ratings/`, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                    
                
                });
                if (response.data.length > 0) {
                    const rating = response.data.find(r => r.doctor === doctor.id && r.patient === user.id);
                    setValue(rating.value); 
                    setExistingRatingId(rating.id); 
                    console.log(rating)
                } else {
                    setValue(0);
                    setExistingRatingId(null);
                }
                
            } catch (error) {
                console.error("Error fetching rating:", error);
            }
        };

        if (doctor) { 
            fetchRating();
        }
    }, [doctor]); 

    const handleRatingChange = (newValue) => {
        setValue(newValue);
    };

    const submitRating = async (e) => {
        e.preventDefault();
        if (!(localStorage.getItem('token'))) {
            alert("Please login to rate a doctor");
            return;
        }
        try {
            const url = existingRatingId 
                ? `http://127.0.0.1:8000/api/doctor/ratings/${existingRatingId}/` 
                : 'http://127.0.0.1:8000/api/doctor/ratings/';
            const method = existingRatingId ? 'put' : 'post';

            const response = await axios({
                method,
                url,
                data: {
                    patient: user.id,
                    doctor: doctor.id,
                    value: value,
                },
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            });

            console.log("Rating submitted:", response.data);
            alert("Rating submitted successfully!");
        
        } catch (error) {
            console.error("Error submitting rating:", error);
            alert("Failed to submit rating. Please try again.");
        }
    };

    return (
        <div className="reviews-container container mt-4">
        <h3 className="mb-3">Rate Now</h3>
        <div className="mb-3">
            <Rating
                value={value}
                onChange={(event, newValue) => handleRatingChange(newValue)}
                style={{ color: 'rgb(57, 73, 121)' }}
            />
        </div>
        <button className="btn btn-primary ratingButton" onClick={submitRating}>
            Submit Rating
        </button>
    </div>
    
    );
}
