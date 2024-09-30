import React,{useEffect,useState} from "react";
import HeaderDocPat from "../components/singleDoctorView/header/header";
import Navbar from "../components/Navbar/Navbar";
import Bar from "../components/singleDoctorView/bar/bar";
import Footer from "../components/footer/footer"
import {useParams} from "react-router-dom";
import axios from "axios";
import Loading from "../components/loading/loading";
export default function SingleDoctorView() 
{ 
    const { id } = useParams();
    const [doctor, setDoctor] = useState();

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/doctor/${id}`) 
        .then((response) => {
            console.log("Doctor data:", response.data); 
          setDoctor(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the doctors' data", error);
        });
    }, [doctor,id]);

  console.log("hello" ,doctor)
    return (
        <> 
        <Navbar/>
        {doctor ? (
            <>
                <HeaderDocPat key={doctor.id} doctor={doctor} />
                <Bar key={doctor.id} doctor={doctor} />
            </>
        ) : (
            <Loading/>
        )}
        <Footer/>
        </>
    )
}