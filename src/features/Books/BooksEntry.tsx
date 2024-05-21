import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectBooks } from "./Books.Slice";
import { setBooks } from "./Books.Slice";
import Books from "./Books/Books";
import { booksData } from "../../data/books";
import { selectShoppingCart } from "../ShoppingCart/ShoppingCart.Slice";

type Props = {
  mountStatus: boolean;
  setMountStatus: (mountStatus: boolean) => void;
};

export default function BooksEntry({ mountStatus, setMountStatus }: Props) {
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (books.length === 0 && !mountStatus) {
      setMountStatus(true);
      const data = booksData;
      dispatch(setBooks({ books: data.data }));
    }
  }, [books]);

  return <Books />;
}
