import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props.contacts)
    const renderContectList = props.contacts.map((contact)=> {
       return (
           <ContactCard contact={contact} />
           
       )
    })
    return(
        <div className="ui celled list">
            {renderContectList}
            </div>
    )

}

export default ContactList;