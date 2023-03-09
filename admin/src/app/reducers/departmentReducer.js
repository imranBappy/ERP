import * as Types from '../actions/types.js';
const init = {
    isLoading: false,
    data: []
}

const departmentReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_DEPARTMENT:
            return action.payload
        default:
            return state
    }
}

export default departmentReducer;