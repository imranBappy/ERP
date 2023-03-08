import * as Types from './types';
import axios from 'axios';

export const teacherPostAction = (newData) => async dispatch => {
    try {
        const res = await axios.post(`/teacher`, newData);
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


export const teacherGetAction = (page) => async dispatch => {
    try {
        dispatch({
            type: Types.SET_TEACHER,
            payload: {
                isLoading: true,
                data: []
            }
        })
        const res = await axios.get(`/teacher?page=${page}`);
        // console.log(22, res.data);
        dispatch({
            type: Types.SET_TEACHER,
            payload: {
                isLoading: false,
                data: res.data
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
