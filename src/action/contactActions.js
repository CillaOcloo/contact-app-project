import React from 'react'

function addContact(newContact) {
    return {
        type:"ADD_Contact",
        payload: newContact
    }
}

export default addContact;
