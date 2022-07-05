import {FC, useContext} from 'react';
import { useAppSelector, useAppDispatch } from 'core/redux/hooks';
import { MusicPlayerContext } from "core/context/PlayerContext";
import { changeCurrentItem } from "modules/Genre/GenreSlice";
import { Cards } from 'common/components/Cards/Cards';
import {getPlaylistsItemThunk} from 'modules/Playlist/playlistThunk';


type Props = {}

export const Genre:FC<Props> = () => {
  const {playlistGenre, currentItemId, loading} = useAppSelector(state => state.genre)
  const {setPlaying} = useContext(MusicPlayerContext);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');

  const handlePlay = (id:string) => {
    dispatch(changeCurrentItem(id));
    dispatch(getPlaylistsItemThunk({token,id}))
    setPlaying(true)
  }

  return (
      <Cards loading={loading} playlist={playlistGenre} currentItemId={currentItemId} handlePlayer={handlePlay}/>
  )
}