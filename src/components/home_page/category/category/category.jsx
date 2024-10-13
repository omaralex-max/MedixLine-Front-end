import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./category.css"
import { Link, useNavigate } from "react-router-dom";

export default function Category({title, description, image, id}){

    const navigate = useNavigate();

    const handleClickSpecialization = (e, id, title) => {
        e.preventDefault();
        navigate("/doctorcard", { state: { id, title } });
        setTimeout(() => {
            const element = document.getElementById("card-holder");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
      };
      
    return(
        <>
                <div className="categoryCardDetails">
                <Link to={{ pathname: `/doctorcard`, }} state={{ id, title }}
                onClick={(e) => handleClickSpecialization(e, id, title)}
                className="catLink">
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