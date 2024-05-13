import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  }
});
export default store;


/**
 * Create Store
 *  - configureStore() 
 * 
 * Provide my Store to app
 * <Provider store={store} > 
 * 
 * Slice
 *  -createSlice({
 *    name:"",
 *    initialState:,
 *    reducers: {
 *    addItem : (state, action) => {state= action.payload},
 *    clearItem : (state) => {state= []},
 *    }
 *    })
 *    export const {addItem , clearItem} = cartSlice.actions
 *    export default cartSlice.reducer;
 * 
 * 
 * Put that slice in store
 *    {
 *      reducer: {
 *        cart: cartSlice,
 *        user: userSlice} }
 * 
 * PUT THAT SLICE IN STORE
 * */
