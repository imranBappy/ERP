import { combineReducers } from "redux";

import alertReducer from './alertReducer.js';
import admissionReducer from './admissionReducer';
<<<<<<< HEAD
=======
import authReducer from "./authReducers.js";
>>>>>>> imran


const reducers = combineReducers({
    admission: admissionReducer,
<<<<<<< HEAD
    alert: alertReducer
=======
    alert: alertReducer,
    auth: authReducer,
>>>>>>> imran
})

export default reducers