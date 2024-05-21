import express from "express";
import { StaticRouter } from "react-router-dom/server";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import rootReducer from "../app/combinedReducers";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../src/styles/createEmotionCache";
import { ThemeFactory } from "../src/styles/ThemeFactory/ThemeFacrory";
import { legacy_createStore as createStore } from "redux";
import App from "../src/App";

const server = express();

server.use("/static", express.static(path.join(__dirname, "static")));

server.get("/*", (req, res) => {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const store: any = createStore(rootReducer);

  const html = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <ThemeProvider theme={ThemeFactory}>
        <CssBaseline />
        <Provider store={store}>
          {/* @ts-ignore */}
          <StaticRouter location={req.url} context={{}}>
            <App />
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const fullHtml = `
  <html lang="en" id="app">
  <head>
    <title>Redux Universal Example</title>
    ${emotionCss}
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    />
  </head>
  <body>
    <div id="root"></div>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // https://redux.js.org/usage/server-rendering#security-considerations
      const rootElement = document.getElementById('root');
      const htmlContent = "${encodeURIComponent(html)}";
      rootElement.innerHTML = decodeURIComponent(htmlContent);

      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
    </script>
    <script type="text/javascript" src="/static/bundle.js"></script>
  </body>
</html>
  `;

  res.send(fullHtml);
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
