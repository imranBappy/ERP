import * as Types from './types';

export const alertAction = (newData) => async dispatch => {
    dispatch({
        type: Types.SET_ALERT,
        payload: newData
    })
};