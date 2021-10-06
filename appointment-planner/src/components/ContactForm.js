import React from "react";

export const ContactForm = ({contactInfo, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={contactInfo.name} onChange={handleChange}/>
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={contactInfo.phone} onChange={handleChange}
                pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
            />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={contactInfo.email} onChange={handleChange}/>
          </label>
          <input type="submit" value="Submit" />
    </form> 
  );
};