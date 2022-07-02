import {FC, useContext} from 'react';
import { Typography, List, Spin } from 'antd';
import {ReactComponent as SpinnerLogo} from 'assets/icons/spinner.svg';
import { useAppSelector, useAppDispatch } from 'core/redux/hooks';
import { MusicPlayerContext } from "core/context/PlayerContext";
import { changeCurrentItem } from "modules/Genre/GenreSlice";
import { CardComponent } from 'common/components/Card/Card';
import {getPlaylistsItemThunk} from 'modules/Playlist/playlistThunk';

const {Title} = Typography;

type Props = {
}

//1. Реализация Если у элемента preview__url === null перейти к следующему элементу
//2. Когда в плеере обновляются песни, что-то сделать)

export const Genre:FC<Props> = () => {
  const {playlistGenre, currentItemId} = useAppSelector(state => state.genre)
  const {playing, setPlaying} = useContext(MusicPlayerContext);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');

  const handlePlay = (id:string) => {
    dispatch(changeCurrentItem(id));
    dispatch(getPlaylistsItemThunk({token,id}))
    setPlaying(true)
  }

  return (
    <div>
      <Title style={{color:'#FFF'}}>Сборник плейлистов:</Title>
      {
        playlistGenre.length ?
        <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 6,
            }}
            dataSource={playlistGenre}
            renderItem={(item) => (
              <List.Item>
                <CardComponent
                  card={item}
                  playing={playing}
                  setPlaying={setPlaying}
                  handlePlay={handlePlay}
                  currentItemId={currentItemId}
                />
              </List.Item>
            )}
          />
        : <Spin indicator={<SpinnerLogo style={{fontSize:'200px'}}/>} className="spin"/>
      }
    </div>
  )
}