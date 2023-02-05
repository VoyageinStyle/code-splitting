import React from "react";
import logo from "../logo.svg";

export const Layout = ({children}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to React</h1>
      </header>
      <div>
        {children}
      </div>
    </div>
  );
};
