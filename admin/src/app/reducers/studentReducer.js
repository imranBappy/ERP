import * as Types from '../actions/types.js';
const init = {
    isLoading: false,
    data: []
}

const studentReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_STUDENT:
            return action.payload
        default:
            return state
    }
}
export default studentReducer