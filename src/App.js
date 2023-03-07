import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Header from "./components";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

import './default.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLayout />}>
        <Route path="" element={<Homepage />} />
        <Route path="/registration" element={<Registration />} />
        </Route >
      </Routes>
    </div>
  );
}

export default App;
