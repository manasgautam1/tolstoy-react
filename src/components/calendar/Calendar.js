import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  return <Calendar onChange={onChange} value={value} />;
};

export default MyCalendar;
