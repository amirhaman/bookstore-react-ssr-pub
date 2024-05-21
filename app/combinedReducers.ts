import booksReducer from "../src/features/Books/Books.Slice";
import shoppingCartReducer from "../src/features/ShoppingCart/ShoppingCart.Slice";

import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({ booksReducer: booksReducer, shoppingCartReducer: shoppingCartReducer });

export default rootReducer;
