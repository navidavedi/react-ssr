import "@babel/polyfill";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import App from "./src/App";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};

  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
      {/* <h1>Hey there</h1> */}
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();
  const html = `
    <html>
      <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      <link href="./assets/css/styles.min.css" rel="stylesheet" type="text/css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./client_bundle.js"></script>
      </body>
    </html>`;

  res.send(html);
});

app.listen(PORT, () => console.log(`App listening at port-> ${PORT}`));

// import "babel-polyfill";
// import express from "express";
// import { matchRoutes } from "react-router-config";
// import { createStore } from "redux";
// import rootReducer from "./src/reducers/index";
// // import proxy from "express-http-proxy";
// import Routes from "./src/routes";
// import renderer from "./src/helper/renderer";
// // import createStore from "./src/helpers/createStore";

// const port = process.env.PORT || 4000;
// const app = express();

// app.use(express.static("build"));

// app.get(["/*/:param", "*"], (req, res) => {
//   const ParamValue = req.params.param ? req.params.param : null;

//   const store = createStore(rootReducer);
//   console.log(store.getState(), "dude");

//   const promises = matchRoutes(Routes, req.path)
//     .map(({ route }) => {
//       return route.loadData ? route.loadData(store, ParamValue) : null;
//     })
//     .map(promise => {
//       if (promise) {
//         return new Promise((resolve, reject) => {
//           promise.then(resolve).catch(resolve);
//         });
//       }
//     });

//   Promise.all(promises).then(() => {
//     const context = {};
//     const content = renderer(req, store, context);

//     if (context.url) {
//       return res.redirect(301, context.url);
//     }

//     // check if 404
//     if (context.notFound) {
//       res.status(404);
//     }
//     res.send(content);
//   });
// });

// app.listen(port, () => {
//   console.log(`Running on Port ${port}`);
// });
