import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Photos {
  albumId: Number;
  id: Number;
  title: String;
  url: string;
  thumbnailUrl: string;
}

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    photos: builder.query<Photos[], number | void>({
      query: (limit: number = 5) => ({
        url: "/photos",
        params: {
          _limit: limit
        }
      }),

    }),
  }),
});

export const { usePhotosQuery } = photosApi;






// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
// import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"
// import {Post} from "../interfaces/post.interface";
// import { HYDRATE } from 'next-redux-wrapper'
//
// export const postAPI = createApi({
//   reducerPath: "postAPI",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com"
//   }),
//   extractRehydrationInfo(action, { reducerPath }) {
//     if (action.type === HYDRATE) {
//       return action.payload[reducerPath]
//     }
//   },
//   endpoints: (
//     // @ts-ignore
//     build: EndpointBuilder
//   ) => ({
//     fetchAllUsers: build.query<Post[], number>({
//       query: (limit: number = 5) => ({
//         url: "/posts",
//         params: {
//           _limit: limit
//         }
//       })
//     })
//   })
// })
