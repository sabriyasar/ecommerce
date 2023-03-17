import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://5fc9346b2af77700165ae514.mockapi.io/'
    }),
    endpoints: build => ({
        getProductsAll: build.query({
            query:() => ({
                url: '/products'
            })
        }),
        getProductById: build.query({
            query:(id) => ({
                url: `/products/${id}`
            })
        }),
        getProductByCategory: build.query({
            query:(name) => ({
                url: `/products/name/${name}`
            })
        })
    })
})

export const {
    useGetProductsAllQuery,
    useGetProductByIdQuery,
    useGetProductByCategoryQuery
} = productsApi
