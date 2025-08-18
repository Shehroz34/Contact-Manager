
import './App.css';
import React from 'react';
import Header from "./Header.js";
import ContactList from "./ContactList";
import AddContacts from "./AddContacts";
import ContactCard from "./ContactCard";

function App() {
  const contacts = [
    {
      id: "1",
      name: "shehroz",
      email: "shehroz@gmail.com",
    },
    {
      id:"2",
      name:"ubaid",
      email:"ubaid@gmail.com",
    }

  ];
  return (
  <div className='container'> 
    <Header />
    <AddContacts />
    <ContactList contacts={contacts}/>
  </div>
  );
}

export default App;
