import {FC, useContext} from 'react';
import { useAppSelector, useAppDispatch } from 'core/redux/hooks';
import { MusicPlayerContext } from "core/context/PlayerContext";
import { changeCurrentItem } from "modules/Genre/GenreSlice";
import { Genre } from './Genre';
import {getPlaylistsItemThunk} from 'modules/Player/playerThunk';

type Props = {}

const GenreContainer:FC<Props> = () => {
  const {playlistGenre, currentItemId, loading} = useAppSelector(state => state.genre)
  const {setPlaying} = useContext(MusicPlayerContext);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token") || "";
  const {total, offset} = useAppSelector(state => state.genre)


  const handlePlay = (id:string) => {
    dispatch(changeCurrentItem(id));
    dispatch(getPlaylistsItemThunk({token,id}))
    setPlaying(true)
  }

  return (
      <Genre
      loading={loading} 
      playlistGenre={playlistGenre} 
      currentItemId={currentItemId} 
      handlePlay={handlePlay} 
      total={total} 
      offset={offset}/>
  )
}

export default GenreContainer;