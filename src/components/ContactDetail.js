import React from "react";
import avatar from "../images/avatar.png";
import { Link} from 'react-router-dom';
const ContactDetail = (props) => {
    const {name, email} = props.location.state.contact;
    return (
        <div className="main" style={{marginTop:"4rem", textAlign:"-webkit-center"}}>
            <div className="ui card" style={{textAlign:"center"}}>
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <Link to="/">
                <button className="ui button blue" style={{textAlign:"center"}}>Back to Contact List</button>
                </Link>
                
            </div>
        </div>
        
    );
    
};

export default ContactDetail