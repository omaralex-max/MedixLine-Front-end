import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pulmonology.css"
import PulmonologyIcon from "../categoryImages/lungs.png"

export default function Pulmonology(){
    return(
        <>
                <div className="gynecologyCategoryCard">
                    <img className="departmentIcon" src={PulmonologyIcon}></img>
                    <h2 className="mt-2 categoryTitle">Pulmonology</h2>
                    <p>
                        The Pulmonology Department focuses on diagnosing and 
                        treating respiratory conditions with the latest technologies.
                    </p>
                </div>
        
        </>
    )
}