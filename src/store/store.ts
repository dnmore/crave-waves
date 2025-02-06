import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import categoriesReducer from "./categories/categoriesSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
