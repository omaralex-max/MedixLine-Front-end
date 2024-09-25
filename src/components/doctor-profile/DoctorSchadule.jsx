import React, { useState } from "react";
import Calendar from "react-calendar";
// import './DoctorAppointment.css'; // Assuming you have a separate CSS file for styles
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const DoctorSchadule = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="appointment-container">
     <Fullcalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
      }}
      height={"90vh"}
      dateClick={event => console.log(event.date)}
      />
    </div>
  );
};

export default DoctorSchadule;
