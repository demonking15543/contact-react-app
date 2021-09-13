import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddContect from './components/AddContact';
import ContactList from './components/ContactList';
import { uuid } from "uuidv4"

import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  const LOCAL_STORAGE = "contacts"
  const [contacts, setContacts] = useState([])
//   const contacts = [
//     {
//       id: "1",
//     name: "Vijay",
//   email: "vijay@test.com",
// },
// {
//   id: "2",
// name: "Rex",
// email: "Rex@test.com",
// }
//   ];
 const addContactHandler = (contact) => {
   console.log(contact);
   setContacts([...contacts, {id: uuid(), ...contact}]);
 };

 const removeContactHandler = (id) => {
   const newContactList = contacts.filter((contact) => {
     return contact.id !== id;
   });
   setContacts(newContactList);
 };
 useEffect(()=>{
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  if(retriveContacts) setContacts(retriveContacts)
 }, [])

 useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(contacts));
 }, [contacts])

  return (
    <div className="ui container">
      <Router>
        <Header / >
          <Switch>
          <Route path="/" 
          exact 
          render={(props)=>(
          <ContactList 
          {...props} 
          contacts={contacts} 
          getContactId={removeContactHandler} />
            )} 
          />

          <Route 
          path="/add" 
          render={(props) =>(
            <AddContect 
            {...props}
            addContactHandler={addContactHandler}
            />
          )}
          
           />
        {/* <AddContect addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
