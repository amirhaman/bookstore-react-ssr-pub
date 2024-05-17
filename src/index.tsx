import React from "react";
import { hydrateRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import dataReducer from "../src/features/Books/Books.Slice";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { ThemeFactory } from "../src/styles/ThemeFactory/ThemeFacrory";
import createEmotionCache from "./styles/createEmotionCache";
import App from "./App";
interface CustomWindow extends Window {
  __PRELOADED_STATE__: any;
}

const customWindow = window as unknown as CustomWindow;

const store = createStore(dataReducer, customWindow.__PRELOADED_STATE__);
const cache = createEmotionCache();

delete customWindow.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root')!,
  <CacheProvider value={cache}>
      <ThemeProvider theme={ThemeFactory}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
);
