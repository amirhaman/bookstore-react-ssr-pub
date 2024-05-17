import React from 'react';
import { BookType } from '../../../types/@types.book';
import BookCard from './BookCard/BookCard';

type Props = BookType;

const Book = ({ id, name, price, description, category }: Props) => {
  return <BookCard id={id} name={name} price={price} category={category} description={description} allowEdit={false} />;
};

export default Book;
