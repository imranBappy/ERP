import { combineReducers } from "redux";

import alertReducer from './alertReducer.js';
import admissionReducer from './admissionReducer';


const reducers = combineReducers({
    admission: admissionReducer,
    alert: alertReducer
})

export default reducers