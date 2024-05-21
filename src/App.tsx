import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import BookCreate from "./features/Books/Book/BookCreate/BookCreate";
import BooksEntry from "../src/features/Books/BooksEntry";
import BookDetail from "./features/Books/Book/BookDetail/BookDetail";
import ShoppingCartEntry from "./features/ShoppingCart/ShoppingCartEntry";
import HomeIcon from "@mui/icons-material/Home";

const App = () => {
  const [mountStatus, setMountStatus] = useState(false);
  const navigate = useNavigate();

  return (
    <Box className="w-full m-auto">
      <Grid container className="w-full flex flex-row items-center">
        <NavigationComponent>
          <Grid container className="max-w-4xl mx-auto">
            <Grid item className="flex items-center justify-center">
              <HomeIcon className="cursor-pointer" color="primary" sx={{ color: "primary.light", fontSize: "35px" }} onClick={() => navigate("/")} />
            </Grid>
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
