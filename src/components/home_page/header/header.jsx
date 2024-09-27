import React from "react"
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyIcon from "../static/images/icon.png"
import Navbar from "../../Navbar/Navbar"

function Header ()
{
    return(
        <>
        <div className="background-container d-flex flex-column justify-content-center align-items-center">
            <Navbar/>
            <img src={MyIcon} className="icon img-fluid "></img>
            <h1 id="title" className="d-none d-lg-block ">Book Your Appointments Now</h1>
            <p id="description" className="d-none d-lg-block">Welcome to MedixLine, the ultimate healthcare app designed to connect 
                you and your family with top medical professionals</p>
                <div className="row w-100 d-flex justify-content-center">
                    <div className="searchContainer d-flex flex-row flex-md-column justify-content-center align-items-center col-lg-12 col-s-8 w-50" id="searchContainerId">
                        <form className="w-100">
                            <div className="form-group row ">
                                <div className="col-lg-5 col-s-8">
                                    <input type="text" className="form-control searchInput mx-3 w-100" placeholder="Department Name"/>
                                </div>

                                <div className="col-lg-5 col-s-8">
                                    <input type="text" className="form-control searchInput mx-3" placeholder="Doctor Name"/>
                                </div>

                                <div className="col-2 searchHome">
                                    <button type="submit" className="btn searchButton mx-3">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Header;