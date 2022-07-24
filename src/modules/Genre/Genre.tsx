import { FC } from "react";
import Cards from "common/components/Cards/CardsContainer";
import { getCategorysPlaylistsThunk } from "./GenreThunk";
import { IPlaylist } from "modules/Home/interfaces/IInitialState";

type Props = {
  playlistGenre: IPlaylist[];
  loading: boolean;
  currentItemId: string;
  handlePlay: (id: string) => void;
  total: number;
  offset: number;
};

export const Genre: FC<Props> = (props) => {
  const { playlistGenre, loading, currentItemId, handlePlay, total, offset } =
    props;
  return (
    <Cards
      getCards={getCategorysPlaylistsThunk}
      loading={loading}
      playlist={playlistGenre}
      currentItemId={currentItemId}
      handlePlayer={handlePlay}
      total={total}
      offset={offset}
    />
  );
};

