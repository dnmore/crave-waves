import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import categoriesReducer from './cart/categoriesSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    
  },
});


export default store;