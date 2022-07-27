import { SongsTable } from "common/components/SongsTable/SongsTable";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { Typography } from "antd";
import { FC,useEffect,useContext } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useParams } from "react-router-dom";
import { InfoHeader } from "../../components/InfoHeader/InfoHeader";
import { changeCurrentItem } from "../../InfoSlice";
import {getArtistThunk, getTopTracksArtistThunk,getArtistAlbumsThunk,getArtistAlbumItemThunk} from '../../InfoThunk';
import Cards from 'common/components/Cards/CardsContainer';

type Props = {};

const {Title} = Typography;

export const InfoArtist:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { setPlaying } = useContext(MusicPlayerContext);
  const { loading, offset,total,albums,currentItemId } = useAppSelector((state) => state.info);
  const token = localStorage.getItem("token") || "";
  const { id } = useParams();

  useEffect(() => {
    if(id){
        dispatch(getArtistThunk({token,id}))
        dispatch(getTopTracksArtistThunk({token,id}))
        dispatch(getArtistAlbumsThunk({token,id,offset}))
    }
  }, []);

  const handlePlayer = (id:string) =>{
    const img = albums.find(item => item.id === id)?.img;
    dispatch(changeCurrentItem(id))
    dispatch(getArtistAlbumItemThunk({token,id, img: img ? img : ''}))
    setPlaying(true)
  }

  return (
    <>
      {!loading ? (
        <div>
          <InfoHeader />
            <Title style={{color:'#FFF', marginTop:'30px'}}>Лучшие треки:</Title>
          <SongsTable/>
          <Cards
          total={total}
          offset={offset}
          title='Альбомы этого исполнителя'
          loading={loading}
          playlist={albums}
          currentItemId={currentItemId}
          handlePlayer={handlePlayer}
          type="album"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
