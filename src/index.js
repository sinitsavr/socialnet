import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import "./index.css";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
      <Routes>
      <Route path="*" element={<App state={store.getState()}/> }>
        </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
    </React.StrictMode>
  );



// addPost('SamuraiJS');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// addPost('SamuraiJS');
reportWebVitals();
