import React from "react";

import "./App.css";
import LeftNavbar from "./components/LeftNavbar";
import Main from "./components/Main";
import RightNavbar from "./components/RightNavbar";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <LeftNavbar />
        <RightNavbar />
      </div>
      <Main />
    </div>
  );
}

export default App;
