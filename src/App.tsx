import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./modules/SignIn/SignIn";
import { Home } from "./modules/Home/Home";
import { Library } from "./modules/Library/Library";
import { Wrapper } from "./common/components/Wrapper/Wrapper";
import { Search } from "./modules/Search/Search";
import "./App.scss";




export const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/library" element={<Library/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  );
}

