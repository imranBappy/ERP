import * as Types from './types';
import axios from 'axios';
import jwt_decode from "jwt-decode";

export const authLoginAction = (newData) => async dispatch => {
    try {
        dispatch({
            type: Types.SET_AUTH,
            payload: {
                isLoading: true,
                data: null,
                token: null
            }
        });
        const res = await axios.post("/auth/login", newData);
        if (res.data.isAuthintication) {
            dispatch({
                type: Types.SET_AUTH,
                payload: {
                    isLoading: false,
                    data: res.data.data,
                    token: res.data.token,
                    isAuthintication: res.data.isAuthintication
                }
            });
        } else {
            dispatch({
                type: Types.SET_AUTH,
                payload: {
                    isLoading: false,
                    data: null,
                    token: '',
                    isAuthintication: false
                }
            });

            dispatch({
                type: Types.SET_ALERT,
                payload: {
                    message: res.data.message,
                    error: res.data.error
                }
            })
        }

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



export const authGetAction = (newData) => async dispatch => {
    try {
        let token = localStorage.getItem('token');
        if (token === null) {
            localStorage.setItem('token', '');
            token = '';
            dispatch({
                type: Types.SET_ALERT,
                payload: {
                    message: 'UnAuthenticated User',
                    error: true
                }
            })
            return;
        }
        var decoded = jwt_decode(token);
        const res = await axios.get(`/auth?id=${decoded.data?.id}`, {
            headers: {
                'Authorization': `${token}`
            }
        });
        console.log(res);
        if (res.data?.isAuthintication === false) {
            dispatch({
                type: Types.SET_ALERT,
                payload: {
                    message: res.data.message,
                    error: res.data?.error,
                }
            })
        }
        dispatch({
            type: Types.SET_AUTH,
            payload: {
                isLoading: false,
                data: res.data.data,
                token: token
            }
        });
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