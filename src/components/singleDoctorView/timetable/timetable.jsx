import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./timetable.css";
import {useParams} from "react-router-dom";
import moment from 'moment'; 

const TimeTable = () => {
    const [selectedSlot, setSelectedSlot] = useState({ day: null, time: null });
    const token = localStorage.getItem('token')
    const [slots, setSlots] = useState([]);
    const [workingDays, setWorkingDays] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/doctor/${id}`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(response => {
            const doctorData = response.data;
            const generatedSlots = generateTimeSlots(doctorData.start_time, doctorData.end_time, doctorData.duration);
            setSlots(generatedSlots);
            if (doctorData.working_days.length > 0) {
                fetchWorkingDaysNames(doctorData.working_days);}
            console.log("Working days:", doctorData.working_days);
        })
        .catch(error => {   
            console.error(error);
        });
    }, []);
        

    const fetchWorkingDaysNames = (dayIds) => {
        dayIds.forEach((dayId) => {
            axios.get(`http://127.0.0.1:8000/api/doctor/workingdays/${dayId}`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(response => {
                const dayName = response.data.day;  
                setWorkingDays(prevDays => [...prevDays, dayName]);  
            })
            .catch(error => {
                console.error(`Error fetching details for day ${dayId}:`, error);
            });
        });
    };



    const generateTimeSlots = (startTime, endTime, durationInMinutes) => {
        const start = moment(startTime, "HH:mm:ss");
        const end = moment(endTime, "HH:mm:ss");
        let slotList = [];

        while (start.isBefore(end)) {
            slotList.push(start.format("hh:mm A")); 
            start.add(durationInMinutes, 'minutes');  
        }

        return slotList;
    };

    console.log(slots)

    // const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const slots = [
    //     "09:00 AM",
    //     "10:00 AM",
    //     "11:00 AM",
    //     "12:00 PM",
    //     "01:00 PM",
    //     "02:00 PM",
    //     "03:00 PM",
    //     "04:00 PM",
    //     "05:00 PM",
    //     "06:00 PM",
    //     "07:00 PM",
    //     "08:00 PM",
    //     "09:00 PM",
    //     "10:00 PM",
    //     "11:00 PM",
    // ];

    const handleSlotClick = (day, slot) => {
        setSelectedSlot({ day, time: slot });
    };

    const handleBookSlot = () => {
        const { day, time } = selectedSlot;
        if (day && time) {
            alert(`You have booked the slot for ${time} on ${day}`);
        } else {
            alert('Please select a time slot to book.');
        }
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
                                    <div
                                        className={`slot p-2 text-center border eachSlotAppt ${selectedSlot.day === day && selectedSlot.time === slot ? 'bg-primary text-white' : 'border-primary'}`}
                                        style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}
                                        onClick={() => handleSlotClick(day, slot)}
                                    >
                                        {slot}
                                    </div>
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
