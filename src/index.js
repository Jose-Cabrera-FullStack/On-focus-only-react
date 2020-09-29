import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import throttle from "lodash/throttle";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { saveState } from "./Utils/localStorage";
import reducer from "./reducers";

import initialState from "./initialState";

import App from "./routes/App";

let composeEnhacers;

composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhacers(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      shoppingcar: store.getState().shoppingcar,
      user: store.getState().user,
    });
  }, 1000)
);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById("app")
);
