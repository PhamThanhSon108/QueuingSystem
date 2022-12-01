import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formatDate } from "../../../view/ReportPage/Components/TableReport";
import { getUserLogs } from "./respository";
export const userLogStore = createSlice({
  name: "userLogStore",
  initialState: { userLogs: [], loading: false },
  reducers: {
    // fetchUserLogs: (
    //   state,
    //   action: PayloadAction<{
    //     userLogs: object[] | any;
    //   }>
    // ) => Object.assign(state, { u: action.payload.userLogs }),
  },
  extraReducers: (builder) => {
    builder.addCase(getUserLogs.fulfilled, (state: any, action) => {
      console.log(action.payload, ["action cc"]);
      if (action.payload) {
        const userLogs = action.payload.map((log: any) => {
          return { ...log, createdTime: formatDate(log?.createdAt?.seconds) };
        });

        state.userLogs = userLogs;
      }
      // state.status = "success";
    });
  },
});
