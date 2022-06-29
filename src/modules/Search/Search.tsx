import React from "react";
import { Genres } from "./components/Genres/Genres";
import { Browse } from "./components/Browse/Browse";
import { useAppSelector } from "core/redux/hooks";
import { SongsTable } from "./components/SongsTable/SongsTable";

type Props = {};

export const Search = (props: Props) => {
  const { searchData } = useAppSelector((state) => state.search);

  return (
    <div>
      {searchData ? (
        <div className="search__active">
          <SongsTable />
        </div>
      ) : (
        <div className="search__default">
          <Genres />
          <Browse />
        </div>
      )}
    </div>
  );
};
