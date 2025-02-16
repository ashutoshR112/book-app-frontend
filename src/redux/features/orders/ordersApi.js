
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getbaseURL from'../../../utils/baseURL';
// import { getOrderByEmail } from '../../../../../backend/src/orders/order.controller';


const ordersApi=createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
         baseUrl: `${(getbaseURL())}/api/orders`, 
         credentials: 'include',
        }),
        tagTypes:["Orders"],
        endpoints: (builder) => ({
            createOrder:(builder.mutation)({
                query:(newOrder)=>({
                    url: "/",
                    method: "POST",
                    body: newOrder,
                    credentials: 'include',
                })
            }),
            getOrderByEmail:(builder.query)({
                query:(email)=>({
                    url:`email/${email}`,
                }),
                providesTags:["Orders"]
            })

        })
});

export const {useCreateOrderMutation,useGetOrderByEmailQuery}=ordersApi;

export default ordersApi;