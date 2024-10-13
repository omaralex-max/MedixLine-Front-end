import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./category.css"
import { Link } from "react-router-dom";

export default function Category({title, description, image, id}){
    return(
        <>
                <div className="categoryCardDetails">
                <Link to={{ pathname: `/doctorcard`, }} state={{ id, title }}  className="catLink">
                        <img className="departmentIcon" src={image}></img>
                        <h2 className="mt-2 categoryTitle">{title}</h2>
                        <p>
                        {description}
                        </p>
                    </Link>
                </div>
        
        </>
    )
}