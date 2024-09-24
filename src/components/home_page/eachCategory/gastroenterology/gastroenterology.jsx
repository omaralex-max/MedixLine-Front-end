import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./gastroenterology.css"
import GastroenterologyIcon from "../categoryImages/stomach.png"

export default function Gastroenterology(){
    return(
        <>
                <div className="gynecologyCategoryCard">
                    <img className="departmentIcon" src={GastroenterologyIcon}></img>
                    <h2 className="mt-2 categoryTitle">Gastroenterology</h2>
                    <p>
                    The Gastroenterology Department specializes in diagnosing and treating disorders of the digestive system.
                    </p>
                </div>
        
        </>
    )
}