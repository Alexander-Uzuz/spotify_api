import {FC} from "react";
import { Genres } from "./components/Genres/Genres";
import { Browse } from "./components/Browse/Browse";
import { useAppSelector } from "core/redux/hooks";
import { SongsTable } from "common/components/SongsTable/SongsTable";

type Props = {};

export const Search:FC<Props> = (props) => {
  const {search} = useAppSelector(state => state.player)

  return (
    <div>
      {search ? (
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
