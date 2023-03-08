import * as Types from './types';
import axios from 'axios';
import jwt_decode from "jwt-decode";

export const authLoginAction = (newData) => async dispatch => {
    try {
        dispatch({
            type: Types.SET_AUTH,
            payload: {
                isAuthintication: false,
                isLoading: true,
                data: null,
                token: null
            }
        });
        const res = await axios.post("/auth", newData);

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
            localStorage.setItem('token', res.data.token);

            dispatch({
                type: Types.SET_ALERT,
                payload: {
                    message: res.data.message,
                    error: false
                }
            })
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
            type: Types.SET_AUTH,
            payload: {
                isAuthintication: false,
                isLoading: false,
                data: null,
                token: null
            }
        });
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
        console.log({ token });
        if (token === null) {
            localStorage.setItem('token', '');
            token = '';
            dispatch({
                type: Types.SET_AUTH,
                payload: {
                    isAuthintication: false,
                    isLoading: false,
                    data: null,
                    token: token,
                }
            });
            return
        }
        var decoded = jwt_decode(token);
        dispatch({
            type: Types.SET_AUTH,
            payload: {
                isAuthintication: false,
                isLoading: true,
                data: null,
                token: token,
            }
        });
        const res = await axios.get(`/auth?id=${decoded.data?.id}`, {
            headers: {
                'Authorization': `${token}`
            }
        });
        console.log({ res });

        dispatch({
            type: Types.SET_AUTH,
            payload: {
                isAuthintication: true,
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