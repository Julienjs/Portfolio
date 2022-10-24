import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./router/App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar/Navbar";
import DarkMode from "./components/DarkMode/DarkMode";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Bot from "./components/Bot";
import { StyledEngineProvider } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <DarkMode />
      {/* <Header /> */}
      <Navbar />
      <App />
      {/* <Bot /> */}
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
