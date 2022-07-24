import { FC } from "react";
import  Cards  from "common/components/Cards/CardsContainer";
import "./Library.scss";
import { IPlaylist } from "modules/Home/interfaces/IInitialState";

type Props = {
    pathname:string;
    playlist: IPlaylist[];
    loading: boolean;
    currentItemId: string;
    handlePlayer: (id:string) => void;
    total: number;
    offset: number;  
};


export const Library: FC<Props> = (props) => {
    const {pathname,playlist,loading,currentItemId,handlePlayer,total,offset} = props;

  return (
      <Cards
        title={
          pathname === "/library/playlists"
            ? "Playlists"
            : pathname === "/library/artists"
            ? "Artists"
            : "Albums"
        }
        loading={loading}
        playlist={playlist}
        currentItemId={currentItemId}
        handlePlayer={handlePlayer}
        total={total} 
        offset={offset}
      />
  );
};


