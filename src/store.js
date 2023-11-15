import { configureStore } from "@reduxjs/toolkit";
import InventoryReducer from "./InventorySlice";
export const store = configureStore({
  reducer: {
    inventory:InventoryReducer
  },
})