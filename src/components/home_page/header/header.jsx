import React, { useState } from 'react';
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../Navbar/HomeNavbar"
import MyIcon from "../../assets/dd.png"
import Search from "../../../pages/search";
import { useNavigate } from "react-router-dom";

function Header (){
        const [department, setDepartment] = useState('');
        const [doctor, setDoctor] = useState('');
        const [searchResults, setSearchResults] = useState([]);
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();
            
            fetch(`http://localhost:8000/api/doctor/search/?department=${department}&doctor=${doctor}`)
                .then(response => response.json())
                .then(data => {
                    const reshapedResults = data.map(result => ({
                        id: result.id,
                        user: {
                            first_name: result.user__first_name,
                            last_name: result.user__last_name,
                        },
                        profile_picture: result.profile_picture, 
                        address: result.address,
                        price: result.price,
                        is_confirmed: result.is_confirmed,
                        average_rating: result.average_rating,
                        working_days: result.working_days
                    }));
                    navigate("/search", { state: { searchResults: reshapedResults } });
                })
                .catch(error => {
                    console.error("Error fetching search results:", error);
                });
        };
{
    return(
        <>
        <div className="background-container d-flex flex-column justify-content-center align-items-center">
            <Navbar/>
            <img src={MyIcon} className="icon img-fluid " alt="icon"/>
            <h1 id="title" className="d-none d-lg-block ">Book Your Appointments Now</h1>
            <p id="description" className="d-none d-lg-block">Welcome to MedixLine, the ultimate healthcare app designed to connect 
                you and your family with top medical professionals</p>
                <div className="row w-100 d-flex justify-content-center">
                    <div className="searchContainer d-flex flex-row flex-md-column justify-content-center align-items-center col-lg-12 col-s-8 w-50" id="searchContainerId">
                    <form className="w-100" onSubmit={handleSubmit}>
                                <div className="form-group row homeForm ">
                                    <div className="col-lg-5 col-s-8">
                                        <input type="text" className="form-control searchInput mx-3 w-100" placeholder="Department Name" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                    </div>

                                    <div className="col-lg-5 col-s-8">
                                        <input type="text" className="form-control searchInput mx-3" placeholder="Doctor Name" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
                                    </div>

                                    <div className="col-2 searchHome">
                                    <div className="col-2 searchHome">
                                        <button type="submit" className="btn searchButton mx-3">Search</button>
                                    </div>


                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
                {/* <Search searchResults={searchResults} setSearchResults={setSearchResults} />  */}
                {/* <Search searchResults={searchResults} /> */}

        </div>
        </>
    )
}
}

export default Header;