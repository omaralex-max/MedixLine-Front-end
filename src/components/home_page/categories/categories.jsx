import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./categories.css"
import axios from 'axios';
import Category from "../category/category/category";


export default function Categories(){
    const [specializations, setspecializations] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/doctor/specializations/")
        .then(response => {
          setspecializations(response.data)
          })
          .catch(error => {
            console.error(error);
            });
      }, []);

    return(
        <>
        <div className="w-100 d-flex flex-column align-items-center text-center mt-5" id="categoryHomeId">
            <h1 className="categoriesTitle">Our Medical Services</h1>
            <div className="row categoriesInnerContainer mt-5 w-100">
            {
            specializations.map(specialization => (
                <div className="col-6 col-md-3 mb-3 categoryCard" key={specialization.id} >
                    <Category  title={specialization.title} id={specialization.id}
                    description={specialization.description} image={specialization.image} />
                </div>
            ))
            }    
            </div>
        </div>
        </>
    )

}