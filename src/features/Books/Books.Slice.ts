import { PayloadAction, current } from '@reduxjs/toolkit';
import { BookType } from '../../types/@types.book';
import { createSlice } from '@reduxjs/toolkit';

export interface BookState {
  books: BookType[]
}

const initialState: BookState = {
  books: []
}


const booksSlice = createSlice({
  name: 'booksReducer',
  initialState: initialState,
  reducers: {
    setBooks: (state : any, action: PayloadAction<BookState>) => {
      state.booksReducer = action.payload;
      return state
    },
    updateBook: (state : any, action: PayloadAction<BookState>) => {
      const currentState = current(state);
      const index = currentState.booksReducer.books.findIndex((item: BookType) => item.id === action.payload.books[0].id);
      if (index !== -1) {
        state.booksReducer.books[index] = action.payload.books[0];
        
      }
      return state;
    }
  }
});

export const { setBooks, updateBook } = booksSlice.actions;

export const selectBooks = (state: any) => state.booksReducer.books

export default booksSlice.reducer