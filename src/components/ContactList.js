import React from "react";
import { Link } from 'react-router-dom'
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props.contacts)

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
   
    const renderContectList = props.contacts.map((contact)=> {
       return (
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
           
       )
    })
    return(
        <div className="main"  style={{marginTop:"5rem"}}>
            <h2>Contact List</h2>
            <Link to="/add">
            <button className="ui button blue">Add Contact</button>

            </Link>
            <div className="ui celled list">
            {renderContectList}
            </div>

        </div>
           )

}

export default ContactList;