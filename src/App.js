import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddContect from './components/AddContact';
import ContactList from './components/ContactList';


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
   setContacts([...contacts, contact]);
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
      <Header / >
        <AddContect addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
