import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
function App() {
  return (
    <React.Fragment>
      <Product />
    </React.Fragment>
  );
}

export default App;
