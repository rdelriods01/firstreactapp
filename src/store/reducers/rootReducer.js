import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from "redux";

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    authR: authReducer,
    projectR: projectReducer,
    firestoreR: firestoreReducer,
    firebaseR: firebaseReducer
})

export default rootReducer;