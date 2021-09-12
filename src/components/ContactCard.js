import React from "react";
import avatar from "../images/avatar.png";
const ContactCard = (props) => {
    const { id, name , email} = props.contact;
    return (
        <div className="item" key={id}>
            <img src={avatar} alt="avatar" className="ui avatar image" />
               <div className="content">
                   <div className="header">{name}</div>
                   <div>{email}</div>
               </div>
               <i className="trash alternate outline  icon"
               style={{color:"red", marginTop:"17px", float:"right"}}></i>
        </div>

    );
    
};

export default ContactCard