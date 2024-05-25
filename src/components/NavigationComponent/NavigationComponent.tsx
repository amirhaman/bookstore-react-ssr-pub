import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeModeContext } from "../../styles/ThemeContext";
import StyledNavigationComponent from "./StyledNavigationComponent";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import BookCreate from "../../features/Books/Book/BookCreate/BookCreate";
import ShoppingCartEntry from "../../features/ShoppingCart/ShoppingCartEntry";
import HomeIcon from "@mui/icons-material/Home";

export default function NavigationComponent() {
  const { currentTheme } = useContext<any>(ThemeModeContext);
  const themeUtility = useContext<any>(ThemeModeContext);
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
    <StyledNavigationComponent position="static" color="primary">
      <Toolbar className="w-full justify-center px-4">
      <Grid container className="max-w-4xl mx-auto">
            <Grid item className="flex items-center justify-center">
              <HomeIcon className="cursor-pointer" color="primary" sx={{ fontSize: "35px" }} onClick={() => navigate("/")} />
            </Grid>
            <Grid item sx={{ marginLeft: "auto" }} className="flex flex-row items-center">
              <BookCreate />
              <ShoppingCartEntry />
              <ButtonComponent id="ThemeMode_Button" className="m-0" size="small" color="primary" variant="text" ariaLabel="Theme Mode" onClick={() => handleThemeChange()}>
              {currentTheme === 'darkTheme' ? <LightModeIcon color="primary" data-animation={true} /> : <ModeNightIcon color="primary" data-animation={true} />}
            </ButtonComponent>
            </Grid>
          </Grid>  
      </Toolbar>
    </StyledNavigationComponent>
  );
}
