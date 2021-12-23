import { createSlice } from "@reduxjs/toolkit";
import updatePersonalData from "../actions/updatePersonalData";
import updateItemsData from "../actions/updateItemsData";
import { fullEquipmentList as itemInitState } from "../../db/items";

const initState = {
  items: itemInitState,
  userData: { fullName: "Guest", workplace: "Medical Place", date: "today" },
};
const paramedicSlice = createSlice({
  name: "items",
  initialState: initState,
  reducers: { updatePersonalData, updateItemsData },
});

export default paramedicSlice;
export const updatePersonalAction = paramedicSlice.actions.updatePersonalData;
export const updateItemsAction = paramedicSlice.actions.updateItemsData;
