import React from "react";
import ReviewCard from "../doctor-profile/ReviewCard";
import person from "../../assets/images/person.jpeg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpg";
import person4 from "../../assets/images/person4.jpeg";
import "./ReviewList.css";

const reviews = [
  {
    name: "Thomas Israel",
    role: "C.E.O",
    image: person,
    comment: "It seems that only melodies in order...",
    stars: 5,
  },
  {
    name: "Carl Oliver",
    role: "P.A",
    image: person2,
    comment: "The advantage of its writing melodies...",
    stars: 4,
  },
  {
    name: "Barbara McIntosh",
    role: "M.D",
    image: person3,
    comment: "There is now an order to have a ready-made...",
    stars: 4,
  },
  {
    name: "John Doe",
    role: "M.D",
    image: person4,
    comment: "An excellent service with timely responses.",
    stars: 4,
  },
  {
    name: "Sarah Connor",
    role: "C.E.O",
    image: person,
    comment: "It seems that only melodies in order...",
    stars: 5,
  },
  {
    name: "Emily Johnson",
    role: "P.A",
    image: "https://example.com/image2.jpg",
    comment: "The advantage of its writing melodies...",
    stars: 4,
  },
];

const ReviewList = () => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          role={review.role}
          image={review.image}
          comment={review.comment}
          stars={review.stars}
        />
      ))}
    </div>
  );
};

export default ReviewList;
