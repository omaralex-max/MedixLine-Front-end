import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./gynecology.css"
import GynecologyIcon from "../categoryImages/gynecology.png"

export default function Gynecology(){
    return(
        <>
                <div className="gynecologyCategoryCard">
                    <img className="departmentIcon" src={GynecologyIcon}></img>
                    <h2 className="mt-2 categoryTitle">Gynecology</h2>
                    <p>
                        The Gynecology Department specializes in women's health, providing routine exams, prenatal care,
                        and treatment.
                    </p>
                </div>
        
        </>
    )
}