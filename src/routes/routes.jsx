import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/sign_up";
import Signin from "../pages/sign_in"
import Home from '../pages/home';
import PatientProfile from "../pages/patient_profile"
import DoctorPage from '../pages/Doctorpage';

export default function Router() {

  return (
          <BrowserRouter>
                  <Routes>
                      <Route path="/signin" element={<Signin />}></Route>
                      <Route path="/signup" element={<Signup />}></Route>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="/patient-profile" element={<PatientProfile />}></Route>
                      <Route path="/doctorpage/*" element={<DoctorPage />} />
                  </Routes>
          </ BrowserRouter>
  )
}
