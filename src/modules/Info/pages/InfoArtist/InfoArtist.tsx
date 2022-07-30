import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { FC,useContext, useEffect } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { changeCurrentItem } from "../../InfoSlice";
import { useParams } from "react-router-dom";
import {getArtistThunk, getTopTracksArtistThunk,getArtistAlbumsThunk,getArtistAlbumItemThunk} from '../../InfoThunk';
import {checkFollowArtistThunk,followArtistThunk,unfollowArtistThunk} from '../../FollowArtistThunk';
import { InfoPage } from "modules/Info/components/InfoPage/InfoPage";

type Props = {};

export const InfoArtist:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { setPlaying } = useContext(MusicPlayerContext);
  const {checkFollow} = useAppSelector(state => state.info)
  const { offset,albums } = useAppSelector((state) => state.info);
  const token = localStorage.getItem("token") || "";
  const { id } = useParams();

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

  const followArtist = () => {
    const data = {token,id: id ? id : ''};
    if(!checkFollow){
      dispatch(followArtistThunk(data))
    }else{
      dispatch(unfollowArtistThunk(data))
    }
  }

  useEffect(() => {
    dispatch(
      checkFollowArtistThunk({
        token,
        artistId: id ? id : '',
      })
    );
  }, []);

  return <InfoPage handleDispatch={getDataArtistPage} handlePlayer={handlePlayer} handleFollow={followArtist} type="artist"/>
};
