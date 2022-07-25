import { FC } from "react";
import  Cards  from "common/components/Cards/CardsContainer";
import "./Library.scss";
import { IPlaylist } from "modules/Home/interfaces/IInitialState";

type Props = {
    title:string;
    playlist: IPlaylist[];
    loading: boolean;
    currentItemId: string;
    handlePlayer: (id:string) => void;
    total: number;
    offset: number;
    type:'playlist' | 'artist' | 'album'
};


export const Library: FC<Props> = (props) => {
    const {title,playlist,loading,currentItemId,handlePlayer,total,offset,type} = props;


  return (
      <Cards
        title={title}
        loading={loading}
        playlist={playlist}
        currentItemId={currentItemId}
        handlePlayer={handlePlayer}
        total={total} 
        offset={offset}
        type={type}
      />
  );
};


