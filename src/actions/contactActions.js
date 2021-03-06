import React from 'react'

export function getAllContacts(){
    return (dispatch, state, {getFirestore}) =>{
        const db = getFirestore();
        db.collection('contacts').onSnapshot(
            (results)=> {
                let contacts =[];
                results.forEach((doc) =>{
                    contacts.push({...doc.data(), id:doc.id});
                });
                dispatch({
                    type:'ADD_ALL_CONTACTS',
                    payload: contacts,
                });
            },
            (error)=>{
                console.log(error);
            });   
    };
}

export function addContact(newContact) {
    return async(dispatch,state,{ getFirestore}) =>{
        const db = getFirestore();
        try {
            await db.collection('contacts').add(newContact);
        } catch (error) {
            console.log(error)
            
        }
    }

    // return {
    //     type:"ADD_CONTACT",
    //     payload: newContact
    // }
}


export function deleteContact(id) {
    return async(dispatch, state, {getFirestore})=>{
        const db = getFirestore();
        try {
            await db.collection('contacts').doc(id).delete();
            
        } catch (error) {
            console.log(error)
            
        }
    }

    // return{
    //     type: "DELETE_CONTACT",
    //     payload: id,
    // };
}


export function editContact(id, updatedContact) {
    return async (dispatch, state, {getFirestore})=>{
        const db = getFirestore();
        try {
            await db.collection('contacts').doc(id).update(updatedContact)
            
        } catch (error) {
            console.log(error);
        }
    }

    // return{
    //     type:"EDIT_CONTACT",
    //     payload: { id: id, updatedContactInfo: updatedContact }
    // }
}
    

export default addContact;
