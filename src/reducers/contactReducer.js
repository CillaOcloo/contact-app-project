const initialState = {
    contacts: []
};
const contactsReducer =(state= initialState,action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            console.log(action.payload)
            return {...state,contacts:[...state.contacts,action.payload]}


        case "EDIT_CONTACT":
            var id =action.payload.id;
            let updatedContactInfo = action.payload.updatedContactInfo;
            let contactsAfterUpddate = state.contacts.map((user)=> {
                if (user.id === id) {
                    return updatedContactInfo;

                }
                return user;
            });
            return { contacts: contactsAfterUpddate };


        case "DELETE_CONTACT":
            var id =action.payload;
            var newContacts = state.contacts.filter((user) => user.id !== id);
            
            return{
                contacts:newContacts
            }

          default:
              return state;
    }
}
export default contactsReducer;