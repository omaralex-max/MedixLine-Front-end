// src/pages/DoctorPage.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DoctorDescription from '../components/doctor-profile/DoctorDescription';
import DoctorSchadule from '../components/doctor-profile/DoctorSchadule';
import AppointmentsTable from '../components/doctor-profile/DoctorAppointment';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/footer';

const DoctorPage = () => {
  return (
    <>

      <Navbar />

      <div
        className="doctor-page-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr', // Two equal columns
          //gap: '20px', // Space between the columns
          padding: '30px',
          paddingTop: '100px', // Adds space to push content below the navbar
          minHeight: '80vh', // Ensures page content takes up most of the screen
        }}
      >

        <div className="doctor-description-box">
          <DoctorDescription />
        </div>

        <div
          className="doctor-details-box"
          style={{
            padding: '30px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
          }}
        >
          <Routes>

            <Route path="/" element={<DoctorSchadule />} />

            <Route path="appointments" element={<AppointmentsTable />} />
          </Routes>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default DoctorPage;