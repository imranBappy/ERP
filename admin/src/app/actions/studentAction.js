import * as Types from './types';
import axios from 'axios';

export const studentGetAction = () => async dispatch => {
    try {
        dispatch({
            type: Types.SET_STUDENT,
            payload: {
                isLoading: true,
                data: []
            }
        })
        const res = await axios.get('/student');
        
        dispatch({
            type: Types.SET_STUDENT,
            payload: {
                isLoading: false,
                data: res.data
            }
        })
    } catch (error) {
        dispatch({
            type: Types.SET_STUDENT,
            payload: {
                isLoading: false,
                data: []
            }
        })
        dispatch({
            type: Types.SET_ALERT,
            payload: {
                message: error.message,
                error: true
            }
        })
    }
}


// export const departmentPostAction = (newData, data) => async dispatch => {
//     try {
//         const res = await axios({
//             method: "post",
//             url: "/department",
//             headers: { "Content-Type": "multipart/form-data" },
//             data: newData,
//         });
//         dispatch({
//             type: Types.SET_ALERT,
//             payload: {
//                 message: res.data.message,
//                 error: res.data.error
//             }
//         })
//     } catch (error) {
//         dispatch({
//             type: Types.SET_ALERT,
//             payload: {
//                 message: error.message,
//                 error: true
//             }
//         })
//     }
// }
