import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./category.css"

export default function Category({title, description, image}){
    return(
        <>
                <div className="CategoryCard">
                    <img className="departmentIcon" src={image}></img>
                    <h2 className="mt-2 categoryTitle">{title}</h2>
                    <p>
                    {description}
                    </p>
                </div>
        
        </>
    )
}