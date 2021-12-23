import { createSlice } from "@reduxjs/toolkit";
const initState: State.CityW[] = [];
const DataSlice = createSlice({
  name: "data",
  initialState: initState,
  reducers: {
    setData: (state = [], action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
  },
});
export const { setData } = DataSlice.actions;
export default DataSlice;
