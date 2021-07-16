import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllContacts } from '../actions/contactActions';
import Contacts from './Contacts';

function ContactList(props) {
  useEffect (()=>{
    props.getAllContacts();
  }, [])  
    return(
        <div>
             {props.contacts.map((user) => (
        <Contacts user={user}
        delete={props.delete} 
        updateContact={props.updateContact}
        
        />
        
      ))}
        </div> 
    )
}
function mapStateToProps(state) {
  return {
    contacts: state.contactState.contacts,
  }
}
const mapDispatchTProps ={
  getAllContacts,
}

export default connect(mapStateToProps,mapDispatchTProps)(ContactList);