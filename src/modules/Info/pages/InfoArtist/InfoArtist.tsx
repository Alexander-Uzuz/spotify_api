import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { FC,useContext } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { changeCurrentItem } from "../../InfoSlice";
import {getArtistThunk, getTopTracksArtistThunk,getArtistAlbumsThunk,getArtistAlbumItemThunk} from '../../InfoThunk';
import { InfoPage } from "modules/Info/components/InfoPage/InfoPage";

type Props = {};

export const InfoArtist:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { setPlaying } = useContext(MusicPlayerContext);
  const { offset,albums } = useAppSelector((state) => state.info);
  const token = localStorage.getItem("token") || "";

  const getDataArtistPage = (id:string) =>{
    dispatch(getArtistThunk({token,id}))
    dispatch(getTopTracksArtistThunk({token,id}))
    dispatch(getArtistAlbumsThunk({token,id,offset}))   
  }

  const handlePlayer = (id:string) =>{
    const img = albums.find(item => item.id === id)?.img;
    dispatch(changeCurrentItem(id))
    dispatch(getArtistAlbumItemThunk({token,id, img: img ? img : ''}))
    setPlaying(true)
  }

  return <InfoPage handleDispatch={getDataArtistPage} handlePlayer={handlePlayer}/>
};
