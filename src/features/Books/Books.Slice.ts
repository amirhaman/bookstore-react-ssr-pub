import { PayloadAction, current } from '@reduxjs/toolkit';
import { BookType } from '../../types/@types.book';
import { createSlice } from '@reduxjs/toolkit';

export interface BookState {
  books: BookType[]
}

const initialState: BookState = {
  books: []
}


const dataSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    setBooks: (state : any, action: PayloadAction<BookState>) => {
      return state = action.payload;
    },
    updateBook: (state : any, action: PayloadAction<BookState>) => {
      const books = current(state);
      const index = books.books.findIndex((item: BookType) => item.id === action.payload.books[0].id);
      if (index !== -1) {
        state.books[index] = action.payload.books[0];
        return state;
      }

    }
  }
});

export const { setBooks, updateBook } = dataSlice.actions;

export const selectBooks = (state: any) => state.books

export default dataSlice.reducer