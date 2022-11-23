import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App.js";
import reducers from "./reducers";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
