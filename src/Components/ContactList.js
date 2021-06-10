import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';

function ContactList(props) {
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
    contacts: state.contacts,
  }
}

export default connect(mapStateToProps,{})(ContactList);