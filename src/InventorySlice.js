import { createSlice } from '@reduxjs/toolkit'

const InventorySlice = createSlice({
  name: 'inventory',
  initialState:{inventory:[]},
  reducers: {
    addItem(state, action) {
      const itemIndex = state.inventory.findIndex(
        (item) => item.title === action.payload.title
      );
      if (itemIndex >= 0) {
        state.inventory[itemIndex].quantity += 1;
      } else {
        state.inventory.push({ ...action.payload, quantity: 1 });
      }
    },
  },
})

export const { addItem } = InventorySlice.actions
export default InventorySlice.reducer