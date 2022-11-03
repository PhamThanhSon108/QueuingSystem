import { configureStore } from "@reduxjs/toolkit";
import profileStore from "../modules/authentication/profileStore";
import { travelSlice } from "./TravelSlice";

export const store = configureStore({
  reducer: {
    profile: profileStore.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
