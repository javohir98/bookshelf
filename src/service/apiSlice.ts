import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBook } from '../types/type'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://no23.lavina.tech'}),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ({ Key, Sign }) => ({
                url: '/books',
                method: 'GET',
                headers: {
                    Key,
                    Sign
                }
            }),
            providesTags: ['Books']
        }),
        searchByTitle: builder.mutation({
            query: ({Key, Sign, title}) => ({
                url: `/books/:${title}`,
                method: 'GET',
                headers: {
                    Key,
                    Sign
                }
            }),
            transformResponse: (response: {data: IBook}, meta, args) => response.data,
            invalidatesTags: ['Books'],
        }),
        addBook: builder.mutation({
            query: ({Key, Sign, book}) => ({
                url: `/books`,
                method: 'POST',
                body: book,
                headers: {
                    Key,
                    Sign
                }
            }),
            invalidatesTags: ['Books']
        }),
        updateBook: builder.mutation({
            query: ({Key, Sign, id}) => ({
                url: `/books/:${id}`,
                method: 'PATCH',
                headers: {
                    Key,
                    Sign
                }
            }),
            invalidatesTags: ['Books']
        }),
        deleteBook: builder.mutation({
            query: ({Key, Sign, id}) => ({
                url: `/books/:${id}`,
                method: 'DELETE',
                headers: {
                    Key,
                    Sign
                }
            }),
            invalidatesTags: ['Books']
        }),
    })
})

export const {
    useGetBooksQuery,
    useSearchByTitleMutation,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = apiSlice
