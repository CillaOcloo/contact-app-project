const initialState = {
    users: []
};
const contactsReducer =(state= 'initialState',action) => {
    switch(action.type) {
        case "ADD_USER":
            console.log(action.payload)
            return {...state,contacts:[...state.users,action.payload]};

          break;

          default:
              return state;
    }
}
export default contactsReducer;