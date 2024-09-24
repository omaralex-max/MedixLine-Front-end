import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./cardiology.css"
import CardiologyIcon from "../categoryImages/cardiology.png"

export default function Cardiology(){
    return(
        <>
                <div className="cardiologyCategoryCard">
                    <img className="departmentIcon" src={CardiologyIcon}></img>
                    <h2 className="mt-2 categoryTitle">Cardiology</h2>
                    <p>
                    The Cardiology Department specializes in heart health, 
                    offering tests and treatments for various heart conditions
                    </p>
                </div>
        
        </>
    )
}