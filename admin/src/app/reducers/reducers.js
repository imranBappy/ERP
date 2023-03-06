import { combineReducers } from "redux";

import alertReducer from './alertReducer.js';
import admissionReducer from './admissionReducer';
<<<<<<< HEAD
import authReducer from "./authReducers.js";
=======
>>>>>>> mehedi


const reducers = combineReducers({
    admission: admissionReducer,
<<<<<<< HEAD
    alert: alertReducer,
    auth: authReducer,
=======
    alert: alertReducer
>>>>>>> mehedi
})

export default reducers