import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const DoctorSchadule = () => {
  const [events, setEvents] = useState([]);  
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef(null); // Create a ref for FullCalendar
  const defaultStartTime = 9;
  const appointmentDuration = 1;


  const generateAppointments = (date) => {
    const eventsForDate = events.filter(
      (event) => event.start.toDateString() === date.toDateString()
    );
    if (eventsForDate.length === 0) {
      return defaultStartTime;
    }
    const  lastEvent = eventsForDate.reduce((latest, event) => {
      return event.start > latest.start? event : latest;
    })
    const lastEventEndTime = new Date(lastEvent.start);
    return lastEventEndTime.getHours() + appointmentDuration;
  }

  const onDateClick = (event) => {
    const title = window.prompt("Enter Appointment Title:");
    if (title){
      const selectedDate = new Date(event.date);
      const nextAvailableHour = generateAppointments(selectedDate);

      const startDate = new Date(selectedDate)
      startDate.setHours(nextAvailableHour, 0 ,0 ,0);
      const newEvent = {
        title,
        start: startDate,
        // end: new Date(startDate),
        allDay: false,
      };
      setEvents([...events, newEvent]);
      const calendarApi = calendarRef.current.getApi(); // Access the calendar instance
      calendarApi.changeView("timeGridDay", event.date); // Switch to day view and navigate to clicked date
  
    }
   };

  return (
    <div className="appointment-container">
      <FullCalendar
        ref={calendarRef} // Attach the ref to FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        dateClick={onDateClick} // Handle date clicks to open specific day
        events={events} // Pass events data to FullCalendar
      />
    </div>
  );
};

export default DoctorSchadule;