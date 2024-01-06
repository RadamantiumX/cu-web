import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    credentials: 'include', // Cookie
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
   let result = await baseQuery(args, api, extraOptions)
   
   // Denied access
   if(result?.error?.originalStatus === 403){
      console.log('sending refresh token')
      // send refresh token to get new acces token
      const refreshResult = await baseQuery('/refresh', api, extraOptions) // Refresh ENDPOINT
      console.log(refreshResult)

      if (refreshResult?.data) {
        const user = api.getState().auth.user // Obtenemos el usuario

        // store the new token
        api.dispatch(setCredentials({...refreshResult.data, user}))

        // retry original query with new access token
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logOut())
      }
   }

   return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})