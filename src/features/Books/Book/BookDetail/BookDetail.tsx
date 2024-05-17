import React, { useEffect, useState } from 'react';
import { BookType } from '../../../../types/@types.book';
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks';
import { selectBooks } from '../../Books.Slice';
import { setBooks } from '../../Books.Slice';
import { useParams } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import { booksData } from '../../../../data/books';

const BookDetail = () => {
  const books = useAppSelector(selectBooks);
  const [book, setBook] = useState<BookType>();
  const { bookid } = useParams<{ bookid: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (books.length === 0) {
      const data = booksData;
      dispatch(setBooks({ books: data.data }));
      const selectedBook = data.data?.filter((book: BookType) => book?.id === bookid)[0];
      setBook(selectedBook);
    } else {
      const selectedBook = books?.filter((book: BookType) => book?.id === bookid)[0];
      setBook(selectedBook);
    }
  }, [books]);

  return book ? (
    <BookCard id={book.id} name={book.name} price={book.price} category={book.category} description={book.description} allowEdit={true} />
  ) : (
    <p>We couldn't find the book.</p>
  );
};

export default BookDetail;
