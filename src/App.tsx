import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./modules/SignIn/SignIn";
import { Home } from "./modules/Home/Home";
import { Library } from "./modules/Library/Library";
import { Wrapper } from "./common/components/Wrapper/Wrapper";
import { RequireAuth } from "./common/hooks/authProvider/authProvider";
import { Search } from "./modules/Search/Search";
import { Genre } from "modules/Genre/Genre";

import "./App.scss";

// при скролле категорий, когда пользователь доходит до конца, подгружаются ещё категории

export const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/signIn" />} />
        <Route path="/" element={<Wrapper/>}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
            <Route path="/library/:category" element={<Library/>}/>
            <Route path="/search" element={<Search />} />
            <Route path="/genre/:id" element={<Genre/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
