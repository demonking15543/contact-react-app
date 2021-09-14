import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddContect from './components/AddContact';
import ContactList from './components/ContactList';
import api from './api/contacts'

import { uuid } from "uuidv4"

import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import ContactDetail from './components/ContactDetail';

function App() {
  const LOCAL_STORAGE = "contacts"
  const [contacts, setContacts] = useState([])
//RetriveContacts
const retriveContacts = async () => {
  const response = await api.get('/contacts/');
  return response.data
};
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
  // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  // if(retriveContacts) setContacts(retriveContacts)
  const getAllContacts = async() => {
    const allContacts = await retriveContacts();
    if(allContacts) setContacts(allContacts)
  };
  getAllContacts();
 }, [])

 useEffect(()=>{
  // localStorage.setItem(LOCAL_STORAGE, JSON.stringify(contacts));
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
           <Route 
           path="/contact/:id"
           component={ContactDetail}
           
           />
        {/* <AddContect addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
