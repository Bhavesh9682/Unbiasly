// src/components/BookingForm.jsx
import React, { useState } from 'react';
import '../styles/components/BookingForm.css';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import "../styles/components/BookingForm.css"

const BookingForm = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    
    <>
    <Navbar/>
    <div className="booking-form">
      <h2>Book an Appointment</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        minDate={new Date()} // Prevent selecting past dates
      />
      
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Date:
          <input type="text" value={date.toDateString()} readOnly />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
    
  );
};


export default BookingForm;
