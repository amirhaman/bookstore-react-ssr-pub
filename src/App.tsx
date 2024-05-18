import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Box, Grid } from "@mui/material";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import BookCreate from "./features/Books/Book/BookCreate/BookCreate";
import BooksEntry from "../src/features/Books/BooksEntry";
import BookDetail from "./features/Books/Book/BookDetail/BookDetail";
import { selectShoppingCart } from "./features/ShoppingCart/ShoppingCart.Slice";
import "./index.css";
import ShoppingCartEntry from "./features/ShoppingCart/ShoppingCartEntry";

const App = () => {
  const [mountStatus, setMountStatus] = useState(false);

  return (
    <Box className="w-full m-auto">
      <Grid container className="w-full flex flex-row items-center">
        <NavigationComponent>
          <Grid container className="max-w-4xl mx-auto">
            <Grid item sx={{ marginLeft: "auto" }} className="flex flex-row items-center">
              <BookCreate />
              <ShoppingCartEntry />
            </Grid>
          </Grid>
        </NavigationComponent>
      </Grid>
      <Routes>
        <Route path="/" element={<BooksEntry mountStatus={mountStatus} setMountStatus={setMountStatus} />} />
        <Route path="/book/:bookid" element={<BookDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
