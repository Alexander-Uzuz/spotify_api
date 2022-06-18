import React from "react";
import { Genres } from "./components/Genres/Genres";
import { Browse } from "./components/Browse/Browse";
import {SongsTable} from './components/SongsTable/SongsTable';

type Props = {};

export const Search = (props: Props) => {
  return (
    <div>
      <div className="search__active">
        <SongsTable/>
      </div>
      {/* <div className="search__default">
        <Genres />
        <Browse />
      </div> */}
    </div>
  );
};
