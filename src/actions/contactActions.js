import React from 'react'

export function addContact(newContact) {
    return {
        type:"ADD_CONTACT",
        payload: newContact
    }
}
export function deleteContact(id) {
    return{
        type: "DELETE_CONTACT",
        payload: id,
    };
}

export function editContact(id, updatedContact) {
    return{
        type:"EDIT_CONTACT",
        payload: { id: id, updatedContactInfo: updatedContact }
    }
}
    

export default addContact;
