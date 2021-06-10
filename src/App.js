import { useState } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';


function App() {
  const [users, setState] = useState([]);
  function handleAddContacts(user) {
    setState([...users, user]);
  }

  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setState(newUsers);
  }
  function updatedContact(id, updatedContactInfo) {
    let newContact = users.map((user) => {
      if (user.id === id) {
        return updatedContactInfo;
      }
      return user;
    });
    setState(newContact)

  }
  return(
    <div className="container"> ²
      <div className="row">
      <h2>Contact Form</h2>
         <div className="col-md-6">
            <ContactForm  handleAddContacts={handleAddContacts}/>
     </div>
      
      <div className="container">
      <div className="row">
           <div className="col-md-6">
               <ContactList allUsers={users} 
               delete={deleteUser}
               updatedContact= {updatedContact}
               />
               </div>
         </div>
      </div>
    </div>
    </div>
    
  )
}
export default App;