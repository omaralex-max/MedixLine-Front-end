import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pediatrics.css"
import PediatricsIcon from "../categoryImages/pediatrics.png"

export default function Pediatric(){
    return(
        <>
                <div className="pediatricsCategoryCard">
                    <img className="departmentIcon" src={PediatricsIcon}></img>
                    <h2 className="mt-2 categoryTitle">Pediatrics</h2>
                    <p>
                    The Pediatrics Department provides care for children, offering check-ups, vaccinations,
                     and treatment for common illnesses.
                    </p>
                </div>
        
        </>
    )
}