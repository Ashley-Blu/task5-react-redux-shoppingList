import { configureStore } from "@reduxjs/toolkit";
import listReducer from './listSlice'

export const store = configureStore({
    reducer: {
        lists: listReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatcher = typeof store.dispatch