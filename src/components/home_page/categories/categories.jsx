import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./categories.css"
import EyeCare from "../eachCategory/eyeCare/eyeCare";
import Dentistry from "../eachCategory/dentistry/dentistry";
import Cardiology from "../eachCategory/cardiology/cardiology";
import Pediatric from "../eachCategory/pediatrics/pediatrics";
import Gynecology from "../eachCategory/gynecology/gynecology";
import Pulmonology from "../eachCategory/pulmonology/pulmonology";
import Neurology from "../eachCategory/neurology/neurology";
import Gastroenterology from "../eachCategory/gastroenterology/gastroenterology";

export default function Categories(){
    return(
        <>
        <div className="w-100 d-flex flex-column align-items-center text-center mt-5">
            <h1 className="categoriesTitle">Our Medical Services</h1>
            <div className="row categoriesInnerContainer mt-5">
                

                <div className="col-3">
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
                </div>

            </div>

            <div className="row categoriesInnerContainer mt-2">

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
            </div>
        </div>
        </>
    )

}