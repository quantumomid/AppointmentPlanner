import React from "react";
import {ContactPicker} from "./ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
            Date:
            <input type="date" name="date" value={date} min={getTodayString()} onChange={(e) => setDate(e.target.value)}/>
        </label>
        <label>
            Time:
            <input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}/>
        </label>
        <ContactPicker name="contact" value={contact} handleChange={(e) => setContact(e.target.value)} contacts={contacts} />
        <input type="submit" value="Add appointment" />
    </form>   );
};
