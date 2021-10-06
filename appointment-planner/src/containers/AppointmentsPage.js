import React, {useState} from "react";
import {AppointmentForm} from "../components/AppointmentForm"
import {TileList} from '../components/TileList'

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
    const [title, setTitle] = useState("")
    const [contact, setContact] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const newAppointment = {
        title: title,
        contact: contact,
        date: date,
        time: time
    }
    addAppointment(newAppointment)
    setTitle("")
    setContact("")
    setTime("")
    setDate("")
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
            title={title}
            contact={contact}
            date={date}
            time={time}
            setTitle={setTitle}
            setContact={setContact}
            setDate={setDate}
            setTime={setTime}
            contacts={contacts}
            handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
