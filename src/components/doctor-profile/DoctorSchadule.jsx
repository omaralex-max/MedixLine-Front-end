import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const DoctorSchadule = () => {
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const defaultStartTime = 9;
  const appointmentDuration = 1;

  const generateAppointments = (date) => {
    const eventsForDate = events.filter(
      (event) => event.start.toDateString() === date.toDateString()
    );
    if (eventsForDate.length === 0) {
      return defaultStartTime;
    }
    const lastEvent = eventsForDate.reduce((latest, event) => {
      return event.start > latest.start ? event : latest;
    });
    const lastEventEndTime = new Date(lastEvent.start);
    return lastEventEndTime.getHours() + appointmentDuration;
  };

  const onDateClick = (event) => {
    const selectedDate = new Date(event.date);
    const today = new Date();

    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      window.alert("You cannot schedule appointments in the past.");
      return;
    }

    const title = window.prompt("Enter Appointment Title:");
    if (title && title.trim() !== "") {
      const selectedDate = new Date(event.date);
      const nextAvailableHour = generateAppointments(selectedDate);

      const startDate = new Date(selectedDate);
      startDate.setHours(nextAvailableHour, 0, 0, 0);
      const newEvent = {
        title,
        start: startDate,
        allDay: false,
      };
      setEvents([...events, newEvent]);
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView("timeGridDay", event.date);
    } else {
      window.alert("Please enter a valid appointment title.");
    }
  };

  return (
    <div className="schedule card container-fluid p-3 appointment-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={onDateClick}
        ref={calendarRef}
      />
    </div>
  );
};

export default DoctorSchadule;
