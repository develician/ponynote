import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "components/App";
import configure from "store/configure";
import { Provider } from "react-redux";

const Root = () => {
  return (
    <Provider store={configure}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
