import React from "react";
import HeaderDocPat from "../components/singleDoctorView/header/header";
import Navbar from "../components/Navbar/Navber";
import Bar from "../components/singleDoctorView/bar/bar";
import Footer from "../components/footer/footer"
export default function SingleDoctorView() 
{

    return (
        <> 
        <Navbar/>
        <HeaderDocPat/>
        <Bar/>
        <Footer/>
        </>
    )
}