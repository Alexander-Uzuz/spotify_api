import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { checkFollowPlaylistThunk,followPlaylistThunk, unfollowPlaylistThunk } from "modules/Info/FollowPlaylistThunk";
import { getPlaylistThunk } from "../../InfoThunk";
import {InfoPage} from 'modules/Info/components/InfoPage/InfoPage';

type Props = {};

export const InfoPlaylist: FC<Props> = (props) => {
  const token = localStorage.getItem("token") || "";
  const userId = useAppSelector(state => state.signIn.user.id);
  const {checkFollow} = useAppSelector(state => state.info)
  const dispatch = useAppDispatch();
  const { id } = useParams();


  const followPlaylist = () => {
    const data = {token,id: id ? id : ''};
    if(!checkFollow){
      dispatch(followPlaylistThunk(data))
    }else{
      dispatch(unfollowPlaylistThunk(data))
    }
  }


  useEffect(() => {
    dispatch(
      checkFollowPlaylistThunk({
        token,
        playlistId: id ? id : '',
        userId: userId ? userId : "",
      })
    );
  }, []);


  const getPlaylist = (id:string) => dispatch(getPlaylistThunk({ token, id }));

  return <InfoPage handleDispatch={getPlaylist} handleFollow={followPlaylist} type="playlist"/>
};
