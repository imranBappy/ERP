import * as Types from './types';
import axios from 'axios';

export const admissionGetAction = ({ data, page }) => async dispatch => {
    try {
        dispatch({
            type: Types.SET_ADMISSION,
            payload: {
                isLoading: true,
                data: [...data]
            }
        });
        const res = await axios.get(`/admission?page=${page}`);
        dispatch({
            type: Types.SET_ADMISSION,
            payload: {
                isLoading: false,
                data: [...res.data]
            }
        });
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: 'Server was a side error',
                error: true
            }
        })
    }
};


export const admissionPostAction = ({ data, newData }) => async dispatch => {
    try {
        dispatch({
            type: Types.SET_ADMISSION,
            payload: {
                isLoading: true,
                data: [...data]
            }
        });
        const res = await axios(
            {
                method: "post",
                url: "/admission",
                data: newData,
                headers: { "Content-Type": "multipart/form-data" },
            }
        )
        dispatch({
            type: Types.SET_ADMISSION,
            payload: {
                isLoading: false,
                data: [...data, res.data]
            }
        });
    } catch (error) {
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: 'Server was a side error',
                error: true
            }
        })
    }
};