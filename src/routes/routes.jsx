import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/sign_up";
import Signin from "../pages/sign_in"
import Home from '../pages/home';
import PatientProfile from "../pages/patient_profile"
import DoctorPage from '../pages/Doctorpage';
import SingleDoctorView from '../pages/singleDoctorView';
import DoctorsCard from "../pages/doctors_card"
import Loading from '../components/loading/loading';
import Search from '../pages/search';
import NotFound from '../components/not_found/not_found';
import Inbox from '../pages/inbox';

export default function Router() {

  return (
          <BrowserRouter>
          <Suspense fallback={<Loading/>}>
                  <Routes>
                      <Route path="/signin" element={<Signin />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/" element={<Home />} />
                      <Route path="/patient-profile" element={<PatientProfile />} />
                      <Route path="/doctorpage/*" element={<DoctorPage />} />
                      <Route path="/doctorcard" element={<DoctorsCard />} />
                      <Route path="/doctordetails/:id" element={<SingleDoctorView />} />
                      <Route path="/search" element={<Search />} />
                      <Route path="/inbox" element={<Inbox />} />
                      <Route path='*' element={<NotFound />} />
                  </Routes>
          </Suspense>
          </ BrowserRouter>
  )
}
