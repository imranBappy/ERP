import * as Types from '../actions/types.js';
const init = {
    isLoading: false,
    data: []
}

const admissionReducer = (state = init, action) => {
    console.log(action.payload);
    switch (action.type) {
        case Types.SET_ADMISSION:
            return action.payload
        default:
            return state
    }
}

export default admissionReducer;