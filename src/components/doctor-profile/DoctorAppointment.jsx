import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../doctor-profile/DoctorPage.css";
import dayjs from 'dayjs';

const AppointmentsTable = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/appointment/all/');
        const userAppointments = response.data.filter(appointment => appointment.doctor === user.id);
  
        const detailedAppointments = await Promise.all(userAppointments.map(async (appointment) => {
          const token = localStorage.getItem('token'); 
          const patientResponse = await axios.get(`http://127.0.0.1:8000/api/patient/${appointment.patient}`, {
            headers: {
              Authorization: `Token ${token}` 
            }
          });
          return {
            ...appointment,
            first_name: patientResponse.data.user.first_name,
            last_name: patientResponse.data.user.last_name,
            age: patientResponse.data.date_of_birth,
            gender: patientResponse.data.gender,
            appointmentDate: appointment.date,
            appointmentTime: appointment.time,
            appointmentStatus: appointment.status,
          };
        }));
  
        setAppointments(detailedAppointments);  
      } catch (error) {
        console.error('Error fetching appointments or patients:', error);
      }
    };
  
    fetchAppointments();
  }, [user]);  
  console.log(appointments)
  function calculateAge(dob) {
    const today = dayjs();
    const birthDate = dayjs(dob);
    const age = today.diff(birthDate, 'year');  
    return age;
  }

  const updateStatus = async (appointmentId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://127.0.0.1:8000/api/appointment/${appointmentId}/`, { status: newStatus }, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      setAppointments(prevAppointments => 
        prevAppointments.map(appointment => 
          appointment.id === appointmentId ? { ...appointment, appointmentStatus: newStatus } : appointment
        )
      );
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  return (
    <div className="appointment card p-4">
      <h1 className="card text-2xl font-semibold mb-5 text-center p-3">Appointments</h1>
      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Status</th>
              {appointments.some(appointment => appointment.appointmentStatus !== 'cancelled' && appointment.appointmentStatus !== 'confirmed') && (
                  <th className="py-3 px-4 text-left">Actions</th>)}
                  </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.first_name} {appointment.last_name}</td>
                <td>{appointment.gender}</td>
                <td>{calculateAge(appointment.age)}</td>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.appointmentTime}</td>
                <td className={`text-${appointment.appointmentStatus === 'pending' ? 'secondary' :
                    appointment.appointmentStatus === 'confirmed' ? 'success' :
                    appointment.appointmentStatus === 'cancelled' ? 'danger' : ''}`}>
                  {appointment.appointmentStatus}
                </td>
                {appointment.appointmentStatus !== 'cancelled' && appointment.appointmentStatus !== 'confirmed' ? (
               <td>
                    <button 
                      onClick={() => updateStatus(appointment.id, 'confirmed')} 
                      className="btn btn-success btn-sm w-100 me-1 mb-1" 
                    >
                      Confirm
                    </button>
                    <button 
                      onClick={() => updateStatus(appointment.id, 'cancelled')} 
                      className="btn btn-danger btn-sm w-100"
                    >
                      Cancel
                    </button>
                </td>
      ) : null}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AppointmentsTable;
