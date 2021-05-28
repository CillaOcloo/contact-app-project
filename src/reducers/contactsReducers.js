const initialState = {
    users: []
};
const contactReducer =(state= 'initialState',action) => {
    switch(action.type) {
        case "ADD_USER":
            console.log(action.payload)
            return {...state,contacts:[...state.contacts,action.payload]};

          break;

          default:
              return state;
    }
}
export default contactReducer;