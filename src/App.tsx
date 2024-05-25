import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import BooksEntry from "../src/features/Books/BooksEntry";
import BookDetail from "./features/Books/Book/BookDetail/BookDetail";

const App = () => {
  const [mountStatus, setMountStatus] = useState(false);

  return (
    <Box className="w-full m-auto">
      <Grid container className="w-full flex flex-row items-center">
        <NavigationComponent />
      </Grid>
      <Routes>
        <Route path="/" element={<BooksEntry mountStatus={mountStatus} setMountStatus={setMountStatus} />} />
        <Route path="/book/:bookid" element={<BookDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
