import React, { useState } from "react";
import { useContext } from "react";
import { ThemeModeContext } from "./styles/ThemeContext";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import BookCreate from "./features/Books/Book/BookCreate/BookCreate";
import BooksEntry from "../src/features/Books/BooksEntry";
import BookDetail from "./features/Books/Book/BookDetail/BookDetail";
import ShoppingCartEntry from "./features/ShoppingCart/ShoppingCartEntry";
import HomeIcon from "@mui/icons-material/Home";

const App = () => {
  const { currentTheme } = useContext<any>(ThemeModeContext);
  const themeUtility = useContext<any>(ThemeModeContext);
  const [mountStatus, setMountStatus] = useState(false);
  const navigate = useNavigate();

  const handleThemeChange = async () => {
    themeUtility
      .muiWrapperUtils()
      .then(() => {
        localStorage.setItem('THEME_MODE', currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
      })
      .catch((err: any) => {
        return err;
      });
  };

  return (
    <Box className="w-full m-auto">
      <Grid container className="w-full flex flex-row items-center">
        <NavigationComponent>
          <Grid container className="max-w-4xl mx-auto">
            <Grid item className="flex items-center justify-center">
              <HomeIcon className="cursor-pointer" color="primary" sx={{ fontSize: "35px" }} onClick={() => navigate("/")} />
            </Grid>
            <Grid item sx={{ marginLeft: "auto" }} className="flex flex-row items-center">
              <ShoppingCartEntry />
              <BookCreate />
              <ButtonComponent id="ThemeMode_Button" className="m-0" size="small" color="primary" variant="text" ariaLabel="Theme Mode" onClick={() => handleThemeChange()}>
              {currentTheme === 'darkTheme' ? <LightModeIcon color="primary" data-animation={true} /> : <ModeNightIcon color="primary" data-animation={true} />}
            </ButtonComponent>
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
