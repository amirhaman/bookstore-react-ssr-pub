import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { selectBooks } from "../Books.Slice";
import { BookType } from "../../../types/@types.book";
import Book from "../Book/Book";
import { Grid } from "@mui/material";

export default function Books() {
  const books = useAppSelector(selectBooks);

  return (
    <Grid container className="w-full flex flex-col p-2">
      {books?.map((book: BookType) => (
        <Book key={book.id} id={book.id} name={book.name} price={book.price} description={book.description} category={book.category} />
      ))}
    </Grid>
  );
}
