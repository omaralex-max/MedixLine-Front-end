import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./eyeCare.css"
import Eye from "../categoryImages/eye.png"

export default function EyeCare(){
    return(
        <>
                <div className="eyeCategoryCard">
                    <img className="departmentIcon" src={Eye}></img>
                    <h2 className="mt-2 categoryTitle">Eye Care</h2>
                    <p>
                        The Eye Care Department provides thorough eye exams and 
                        personalized treatment for various vision issues.
                    </p>
                </div>
        
        </>
    )
}