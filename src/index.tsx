import React from "react";
import { hydrateRoot } from 'react-dom/client';
import rootReducer from '../app/combinedReducers';
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { ThemeFactory } from "../src/styles/ThemeFactory/ThemeFacrory";
import createEmotionCache from "./styles/createEmotionCache";
import "./index.css";
import App from "./App";

interface CustomWindow extends Window {
  __PRELOADED_STATE__: any;
}

const customWindow = window as unknown as CustomWindow;

const store = createStore(rootReducer, customWindow.__PRELOADED_STATE__);
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
