import * as Types from './types';
import axios from 'axios';

export const departmentPostAction = (newData, data) => async dispatch => {
    console.log(newData);
    try {
        const res = await axios({
            method: "post",
            url: "/department",
            headers: { "Content-Type": "multipart/form-data" },
            data: newData,
        });
        console.log(res);
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


