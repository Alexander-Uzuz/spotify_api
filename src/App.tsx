import React,{useEffect, useLayoutEffect, useRef} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {useAudioPlayer} from './common/hooks/useAudioPlayer'
import { SignIn } from "./modules/SignIn/SignIn";
import { Home } from "./modules/Home/Home";
import { Library } from "./modules/Library/Library";
import { Wrapper } from "./common/components/Wrapper/Wrapper";
import { RequireAuth } from "./common/hooks/authProvider/authProvider";
import { Search } from "./modules/Search/Search";
import "./App.scss";

export const App = () => {
  const {curTime,duration,playing,setPlaying,setClickedTime} = useAudioPlayer();



  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/signIn" />} />
        <Route path="/" element={<Wrapper curTime={curTime} duration={duration} playing={playing} setPlaying={setPlaying} setClickedTime={setClickedTime}/>}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/library" element={<Library ref={ref}/>} /> */}
            <Route path="/library/:category" element={<Library playing={playing} setPlaying={setPlaying}/>}/>
            <Route path="/search" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
