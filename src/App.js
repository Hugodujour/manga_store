import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

import './default.scss'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>

        <Route exact path="/" element={<HomepageLayout />}>
          <Route path="" element={<Homepage />} />
        </Route >

        <Route path="/" element={<MainLayout />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
