import React,{useState,useEffect} from "react";
import "./header.css"
import axios from "axios";
import { Rating } from "@mui/material";
export default function HeaderDocPat({doctor}){
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = month + "/" + date + "/" + year;
    const [specializations, setspecializations] = useState([])
    const [ratingCount,setRatingCount]=useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/doctor/specializations/")
        .then(response => {
          setspecializations(response.data)
          })
          .catch(error => {
            console.error(error);
            });
      }, []);

    useEffect(() => {
    const fetchRatings = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/doctor/ratings/`, {
            });
            const ratingList = response.data.filter(r => r.doctor === doctor.id );
            // console.log(ratingList)
            setRatingCount(ratingList.length);

        } catch (error) {
            console.error("Error fetching rating:", error);
        }
    };
    fetchRatings(); 
}, []);

      const specialization = specializations.find(spec => spec.id === doctor.specialization);

    return(
        <>
    
    <div className="container-fluid headContainerDocPat">
            <div className="row align-items-center">
                <div className="col-md-4 col-12 text-center d-flex justify-content-center">
                    <img src={doctor.profile_picture} className="img-fluid docPatImage" alt="Doctor" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center justify-content-md-start">
                    <div className="text-center text-md-start">
                        <p className="text-secondary d-none d-md-block">Today's Date: {currentDate}</p>
                    <h1 className="doctorNamePat text-primary">Dr. {doctor.user.first_name} {doctor.user.last_name}</h1>
                        <p className="fw-3 fs-3"> Price: {doctor.price} EGP</p>
                        <div className="fw-3 fs-3"> 
                        {specialization ? (
                            <p className="fw-3 fs-3">Specialization: {specialization.title}</p>
                        ) : (
                            <p className="fw-3 fs-3">Specialization: Not available</p>
                        )}
                       <p className="fw-3 fs-3">
                                Average Rating:
                                <Rating
                                    name="average-rating"
                                    value={parseFloat(doctor.average_rating)}
                                    readOnly
                                    precision={0.5} 
                                    style={{ color: 'rgb(57, 73, 121)' }}
                                />
                                ({ratingCount})
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}