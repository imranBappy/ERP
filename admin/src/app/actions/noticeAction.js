import * as Types from './types';
import axios from 'axios';

export const noticePostAction = (newData) => async dispatch => {
    try {
        const res = await axios.post(`/notice`, newData);
        console.log({ res });
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
