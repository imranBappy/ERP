import * as Types from '../actions/types.js';
const init = {
    isLoading: false,
    data: []
}

const teacherReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_TEACHER:
            return action.payload
        default:
            return state
    }
}

export default teacherReducer;