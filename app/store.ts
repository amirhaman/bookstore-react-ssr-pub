import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import dataReducer from '../src/features/Books/Books.Slice';

export const store = configureStore({
  reducer: {
    books: dataReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>