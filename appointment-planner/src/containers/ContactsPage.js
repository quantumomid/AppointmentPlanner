import React, {useState, useEffect} from "react";
import {TileList} from '../components/TileList'
import {ContactForm} from '../components/ContactForm'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: ""
  })
  const [error, setError] = useState(false)

  const handleChange = ({target}) => {
    const {name, value} = target
    setContactInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
        }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  //  console.log(e.target)
    const newContact = contactInfo
    console.log(newContact)
    const nameExists = props.contacts.filter(contact => contact.name===contactInfo.name).length !== 0 
    if (nameExists) return 
    props.addContact(newContact)
    setContactInfo({
      name: "",
      phone: "",
      email: ""
    })
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setError(false)
    const nameExists = props.contacts.filter(contact => contact.name===contactInfo.name).length !== 0 
    if (nameExists) setError(true) 
  }, [contactInfo.name, props.contacts])
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {error && <p style={{color: "red"}}>Name exists!</p>}
        <ContactForm contactInfo={contactInfo} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts}/>
      </section>
    </div>
  );
};
