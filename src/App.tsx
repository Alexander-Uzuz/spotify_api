import {FC} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "modules/Home/HomeContainer";
import  Library  from "./modules/Library/LibraryContainer";
import { Wrapper } from "./common/components/Wrapper/Wrapper";
import { RequireAuth } from "./common/hooks/authProvider";
import {InfoPlaylist} from './modules/Info/pages/InfoPlaylist/InfoPlaylist';
import { Search } from "./modules/Search/Search";
import { InfoArtist } from "modules/Info/pages/InfoArtist/InfoArtist";

import  Genre  from "modules/Genre/GenreContainer";
import "./App.scss";


export const App:FC = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<Wrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<RequireAuth />}>
            <Route path="/library/:category" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/genre/:id" element={<Genre />} />
            <Route path="playlist/:id" element={<InfoPlaylist/>}/>
            <Route path="/artist/:id" element={<InfoArtist/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
