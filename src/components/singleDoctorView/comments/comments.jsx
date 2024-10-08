import React, { useState, useEffect } from "react";
import axios from "axios";
import "./comments.css"

export default function CommentComponent({ doctor }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [newComment, setNewComment] = useState("");
    const [hasCommented, setHasCommented] = useState(false);

    useEffect(() => {
        const checkExistingComment = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/doctor/comments/`, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                });

                const userComment = response.data.find(c => c.doctor === doctor.id && c.patient === user.id);
                if (userComment) {
                    setHasCommented(true);
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        if (doctor) {
            checkExistingComment();
        }
    }, [doctor]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert("Please login to comment");
            return;
        }
        if (!newComment) return;
        if (hasCommented) {
            alert("You have already commented on this doctor.");
            return;
        }

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/doctor/comments/`, {
                doctor: doctor.id,
                patient: user.id,
                content: newComment
            }, {
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            });

            setNewComment("");
            alert("Comment submitted successfully!");
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    return (
        <div className="comment-container container mt-4">
    <h4 className="mb-3">Optional Comment</h4>
    <form onSubmit={handleCommentSubmit}>
        <div className="form-group">
            <textarea
                className="form-control"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment here (optional)..."
                disabled={hasCommented}
                rows="4"
            />
        </div>
        <button className="btn btn-primary btn-block mt-2 commentButton" type="submit" disabled={hasCommented}>
            Submit Comment
        </button>
        {hasCommented && <p className=" mt-2 commentTextWarning">You have already commented on this doctor.</p>}
    </form>
</div>


    );
}
