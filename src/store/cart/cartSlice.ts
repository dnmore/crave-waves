import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CategoryItem } from "../../types/definitions";

interface cartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
}

const initialState: cartState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (!existingCartItem) return cartItems;

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems:CartItem[], productToClear: CartItem):CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

const updateCartTotals = (state: cartState) => {
  state.cartCount = state.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  state.cartTotal = state.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen(state, action:PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action:PayloadAction<CategoryItem>) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
      updateCartTotals(state);
    },
    removeItemFromCart(state, action:PayloadAction<CartItem>) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
      updateCartTotals(state);
    },
    clearItemFromCart(state, action:PayloadAction<CartItem>) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
      updateCartTotals(state);
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartCount = 0;
      state.cartTotal = 0;
    },
  },
});


export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
