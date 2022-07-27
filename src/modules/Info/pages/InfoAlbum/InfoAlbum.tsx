import { SongsTable } from "common/components/SongsTable/SongsTable";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { FC, useEffect, useContext } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useParams } from "react-router-dom";
import { InfoHeader } from "../../components/InfoHeader/InfoHeader";
import { changeCurrentItem } from "../../InfoSlice";
import { getAlbumThunk, getArtistAlbumsThunk,getArtistAlbumItemThunk } from "../../InfoThunk";
import Cards from "common/components/Cards/CardsContainer";

type Props = {};


export const InfoAlbum: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { setPlaying } = useContext(MusicPlayerContext);
  const { loading, offset, total, albums, currentItemId, artistId } =
    useAppSelector((state) => state.info);
  const token = localStorage.getItem("token") || "";
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getAlbumThunk({ token, id }));
    }
  }, [id]);

    useEffect(() => {
      if(artistId.length){
          dispatch(getArtistAlbumsThunk({token,id:artistId,offset}))
      }
    }, [id,artistId])

  const handlePlayer = (id: string) => {
    const img = albums.find(item => item.id === id)?.img;
    dispatch(changeCurrentItem(id))
    dispatch(getArtistAlbumItemThunk({token,id, img:img ? img : ''}))
    setPlaying(true);
  };

  return (
    <>
      {!loading ? (
        <div>
          <InfoHeader />
          <SongsTable flag />
          <Cards
            total={total}
            offset={offset}
            title="Другие альбомы этого исполнителя"
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
