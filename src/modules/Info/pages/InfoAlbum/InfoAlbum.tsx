import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { FC, useContext } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { changeCurrentItem } from "../../InfoSlice";
import {
  getAlbumThunk,
  getArtistAlbumsThunk,
  getArtistAlbumItemThunk,
} from "../../InfoThunk";
import { InfoPage } from "modules/Info/components/InfoPage/InfoPage";

type Props = {};

export const InfoAlbum: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { setPlaying } = useContext(MusicPlayerContext);
  const { albums, offset, artistId} = useAppSelector((state) => state.info);
  const token = localStorage.getItem("token") || "";

  const getAlbum = (id: string) => dispatch(getAlbumThunk({ token, id }));
  const getArtistAlbums = () => dispatch(getArtistAlbumsThunk({ token, id: artistId, offset}));

  const handlePlayer = (id: string) => {
    const img = albums.find((item) => item.id === id)?.img;
    dispatch(changeCurrentItem(id));
    dispatch(getArtistAlbumItemThunk({ token, id, img: img ? img : "" }));
    setPlaying(true);
  };
  return <InfoPage handleDispatch={getAlbum} handlePlayer={handlePlayer} handleExtraDispatch={getArtistAlbums} type="album"/>
};
