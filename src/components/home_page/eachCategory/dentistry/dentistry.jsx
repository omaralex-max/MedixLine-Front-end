import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./dentistry.css"
import Dentist from "../categoryImages/dentist.png"

export default function Dentistry(){
    return(
        <>
                <div className="dentistCategoryCard">
                    <img className="departmentIcon" src={Dentist}></img>
                    <h2 className="mt-2 categoryTitle">Dentistry</h2>
                    <p>
                    The Dentistry Department offers a range of dental services,
                     from regular check-ups to specialized treatments.
                    </p>
                </div>
        
        </>
    )
}