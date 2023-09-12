import React, { useState } from "react";
import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const DrBooking = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "hour").toDate(),
      title: "Reserved Appointment",
      allDay: true,
    },
    {
      start: moment().add(2, "hours").toDate(),
      end: moment().add(3, "hours").toDate(),
      title: "Another Appointment",
    },
  ]);

  return (
    <div>
<Calendar
  selectable
  views={Views.MONTH}
  defaultView={Views.MONTH}
  events={events}
  formats={{
    dayFormat: "dddd, MMMM Do YYYY",
    monthFormat: "MMMM YYYY",
    weekFormat: "MMMM Do YYYY",
  }}
/>
    </div>
  );
};

export default DrBooking;