import * as Types from '../actions/types.js';
const init = {
    message: '',
    error: false
}

const alertReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_ALERT:
            return {
                message: action.payload.message,
                error: action.payload.error
            }
        default:
            return state
    }
}
export default alertReducer