import { PayloadAction, current } from '@reduxjs/toolkit';
import { ShoppingCartType } from '../../types/@types.shopping.cart';
import { createSlice } from '@reduxjs/toolkit';

export interface ShippingCartState {
  shoppingCart: ShoppingCartType
}

const initialState: ShippingCartState = {
  shoppingCart: {
    items: [],
    shipping: {
      streetAddress: "",
      unitNumber: "",
      state: "",
      country: ""
    }
  }
}


const shoppingCartSlice = createSlice({
  name: 'shoppingCartReducer',
  initialState: initialState,
  reducers: {
    setShoppingCartItem: (state : any, action: PayloadAction<ShippingCartState>) => {
      const currentState = current(state);
      console.log("before currentState", currentState)
      state.shoppingCartReducer.shoppingCart.items = {...currentState.shoppingCartReducer.shoppingCart.items , ...action.payload};
      console.log("after currentState", currentState)
      return state
    },
    setShoppingCartShippingAddress: (state : any, action: PayloadAction<ShippingCartState>) => {
      // const shoppingCart = current(state);
      state.shoppingCartReducer.shoppingCart = action.payload;
      return state
    }
  }
});

export const { setShoppingCartItem, setShoppingCartShippingAddress } = shoppingCartSlice.actions;

export const selectShoppingCart = (state: any) => state.shoppingCartReducer.shoppingCart

export default shoppingCartSlice.reducer