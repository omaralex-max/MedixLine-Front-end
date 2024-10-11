import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./timetable.css";
import {useParams} from "react-router-dom";
import moment from 'moment'; 

const TimeTable = () => {
    const [selectedSlot, setSelectedSlot] = useState({ day: null, time: null });
    const token = localStorage.getItem('token')
    // console.log(token)
    const [slots, setSlots] = useState([]);
    const [workingDays, setWorkingDays] = useState([]);
    const { id } = useParams();
    // console.log(patientId)
    const [bookedSlots, setBookedSlots] = useState([]);


    const fetchBookedSlots = () => {
        axios.get('https://medixlineapi-c657ee2ad358.herokuapp.com/api/appointment/all', {
        })
        .then(response => {
            const appointments = response.data;
            // console.log("appointments",appointments)            
            const booked = appointments.map(appointment => ({
                day: appointment.date, 
                time: moment(appointment.time, 'HH:mm:ss').format('hh:mm A'), 
                doctor_id: appointment.doctor
            }));
            setBookedSlots(booked);
        })
        .catch(error => {
            console.error("Error fetching booked appointments:", error);
        });
    };
        
    // console.log("sfsfwfwfwf",bookedSlots)

    useEffect(() => {
        axios.get(`https://medixlineapi-c657ee2ad358.herokuapp.com/api/doctor/${id}`, {
        })
        .then(response => {
            const doctorData = response.data;
            const generatedSlots = generateTimeSlots(doctorData.start_time, doctorData.end_time, doctorData.duration);
            setSlots(generatedSlots);
            // console.log("ssseeettt",slots)
            if (doctorData.working_days.length > 0) {
                fetchWorkingDaysNames(doctorData.working_days);}
            // console.log("Working days:", doctorData.working_days);
        })
        .catch(error => {   
            console.error(error);
        });
        fetchBookedSlots();
        
    }, [id, token]);
        

    const fetchWorkingDaysNames = (dayIds) => {
        dayIds.forEach((dayId) => {
            axios.get(`https://medixlineapi-c657ee2ad358.herokuapp.com/api/doctor/workingdays/${dayId}`, {
            })
            .then(response => {
                const dayName = response.data.day.charAt(0).toUpperCase() + response.data.day.slice(1).toLowerCase();  
                setWorkingDays(prevDays => [...prevDays, dayName]);  
            })
            .catch(error => {
                console.error(`Error fetching details for day ${dayId}:`, error);
            });
        });
    };
    // console.log("workingDays",workingDays)

    const generateTimeSlots = (startTime, endTime, durationInMinutes) => {
        const start = moment(startTime, "HH:mm:ss");
        const end = moment(endTime, "HH:mm:ss");
        let slotList = [];

        while (start.isBefore(end)) {
            slotList.push(start.format("hh:mm A")); 
            start.add(durationInMinutes, 'minutes');  
        }

        // console.log("slotList",slotList)
        return slotList;
    };

    // console.log(slots)


    const handleSlotClick = (day, slot) => {
        setSelectedSlot({ day, time: slot });
    };

    const handleBookSlot = () => {
        const { day, time } = selectedSlot;
        const patientId = localStorage.getItem('patient_id');
        const token = localStorage.getItem('token');
    
        if (!token) {
            alert('You need to sign in first to book an appointment.');
            return;
        }
    
        if (day && time && patientId) {
            const today = moment();
            const dayIndex = moment().day(day).isoWeekday();
            let appointmentDate = moment().day(day).startOf('day');
            if (today.isoWeekday() > dayIndex) {
                appointmentDate.add(1, 'weeks');
            }
            const appointmentTime = moment(time, "hh:mm A").format('HH:mm:ss');
            const appointmentData = {
                date: appointmentDate.format('YYYY-MM-DD'),
                time: appointmentTime,
                patient: parseInt(patientId, 10), 
                doctor: parseInt(id, 10) 
            };
    
            axios.post(`https://medixlineapi-c657ee2ad358.herokuapp.com/api/appointment/`, appointmentData, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                alert(`Appointment booked for ${time} on ${day}`);
                setSelectedSlot({ day: null, time: null });
                fetchBookedSlots();
            })
            .catch(error => {
                if (error.response && error.response.data.error) {
                    alert(`Error: ${error.response.data.error}`);
                } else {
                    alert('Error booking the appointment. Please try again.');
                }
            });
        } else {
            alert('Please select a time slot to book.');
        }
    };
    
    const getNextDateForDay = (day) => {
        const today = moment();
        const targetDay = moment().day(day).startOf('day'); 
        // If the target day is before today, move to the next week
        if (targetDay.isBefore(today, 'day')) {
            targetDay.add(1, 'weeks');
        }
        return targetDay;
    };

    const isSlotBooked = (day, slot, doctorId) => {
        const dayDate = getNextDateForDay(day).format('YYYY-MM-DD'); // Convert day to a date
        return bookedSlots.some(bookedSlot => 
            bookedSlot.day === dayDate && 
            bookedSlot.time === slot && 
            bookedSlot.doctor_id === parseInt(doctorId, 10)
        );
    };
    

    return (
        <div className="container mt-5 parentAppDiv">
            <h2 className="apptTitle text-center">Select an Appointment Slot for the Week</h2>
            <div className="row">
                {workingDays.map((day) => (
                    <div className="col-md-4 text-center" key={day}>
                        <h5 className="apptDay">{day}</h5>
                        <div className="row eachDayAppoint mb-4 mt-3 mx-2">
                            {slots.map((slot) => (
                                <div className="col-6 mb-2" key={slot}>
                                    {!isSlotBooked(day, slot, id) ? (
                                            
                                        <div
                                            className={`slot p-2 text-center border eachSlotAppt 
                                                ${selectedSlot.day === day && selectedSlot.time === slot 
                                                ? 'bg-primary text-white' 
                                                : 'border-primary'}`}
                                            style={{ 
                                                cursor: 'pointer', 
                                                transition: 'background-color 0.3s' 
                                            }}
                                            onClick={() => handleSlotClick(day, slot)} 
                                            >
                                            {slot}
                                        </div>
                                            ) : (
                                        <div
                                            className="slot p-2 text-center border eachSlotAppt bg-secondary text-muted"
                                            style={{ 
                                                cursor: 'not-allowed', 
                                                transition: 'background-color 0.3s' 
                                            }}
                                            >
                                            {slot}
                                        </div>
                                    )}
                                </div>
                            ))}
                            </div>

                    </div>
                ))}
            </div>
            <button className="btn btn-primary mt-4 apptBtn try" onClick={handleBookSlot}>Book Selected Slot</button>
        </div>
    );
};

export default TimeTable;