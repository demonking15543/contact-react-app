import React from "react";
import avatar from "../images/avatar.png";
import { Link} from 'react-router-dom';
const ContactCard = (props) => {
    const { id, name , email} = props.contact;
    console.log(id)
    return (
        <div className="item" key={id}>
            <img src={avatar} alt="avatar" className="ui avatar image" />
               <div className="content">
                   <Link to={{pathname: `/contact/${id}`, state:{contact: props.contact}}}>
                   <div className="header">{name}</div>
                   <div>{email}</div>
                   </Link>


               </div>
               <i className="trash alternate outline  icon"
               onClick={()=>props.clickHandler(id)}
               style={{color:"red", marginTop:"17px", float:"right", marginLeft:"10px"}}></i>
              <Link
              to={{pathname:`/edit`, state: {contact:props.contact}}}>
               <i className="edit alternate outline  icon"
               style={{color:"blue", marginTop:"17px", float:"right"}}></i>
               </Link>
        </div>

    );
    
};

export default ContactCard