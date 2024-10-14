import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import categoriesReducer from './categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    
  },
});


export default store;