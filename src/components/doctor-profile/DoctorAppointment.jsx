import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../doctor-profile/DoctorPage.css"
import dayjs from 'dayjs';
// Import images
// const johnDoeImg = require('../assets/th (1).jpeg');
// const janeSmithImg = require('../assets/th (1).jpeg');
// const emilyJohnsonImg = require('../assets/th (1).jpeg');


const AppointmentsTable = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [appointments, setAppointments] = useState([])


  // const [appointments, setAppointments] = useState([
  //   {
  //     img: johnDoeImg,
  //     name: 'John Doe',
  //     gender: 'Male',
  //     age: 30,
  //     appointmentTime: '2023-09-25 10:00 AM',
  //     fees: '$100',
  //     status: 'Confirmed',
  //   },
  //   {
  //     img: janeSmithImg,
  //     name: 'Jane Smith',
  //     gender: 'Female',
  //     age: 25,
  //     appointmentTime: '2023-09-26 11:00 AM',
  //     fees: '$150',
  //     status: 'Pending',
  //   },
  //   {
  //     img: emilyJohnsonImg,
  //     name: 'Emily Johnson',
  //     gender: 'Female',
  //     age: 35,
  //     appointmentTime: '2023-09-27 1:00 PM',
  //     fees: '$200',
  //     status: 'Pending',
  //   },
  // ]);

  // const toggleStatus = (index) => {
  //   const updatedAppointments = appointments.map((appointment, i) => {
  //     if (i === index) {
  //       return {
  //         ...appointment,
  //         status: appointment.status === 'Pending' ? 'Confirmed' : 'Pending',
  //       };
  //     }
  //     return appointment;
  //   });

  //   setAppointments(updatedAppointments);
  // };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/appointment/all/');
        const userAppointments = response.data.filter(appointment => appointment.doctor === user.id);
        console.log("userAppointments", userAppointments);
  
        const detailedAppointments = await Promise.all(userAppointments.map(async (appointment) => {
          const token = localStorage.getItem('token'); 
          const patientResponse = await axios.get(`http://127.0.0.1:8000/api/patient/${appointment.patient}`, {
            headers: {
              Authorization: `Token ${token}` 
            }
          });
          console.log("patientResponse",patientResponse)
          console.log("appointment",appointment)
          return {
            ...appointment,
            first_name: patientResponse.data.user.first_name,
            last_name: patientResponse.data.user.last_name,
            age: patientResponse.data.date_of_birth,
            gender: patientResponse.data.gender,
            appointmentDate: appointment.date,
            appointmentTime: appointment.time,
          
          };
        }));
  
        setAppointments(detailedAppointments);  
      } catch (error) {
        console.error('Error fetching appointments or patients:', error);
      }
    };
  
    fetchAppointments();
  }, [user]);  
  
  function calculateAge(dob) {
    const today = dayjs();
    const birthDate = dayjs(dob);
    const age = today.diff(birthDate, 'year');  
    return age;
  }

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
                Appointment Date
              </th>
              <th className="py-3 px-4 text-left">
                Appointment Time
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-left">
                  {appointment.first_name} {appointment.last_name}
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.gender}
                </td>
                <td className="py-3 px-4 text-left">
                  {calculateAge(appointment.age)}   
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.appointmentDate}
                </td>
                <td className="py-3 px-4 text-left">
                  {appointment.appointmentTime}
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