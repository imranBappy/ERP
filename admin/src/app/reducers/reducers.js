import { combineReducers } from "redux";

import alertReducer from './alertReducer.js';
import admissionReducer from './admissionReducer';
import authReducer from "./authReducers.js";
import teacherReducer from "./teacherReducer.js";


const reducers = combineReducers({
    admission: admissionReducer,
    alert: alertReducer,
    auth: authReducer,
    teacher: teacherReducer,
})

export default reducers