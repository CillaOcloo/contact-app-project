export function signUp(email,password) {
    return async (dispatch, state, {getFirebase}) =>{
        const firebase = getFirebase();
        try {
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            console.log(user);
            
        } catch (error) {
            console.log (error)
            
        }
    }
}
export function login(email,password) {
    return async (dispatch, state, {getFirebase}) =>{
        const firebase = getFirebase();
        try {
            const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            console.log(user);
            
        } catch (error) {
            console.log (error)
            
        }
    }
}
export function logout() {
    return async(dispatch, state, {getFirebase}) =>{
        const firebase = getFirebase();
        try {
            await firebase.auth().signOut();
            
        } catch (error) {
            console.log (error);
            
        }
    }
}