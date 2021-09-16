import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const inputEl = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

   
    const renderContectList = props.contacts.map((contact)=> {
       return (
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
           
       )
    })
    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    }
    return(
        <div className="main"  style={{marginTop:"5rem"}}>
            <h2>Contact List
            <Link to="/add">
            <button className="ui button blue" style={{float:"right"}}>Add Contact</button>

            </Link>
            </h2>

            <div className="ui search" style={{marginTop:"1rem"}}>
                <div className="ui icon input">
                    <input 
                    ref={inputEl}
                    type="text" placeholder="Search Contacts" 
                    className="prompt" value={props.term}
                    onChange={getSearchTerm} />
                    <i class="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
            {renderContectList.length > 0 
            ? renderContectList
            :"No Contacts available"}
            </div>

        </div>
           )

}

export default ContactList;