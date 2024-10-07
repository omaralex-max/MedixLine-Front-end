import React,{useEffect,useState} from "react";
import HeaderDocPat from "../components/singleDoctorView/header/header";
import Navbar from "../components/Navbar/Navbar";
import Bar from "../components/singleDoctorView/bar/bar";
import Footer from "../components/footer/footer"
import {useParams} from "react-router-dom";
import axios from "axios";
import Loading from "../components/loading/loading";
import CommentsAndRatingsList from "../components/singleDoctorView/commentsAndRatings/commentsAndRatings";
import FetchPatients from "../components/singleDoctorView/fetchPatients/fetchPatients";
export default function SingleDoctorView() 

{ 
    const { id } = useParams();
    const [doctor, setDoctor] = useState();
    const [patientsData, setPatientsData] = useState([]);

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/doctor/${id}`) 
        .then((response) => {
            // console.log("Doctor data:", response.data); 
          setDoctor(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the doctors' data", error);
        });
    }, [id]);

    const handleFetchPatients = (data) => {
        setPatientsData(data);
    };
   
    return (
        <> 
        <Navbar/>
        {doctor ? (
            <>
                <HeaderDocPat  doctor={doctor} />
                <Bar doctor={doctor} />
                <FetchPatients onFetch={handleFetchPatients} />
                <CommentsAndRatingsList doctor={doctor} patientsData={patientsData} />
            </>
        ) : (
            <Loading/>
        )}
        <Footer/>
        </>
    )
}
