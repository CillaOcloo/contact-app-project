import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';

function ContactList(props) {
    return(
        <div>
             {props.allUsers.map((user) => (
        <Contacts user={user}
         delete={props.delete} 
         updateUser={props.updateUser}
        
        />
        
      ))}
        </div>
    )
}
function mapStateToProps(state) {
  return {
    contactsData: state.contacts,
  }
}

export default connect(mapStateToProps)(ContactList);