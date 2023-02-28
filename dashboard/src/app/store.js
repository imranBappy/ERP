
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { admissionApi } from './services/admissionApi'
import { admissionSlice } from './features/admissionSlice'




const rootReducer = combineReducers({
    [admissionApi.reducerPath]: admissionApi.reducer,
    admissionReducer: admissionSlice.reducer
})



export default configureStore({
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(admissionApi.middleware)
    },
    reducer: rootReducer
})