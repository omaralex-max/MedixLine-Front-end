import React, { useState } from "react";
import "./timetable.css";

const TimeTable = () => {
    const [selectedSlot, setSelectedSlot] = useState({ day: null, time: null });

    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const slots = [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
        "06:00 PM",
        "07:00 PM",
        "08:00 PM",
        "09:00 PM",
        "10:00 PM",
        "11:00 PM",
    ];

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
                {days.map((day) => (
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
            <button className="btn btn-primary mt-4 apptBtn" onClick={handleBookSlot}>Book Selected Slot</button>
        </div>
    );
};

export default TimeTable;
