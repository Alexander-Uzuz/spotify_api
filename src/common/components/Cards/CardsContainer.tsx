import { FC, useContext, useEffect, memo } from "react";
import { useInfinityScroll } from "common/hooks/useInfinityScroll";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useAppDispatch } from "core/redux/hooks";
import { useParams } from "react-router-dom";
import {Cards} from './Cards';

type Props = {
  getCards?:(data:{token:string, id:string, offset:number}) => any;
  total:number;
  offset:number;
  title?: string;
  loading: boolean;
  playlist: {
    id: string;
    img: string;
    name: string;
    description?: string | undefined;
  }[];
  currentItemId: string;
  handlePlayer: (id: string) => void;
};

const CardsInnerContaner: FC<Props> = (props) => {
  const { title, loading, playlist, currentItemId, handlePlayer, total,offset, getCards } = props;
  const { playing, setPlaying } = useContext(MusicPlayerContext);
  const {loadingData, setLoadingData} = useInfinityScroll();
  const token = localStorage.getItem("token") || "";
  const { id } = useParams();
  const handlePlay = (id:string) => handlePlayer(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loadingData && total > offset && getCards) {
      setTimeout(async () => {
        await dispatch(
          getCards({ token, id: id ? id : "", offset })
        );
        setLoadingData(false);
      },1500)
    }
  }, [loadingData]);

  return (
    <>
      <Cards
        loading={loading}
        title={title}
        playlist={playlist}
        playing={playing}
        setPlaying={setPlaying}
        handlePlay={handlePlay}
        currentItemId={currentItemId}
      />
    </>
  );
};


export default memo(CardsInnerContaner)

