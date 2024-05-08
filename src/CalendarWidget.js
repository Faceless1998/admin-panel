import React, { useState, useEffect } from "react";
import "./calendarwidget.css";

const CalendarWidget = ({ isOpen, onClose }) => {
  useEffect(() => {
    setIsWidgetOpen(isOpen);
  }, [isOpen]);

  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const generateCalendar = () => {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const calendarDays = [];
    for (let i = 1; i <= daysInMonth + firstDayIndex; i++) {
      const dayClassName = i > firstDayIndex ? "calendar-day" : "calendar-day empty";
      calendarDays.push(<div key={i} className={dayClassName}>{i - firstDayIndex}</div>);
    }

    return calendarDays;
  };


  return (
    <div className={`calendar-widget ${isWidgetOpen ? 'open' : 'closed'}`}>
      <div className="calendar-header">Calendar</div>
      <div className="calendar-days">
        <div className="day-name">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>
        {generateCalendar()}
      </div>
    </div>
  );
};

export default CalendarWidget;
