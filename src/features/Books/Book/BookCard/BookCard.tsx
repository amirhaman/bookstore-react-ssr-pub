import React, { useState, useReducer } from "react";
import { Box, Grid } from "@mui/material";
import ButtonComponent from "../../../../components/ButtonComponent/ButtonComponent";
import BookTextField from "./../BookFields/BookTextField";
import BookDelete from "../BookDelete";
import { BookType } from "../../../../types/@types.book";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { selectBooks } from "../../Books.Slice";
import { setBooks, updateBook } from "../../Books.Slice";
import { setShoppingCartItem } from "../../../ShoppingCart/ShoppingCart.Slice";

interface Props extends BookType {
  allowEdit: boolean;
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_OBJECT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const BookCard = ({ id, name, price, category, description, allowEdit }: Props) => {
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState<boolean>(false);
  const [updatedFields, transmit] = useReducer(reducer, {
    id: id,
    name: name,
    price: price,
    description: description,
    category: category,
  });

  const handlePreBookEdit = async () => {
    setEditMode(!editMode);
  };

  const handleFinalBookEdit = async (id: string) => {
    const book = books.filter((book: BookType) => book.id === id);
    const newBook: BookType = { ...book[0], ...updatedFields };
    dispatch(updateBook({ books: [newBook] }));
    setEditMode(!editMode);
  };

  const handleFinalBookDelete = async (id: string) => {
    const newBooks = books.filter((book: BookType) => book.id !== id);
    dispatch(setBooks({ books: newBooks }));
    navigate("/");
  };

  // come back to this and implement type safty
  const handleFieldChangeReducer = (e: any, field: string) => {
    const value = e.target.value;
    const updatedObject = { [field]: value };
    transmit({ type: "UPDATE_OBJECT", payload: updatedObject });
  };

  const navigateToSingleBook = (id: string) => {
    navigate(`/book/${id}`);
  };

  const handleAddToCart = (id: string) => {
    const book = books.filter((book: BookType) => book.id === id)[0];
    dispatch(setShoppingCartItem(book));
  };

  return (
    <Grid item className="w-full max-w-4xl p-2 border-2 border-white rounded-lg border-solid " sx={{ margin: "0 auto", marginBottom: "1rem" }}>
      <Grid container className="w-full">
        <Grid item className="w-full">
          <BookTextField editMode={editMode} variant="h1" type="text" name="name" value={name} updatedValue={updatedFields.name} label="Name" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "name")} />
        </Grid>
        <Grid item className="w-full">
          <BookTextField editMode={editMode} variant="body1" type="text" name="price" value={updatedFields.price} updatedValue={updatedFields.price} label="Price" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "price")} />
        </Grid>
        <Grid item className="w-full">
          <BookTextField editMode={editMode} variant="body1" type="text" name="category" value={category} updatedValue={updatedFields.category} label="Category" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "category")} />
        </Grid>
        {allowEdit && (
          <Grid item className="w-full">
            <BookTextField editMode={editMode} variant="body1" type="textarea" rows={5} name="description" value={description} updatedValue={updatedFields.description} label="Description" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "description")} />
          </Grid>
        )}
      </Grid>
      <Grid container className="w-full">
        <Grid item className="w-full flex flex-row justify-end mr-4">
          {allowEdit ? (
            editMode ? (
              <Box>
                <ButtonComponent id={`save-changes-${id}`} variant="outlined" color="success" onClick={() => handleFinalBookEdit(id)}>
                  Save Changes
                </ButtonComponent>
                <ButtonComponent id={`cancel-${id}`} variant="outlined" color="primary" onClick={() => setEditMode(false)}>
                  Cancel
                </ButtonComponent>
              </Box>
            ) : (
              <>
                <ButtonComponent id={`edit-book-${id}`} variant="outlined" color="primary" onClick={() => handlePreBookEdit()}>
                  Edit Book
                </ButtonComponent>
                <BookDelete id={`delete-book-${id}`} action="delete" label="Delete Book" variant="outlined" color="warning" onClick={() => handleFinalBookDelete(id)} />
              </>
            )
          ) : (
            <>
              <ButtonComponent id={`view-book-${id}`} variant="contained" color="primary" onClick={() => navigateToSingleBook(id)}>
                View Book
              </ButtonComponent>
              <ButtonComponent id={`add-book-to-cart-${id}`} variant="contained" color="primary" onClick={() => handleAddToCart(id)}>
                Add to Cart
              </ButtonComponent>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookCard;
