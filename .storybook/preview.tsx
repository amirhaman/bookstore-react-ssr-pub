import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Preview } from '@storybook/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { ThemeProvider } from '@mui/material/styles';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { darkThemeMode } from '../src/styles/ThemeFactory/DarkTheme';
import { lightThemeMode } from '../src/styles/ThemeFactory/LightTheme';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import ThemeCustomModeProvider from "../src/styles/ThemeContext";
import '../src/index.css';
// import '!style-loader!css-loader!../src/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
    <ThemeCustomModeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Story />
          </BrowserRouter>
      </Provider>
    </ThemeCustomModeProvider>
    ),
    withThemeFromJSXProvider({
      themes: {
        light: lightThemeMode,
        dark: darkThemeMode,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
