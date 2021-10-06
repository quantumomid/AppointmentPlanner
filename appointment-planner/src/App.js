import React, {useState} from "react";
import { Switch, Route, HashRouter as Router, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/AppointmentsPage";
import { ContactsPage } from "./containers/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = ({name, phone, email}) => {
    const newContact = {
      name, phone, email
    }
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }
  const addAppointment = ({title, contact, date, time}) => {
    const newAppointment = {
      title, contact, date, time
    }
    setAppointments((prevAppointments) => {
      return [...prevAppointments, newAppointment]
    })
  }
  return (
    <Router>
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
    </Router>

  );
}

export default App;


