import { combineReducers } from "redux";

import alertReducer from './alertReducer.js';
import admissionReducer from './admissionReducer';
import authReducer from "./authReducers.js";
import teacherReducer from "./teacherReducer.js";
import departmentReducer from "./departmentReducer.js";
import studentReducer from "./studentReducer.js";


const reducers = combineReducers({
    admission: admissionReducer,
    alert: alertReducer,
    auth: authReducer,
    teacher: teacherReducer,
    department: departmentReducer,
    student: studentReducer
})

export default reducers