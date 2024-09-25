import React, { useState } from 'react';
import './DoctorAppointment.css';

// Import images
const johnDoeImg = require('../assets/th (1).jpeg');
const janeSmithImg = require('../assets/th (1).jpeg');
const emilyJohnsonImg = require('../assets/th (1).jpeg');

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([
    {
      img: johnDoeImg,
      name: 'John Doe',
      gender: 'Male',
      age: 30,
      appointmentTime: '2023-09-25 10:00 AM',
      fees: '$100',
      status: 'Confirmed',
    },
    {
      img: janeSmithImg,
      name: 'Jane Smith',
      gender: 'Female',
      age: 25,
      appointmentTime: '2023-09-26 11:00 AM',
      fees: '$150',
      status: 'Pending',
    },
    {
      img: emilyJohnsonImg,
      name: 'Emily Johnson',
      gender: 'Female',
      age: 35,
      appointmentTime: '2023-09-27 1:00 PM',
      fees: '$200',
      status: 'Pending',
    },
  ]);

  const toggleStatus = (index) => {
    const updatedAppointments = appointments.map((appointment, i) => {
      if (i === index) {
        return {
          ...appointment,
          status: appointment.status === 'Pending' ? 'Confirmed' : 'Pending',
        };
      }
      return appointment;
    });

    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointments-table">
      <h2>Appointments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Patient Image</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Appointment Time</th>
            <th>Fees</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>
                <img src={appointment.img} alt={appointment.name} className="patient-image" />
              </td>
              <td>{appointment.name}</td>
              <td>{appointment.gender}</td>
              <td>{appointment.age}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.fees}</td>
              <td>
                <button
                  className={`status-button ${appointment.status.toLowerCase()}`}
                  onClick={() => toggleStatus(index)}
                >
                  {appointment.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
