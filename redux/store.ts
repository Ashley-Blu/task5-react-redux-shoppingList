import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    lists: listReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
