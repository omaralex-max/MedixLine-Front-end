import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css";

export default function About(){
    return(
        <>
        <div className="d-flex justify-content-center align-content-between w-100 parentDivAbout" >
            <div className="row aboutContainer text-center mt-5 mb-2">
                <div className="col-4 mission col-s-12">
                    <h3 className="aboutTitles ">Our Mission</h3>
                    <p>
                       To connect individuals and families with top healthcare professionals, simplifying access to quality medical services.
                    </p>
                </div>

                <div className="col-4  vision">
                    <h3 className="aboutTitles">Our Vision</h3>
                    <p>
                       To transform healthcare access by creating a seamless and compassionate patient experience through innovative technology.
                    </p>
                </div>

                <div className="col-4 whyUs">
                    <h3 className="aboutTitles " id="aboutId">Why Us</h3>
                    <p>
                     Our innovative platform simplifies appointment scheduling and ensures a seamless experience for every patient.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}