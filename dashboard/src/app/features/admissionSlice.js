import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [], message: null, isLoading: false, error: false
}

export const admissionSlice = createSlice({
    name: 'admission',
    initialState: initialState,
    reducers: {
        get: (state) => state,
        post: (state, action) => {
            console.log(action);
            state.admission = action.payload
        },
    }
})

export const { get, post } = admissionSlice.actions