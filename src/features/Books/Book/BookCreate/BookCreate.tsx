import React, { useState, useReducer } from "react";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { selectBooks } from "../../Books.Slice";
import { Box, Grid, Typography } from "@mui/material";
import { setBooks } from "../../Books.Slice";
import BookTextField from "../BookFields/BookTextField";
import ButtonComponent from "../../../../components/ButtonComponent/ButtonComponent";
import ModalComponent from "../../../../components/ModalComponent.tsx/ModalComponent";
import { v4 as uuidv4 } from "uuid";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_OBJECT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialState = {
  id: "",
  name: "",
  price: "",
  description: "",
  category: "",
};

export const BookCreate = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const [createModalStatus, setCreateModalStatus] = useState(false);
  const [updatedFields, transmit] = useReducer(reducer, initialState);

  const handleFieldChangeReducer = (e: React.ChangeEvent<HTMLInputElement> | any, field: string) => {
    const value = e.target.value;
    const updatedObject = { [field]: value };
    transmit({ type: "UPDATE_OBJECT", payload: updatedObject });
  };

  const handleFinalBookCreate = () => {
    dispatch(setBooks({ books: [...books, updatedFields] }));
    resetForm();
    setCreateModalStatus(false);
  };

  const resetForm = () => {
    const newBook = { id: Math.floor(new Date().getTime() / 1000) + "-" + uuidv4() };
    transmit({ type: "UPDATE_OBJECT", payload: newBook });
  };

  const handleOpen = () => {
    resetForm();
    setCreateModalStatus(true);
  };

  const handleClose = () => {
    transmit({ type: "UPDATE_OBJECT", payload: initialState });
    setCreateModalStatus(false);
  };

  return (
    <Box className="max-w-4xl m-auto mr-2">
      <ButtonComponent className="" id="create-book" variant="outlined" color="success" onClick={handleOpen}>
        Create Book
      </ButtonComponent>
      <ModalComponent open={createModalStatus} onClose={handleClose} ariaLabelledBy="modal-book-confirm-action" ariaDescribedBy="modal-book-confirm-action">
        <Box className="max-w-4xl h-full flex flex-col justify-center items-center m-auto">
          <Typography variant="h1" component="h1" color="primary">Add a new book.</Typography>
          <Grid container className="w-full">
            <Grid item className="w-full">
              <BookTextField editMode={true} variant="h1" type="text" name="name" value={updatedFields.name} updatedValue={updatedFields.name} label="Name" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "name")} />
            </Grid>
            <Grid item className="w-full">
              <BookTextField editMode={true} variant="h1" type="text" name="price" value={updatedFields.price} updatedValue={updatedFields.price} label="Price" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "price")} />
            </Grid>
            <Grid item className="w-full">
              <BookTextField editMode={true} variant="body1" type="text" name="category" value={updatedFields.category} updatedValue={updatedFields.category} label="Category" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "category")} />
            </Grid>
            <Grid item className="w-full">
              <BookTextField editMode={true} variant="body1" type="textarea" rows={5} name="description" value={updatedFields.description} updatedValue={updatedFields.description} label="Description" handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, "description")} />
            </Grid>
          </Grid>
          <Grid container className="w-full flex flex-row justify-end m-2">
            <Grid item>
              <ButtonComponent className="mr-4" id="create-book" variant="outlined" color="success" onClick={handleFinalBookCreate}>
                Create Book
              </ButtonComponent>
            </Grid>
            <Grid item>
              <ButtonComponent className="mr-4" id="cancel-book" variant="outlined" color="primary" onClick={handleClose}>
                Cancel
              </ButtonComponent>
            </Grid>
          </Grid>
        </Box>
      </ModalComponent>
    </Box>
  );
};

export default BookCreate;
