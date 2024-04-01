// src/components/CalendarView.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function CalendarView({ jobs }) {
  const myEventsList = jobs.map((job, index) => ({
    id: index,
    title: `${job.task} - ${job.machine}`,
    start: moment().add(index, 'days').toDate(), 
    end: moment().add(index, 'days').add(job.duration, 'hours').toDate(),
  }));

  return (
    <div style={{ height: 500, margin: '50px' }}>
      <h3>Production Calendar</h3>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
      />
    </div>
  );
}

export default CalendarView;

