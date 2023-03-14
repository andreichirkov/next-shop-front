import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { photosApi } from "../services/PostService";
import {createWrapper} from "next-redux-wrapper";

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [photosApi.reducerPath]: photosApi.reducer
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(photosApi.middleware),
// })

const rootReducer = combineReducers({
  [photosApi.reducerPath]: photosApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(photosApi.middleware),
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
// export type RootState = ReturnType<Store['getState']>;








// import { combineReducers } from "redux"
// import { postAPI } from "../services/PostService"
// import { configureStore } from "@reduxjs/toolkit"
// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
//
// const rootReducer = combineReducers({
//   [postAPI.reducerPath]: postAPI.reducer
// })
//
// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware().concat(postAPI.middleware)
//   })
// }
//
// export type AppStore = ReturnType<typeof setupStore>
// export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = AppStore['dispatch']
//
export const wrapper = createWrapper(setupStore)
