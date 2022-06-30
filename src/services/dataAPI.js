import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const API_URI = "http://localhost:3000";

export const dataAPI = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URI,
    }),
    endpoints: (builder) => ({
        assignments: builder.query({
            query: () => "/assignments",
        }),
        addAssignment: builder.mutation({
            query: (assignment) => ({
                url: "/assignments",
                method: "POST",
                body: assignment,
            })
        }),
        updateAssignment: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/assignments/${id}`,
                method: "PUT",
                body: rest,
            }),
        }),
        deleteAssignment: builder.mutation({
            query: ({ id }) => ({
                url: `/assignments/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useAssignmentsQuery,
    useAddAssignmentMutation,
    useUpdateAssignmentMutation,
    useDeleteAssignmentMutation,
} = dataAPI;