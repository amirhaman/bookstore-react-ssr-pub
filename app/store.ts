import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import booksReducer from '../src/features/Books/Books.Slice';
import shoppingCartReducer from '../src/features/ShoppingCart/ShoppingCart.Slice';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({booksReducer: booksReducer, shoppingCartReducer: shoppingCartReducer});

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>