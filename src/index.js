import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";

import Firebase, { FirebaseContext } from "./components/Firebase";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  rootElement
);
