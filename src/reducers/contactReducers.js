const initialState = {
    users: [{ name:"Pricilla", userId:"543276", gender:"female"}]
};
const contactReducer =(state= 'initialState',action) => {
    switch(action.type) {
        case "ADD_USER":

          break;

          default:
              return state;
    }
}
export default contactReducer;