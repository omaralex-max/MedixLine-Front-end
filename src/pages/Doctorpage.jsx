import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DoctorDescription from '../components/doctor-profile/DoctorDescription';
import DoctorSchadule from '../components/doctor-profile/DoctorSchadule';
import AppointmentsTable from '../components/doctor-profile/DoctorAppointment';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../components/doctor-profile/DoctorPage.css"
const DoctorPage = () => {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Container className="doctor-page-container my-5 pt-5">
        <Row>
          <Col xs={12} md={4} lg={3} xl={4}>
            <div className="doctor-description-box">
              <DoctorDescription />
            </div>
          </Col>
          <Col xs={12} md={8} lg={9} xl={8}>
            <div className="doctor-details-box">
              <Routes>
                <Route path="/" element={<DoctorSchadule />} />
                <Route path="appointments" element={<AppointmentsTable />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DoctorPage;