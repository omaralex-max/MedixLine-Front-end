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

      console.log(specializations)
    return(
        <>
        <div className="w-100 d-flex flex-column align-items-center text-center mt-5">
            <h1 className="categoriesTitle">Our Medical Services</h1>
            <div className="row categoriesInnerContainer mt-5">
            {
            specializations.map(specialization => (
                <Category key={specialization.id} title={specialization.name}
                description={specialization.description} image={specialization.image} />
            ))
            }    

                {/* <div className="col-3">
                    <EyeCare/>
                </div>
                <div className="col-3">
                    <Dentistry/>
                </div>
                <div className="col-3">
                    <Cardiology/>
                </div>
                <div className="col-3">
                    <Pediatric/>
                </div> */}

            </div>

            {/* <div className="row categoriesInnerContainer mt-2">

            <div className="col-3">
                    <Gynecology/>
            </div>
            <div className="col-3">
                <Pulmonology/>
            </div>
            <div className="col-3">
                <Neurology/>
            </div>
            <div className="col-3">
                <Gastroenterology/>
            </div>
            </div> */}
        </div>
        </>
    )

}