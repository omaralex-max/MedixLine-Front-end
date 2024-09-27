import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import "../doctor-profile/DoctorPage.css"
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
    <div className="appointment  card p-4">
      <h1 className="card text-2xl font-semibold mb-5 text-center p-3">
        Appointments
      </h1>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left">
                Patient Name
              </th>
              <th className="py-3 px-4 text-left">
                Gender
              </th>
              <th className="py-3 px-4 text-left">
                Age
              </th>
              <th className="py-3 px-4 text-left">
                Appointment Time
              </th>
              <th className="py-3 px-4 text-left">
                Fees
              </th>
              <th className="py-3 px-4 text-left">
                Status
              </th>
              <th className="py-3 px-4 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-left">
                  {appointment.name}
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.gender}
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.age}
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.appointmentTime}
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.fees}
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.status}
                </td>
                <td className="py-3 px-4 text-left">
                  <button className="btn btn-primary" onClick={() => toggleStatus(index)}>
                    {appointment.status === 'Pending' ? 'Confirm' : 'Unconfirm'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AppointmentsTable;