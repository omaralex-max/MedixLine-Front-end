import React from "react"
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyIcon from "../static/images/icon.png"

function Header ()
{
    return(
        <>
        <div className="background-container d-flex flex-column justify-content-center align-items-center">
            <img src={MyIcon} className="icon"></img>
            <h1 id="title">Book Your Appointments Now</h1>
            <p id="description">Welcome to MedixLine, the ultimate healthcare app designed to connect 
                you and your family with top medical professionals</p>
                <div className="searchContainer d-flex justify-content-center align-items-center">
                    <form className="w-100">
                        <div className="form-group row w-100">
                            <div className="col-5">
                                <input type="text" className="form-control searchInput mx-3 w-100" placeholder="Department Name"/>
                            </div>

                            <div className="col-5">
                                <input type="text" className="form-control searchInput mx-3" placeholder="Doctor Name"/>
                            </div>

                            <div className="col-2">
                                <button type="submit" className="btn searchButton mx-3">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
        </>
    )
}

export default Header;