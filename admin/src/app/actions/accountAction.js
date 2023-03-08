import * as Types from './types';
import axios from 'axios';

export const accountPostAction = (newData) => async dispatch => {
    try {
        const res = await axios.post(`/admin`, newData);
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: res.data.message,
                error: res.data.error
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: error.message,
                error: true
            }
        })
    }
}


