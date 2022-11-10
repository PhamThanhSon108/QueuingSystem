import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const serviceStore = createSlice({
  name: "serviceStore",
  initialState: { services: [] },
  reducers: {
    fetchService: (
      state,
      action: PayloadAction<{
        services: object[] | any;
      }>
    ) => Object.assign(state, { services: action.payload.services }),
  },
});
