import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./reducers/wheater";

const store = configureStore(DataSlice);
export default store;
