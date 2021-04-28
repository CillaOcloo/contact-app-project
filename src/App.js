import  { useState } from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import ContactForm from './Components/ContactForm';

function App() {

  const [users,setState]=useState([]);
    function handleAddContacts(user) {
      setState([...users, user]);
    }
  return (
    <div>
       <div><ContactForm handleAddContacts={handleAddContacts} /></div>
       <div><Contacts allUsers={users}/> </div>
    </div>
);
}

export default App;
