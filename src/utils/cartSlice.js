import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((i) => i.id === action.payload);
      if (index !== -1) state.items.splice(index, 1);
    },
    clearItems: state => {
      state.items = [];
    }
  }
});
export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
