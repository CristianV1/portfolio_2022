import logo from "./logo.svg";
import "./App.css";
import { Distribution } from "./layouts/Distribution";
import Section from "./components/Section";
import { Router, Routes, Route } from "react-router-dom";
import { createRef, useRef } from "react";

function App() {
  return (
    <div className="App">
      <Distribution />
    </div>
  );
}

export default App;
