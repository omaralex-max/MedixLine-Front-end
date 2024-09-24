import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./neurology.css"
import NeurologyIcon from "../categoryImages/brain.png"

export default function Neurology(){
    return(
        <>
                <div className="neurologyCategoryCard">
                    <img className="departmentIcon" src={NeurologyIcon}></img>
                    <h2 className="mt-2 categoryTitle">Neurology</h2>
                    <p>
                    The Neurology Department specializes in diagnosing and treating brain and nervous system disorders.
                    </p>
                </div>
        
        </>
    )
}