import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/sign_up";
import Signin from "../pages/sign_in"
import Home from '../pages/home';
import PatientProfile from "../pages/patient_profile"
import DoctorPage from '../pages/Doctorpage';
<<<<<<< HEAD
import SingleDoctorView from '../pages/singleDoctorView';
=======
import DoctorsCard from "../pages/doctors_card"
>>>>>>> d8b7898996e6ba0d5341f0a4fa4ca37ab829b64d

export default function Router() {

  return (
          <BrowserRouter>
                  <Routes>
                      <Route path="/signin" element={<Signin />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/" element={<Home />} />
                      <Route path="/patient-profile" element={<PatientProfile />} />
                      <Route path="/doctorpage/*" element={<DoctorPage />} />
<<<<<<< HEAD
                      <Route path="/doctorview" element={<SingleDoctorView/>}/>
=======
                      <Route path="/doctorcard" element={<DoctorsCard />} />
>>>>>>> d8b7898996e6ba0d5341f0a4fa4ca37ab829b64d
                  </Routes>
          </ BrowserRouter>
  )
}
