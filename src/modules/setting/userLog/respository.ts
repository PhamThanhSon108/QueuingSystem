import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const getUserLogs = createAsyncThunk("userLog/list", async () => {
  const userLogDocs = await getDocs(collection(db, "userLogs"));
  let result: any = [];
  userLogDocs.forEach((doc: object | any) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.exists()) {
      result.push(doc.data());
    }
  });
  return result;
});
