import * as Types from '../actions/types.js';
const init = {
    token: null,
    data: null,
    isLoading: false,
    isAuthintication: false
}

const authReducer = (state = init, action) => {
    if (action.payload?.token) {
        localStorage.setItem('token', action.payload.token);
    }
    switch (action.type) {
        case Types.SET_AUTH:
            return action.payload
        default:
            return state
    }
}

export default authReducer;