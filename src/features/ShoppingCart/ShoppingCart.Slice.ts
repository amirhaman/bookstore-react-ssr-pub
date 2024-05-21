import { PayloadAction, current } from "@reduxjs/toolkit";
import { ShoppingCartType } from "../../types/@types.shopping.cart";
import { BookType } from "../../types/@types.book";
import { createSlice } from "@reduxjs/toolkit";

export interface ShippingCartState {
  shoppingCart: ShoppingCartType;
}

const initialState: ShippingCartState = {
  shoppingCart: {
    items: [],
    shipping: {
      streetAddress: "",
      unitNumber: "",
      state: "",
      country: "",
    },
  },
};

const shoppingCartSlice = createSlice({
  name: "shoppingCartReducer",
  initialState: initialState,
  reducers: {
    setShoppingCartItem: (state: any, action: PayloadAction<BookType>) => {
      const currentState = current(state);
      state.shoppingCart.items = [...currentState.shoppingCart.items, action.payload];
      return state;
    },
    setShoppingCartShippingAddress: (state: any, action: PayloadAction<ShippingCartState>) => {
      state.shoppingCartReducer.shoppingCart = action.payload;
      return state;
    },
  },
});

export const { setShoppingCartItem, setShoppingCartShippingAddress } = shoppingCartSlice.actions;

export const selectShoppingCart = (state: any) => state.shoppingCartReducer.shoppingCart;

export default shoppingCartSlice.reducer;
