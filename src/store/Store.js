import contactReducer from '../reducers/contactReducer';
import {firebaseReducer, getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { createStore, compose,applyMiddleware,  combineReducers} from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from '../firebase/config'
import thunk from 'redux-thunk';


const allReducers =  combineReducers({
    contactState: contactReducer,
    firebaseState: firebaseReducer,
})


 export const store= createStore (
     allReducers, 
     compose(
     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
     reduxReactFirebase(firebase),
     reduxFirestore(firebase),
 ));
 