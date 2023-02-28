
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env.REACT_APP_API_URL);

export const admissionApi = createApi({
    reducerPath: 'admissionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}/admission`,
        prepareHeaders: (headers, { getState }) => {
            return headers
        }
    }),
    tagTypes: ['admission'],
    endpoints: (builder) => ({
        applyStudent: builder.mutation({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['admission']
        }),
        getStudent: builder.query({
            query: (page) => {
                console.log({ page });
                return `?page=${1}`
            },
            providesTags: ['admission']
        })
    }),
})
export const { useApplyStudentMutation, useGetStudentQuery } = admissionApi