import React from "react";

export const ContactPicker = ({name, contacts, handleChange}) => {
    const options = contacts.map(contact => {
        return <option key={contact.phone} value={contact.name}>{contact.name}</option>
    })
    options.unshift(<option key="-1" value="">Choose here</option>)
  return (
    <div>
        <label>
        Contact:
        <select name={name} defaultValue="" onChange={handleChange}>
            {options}
        </select>
        </label>
    </div>
  );
};