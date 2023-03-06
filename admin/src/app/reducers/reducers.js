import { combineReducers } from "redux";

import alertReducer from './alertReducer.js';
import admissionReducer from './admissionReducer';
import authReducer from "./authReducers.js";


const reducers = combineReducers({
    admission: admissionReducer,
    alert: alertReducer,
    auth: authReducer,
})

export default reducers