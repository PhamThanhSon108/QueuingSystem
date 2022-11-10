import { configureStore } from "@reduxjs/toolkit";
import profileStore from "../modules/authentication/profileStore";
import { deviceStore } from "../modules/device/deviceStore";
import { serviceStore } from "../modules/service/serviceStore";
import { travelSlice } from "./TravelSlice";

export const store = configureStore({
  reducer: {
    profile: profileStore.reducer,
    device: deviceStore.reducer,
    service: serviceStore.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
