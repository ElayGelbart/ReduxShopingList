import { configureStore } from "@reduxjs/toolkit";
import paramedicSlice from "./slices/paramedicSlice";
const store = configureStore(paramedicSlice);

export default store;
