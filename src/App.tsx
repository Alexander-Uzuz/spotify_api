import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { SignIn } from "./modules/SignIn/SignIn";
import { Home } from "./modules/Home/Home";
import { Library } from "./modules/Library/Library";
import { Wrapper } from "./common/components/Wrapper/Wrapper";
import { RequireAuth } from "./common/hooks/authProvider";
import { Search } from "./modules/Search/Search";
import { Genre } from "modules/Genre/Genre";
import { signInThunk } from "modules/SignIn/SignInThunk";

import "./App.scss";

export const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<Wrapper />}>
          {/* <Route path="/signIn" element={<SignIn />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<RequireAuth />}>
            <Route path="/library/:category" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/genre/:id" element={<Genre />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
