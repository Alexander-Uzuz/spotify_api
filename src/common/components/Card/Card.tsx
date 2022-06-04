import { BaseSyntheticEvent, FC, ForwardedRef, forwardRef } from "react";
import { Card } from "antd";
import PhotoBottomHome from "assets/images/photoBottomHome.png";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { changeCurrentItem } from "modules/Library/LibrarySlice";
import { getPlaylistItemThunk } from "modules/Playlist/playlistThunk";
import { IGetPlaylist } from "modules/Library/interfaces/IGetPlaylists";
import { IGetFollowingArtist } from "modules/Library/interfaces/IGetFollowingArtist";
import { IAlbum } from "modules/Library/interfaces/IGetSaveAlbums";
import "./Card.scss";

type Props = {
  // playlist:IGetPlaylist | IGetFollowingArtist | IAlbum;
  card: any;
  flag?: "album" | "playlists" | "artists";
  playing: boolean;
  setPlaying: (playing: boolean) => void;
};

const { Meta } = Card;

//т.к объект альбома это два ключа, а не один как плейлист и артист, пришлось делать костыли с флагами, исправить !!!

export const CardComponent: FC<Props> = ({
  card,
  flag,
  playing,
  setPlaying,
}) => {
  const dispatch = useAppDispatch();
  const { currentItemId } = useAppSelector((state) => state.lib);


  const handlePlay = () => {
    if(flag === 'playlists'){
      dispatch(changeCurrentItem(card.id));
      dispatch(
        getPlaylistItemThunk({
          token: localStorage.getItem("token"),
          id: card.id,
        })
      );
    }
    setPlaying(true);
  }
  const handleStop = () => setPlaying(false);

  return (
    <div className="card__wrapper">
      {playing && card.id === currentItemId ? (
        <svg
          onClick={handleStop}
          style={{display:'block'}}
          className="card__play"
          width="51"
          height="51"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="32" cy="32" r="30" fill="#4fd1d9"></circle>
          <path fill="#fff" d="M17 17h30v30H17z"></path>
        </svg>
      ) : (
        <svg
        onClick={handlePlay} 
        className="card__play" 
        width="51" height="51" 
        fill="#1ED7">
          <path
            d="M25.5 4.25C21.2971 4.25 17.1887 5.49629 13.6941 7.83127C10.1996 10.1663 7.47592 13.485 5.86755 17.368C4.25919 21.2509 3.83837 25.5236 4.65831 29.6457C5.47824 33.7678 7.50211 37.5542 10.474 40.526C13.4458 43.4979 17.2322 45.5218 21.3543 46.3417C25.4764 47.1616 29.7491 46.7408 33.632 45.1324C37.5149 43.5241 40.8337 40.8004 43.1687 37.3059C45.5037 33.8113 46.75 29.7029 46.75 25.5C46.75 22.7094 46.2003 19.9461 45.1324 17.368C44.0645 14.7898 42.4993 12.4472 40.526 10.474C38.5528 8.50074 36.2102 6.93547 33.632 5.86756C31.0539 4.79965 28.2906 4.25 25.5 4.25ZM21.3543 32.5V17.381L33 25.5L21.3543 32.5Z"
            fill="#1ED760"
          />
        </svg>
      )}
      <Card
        hoverable
        className="content__card"
        style={{ width: 231 }}
        cover={
          <img
            className="content__card-img"
            alt="example"
            src={
              flag === "album"
                ? card.album.images[0].url
                : card?.images[0]?.url
                ? card?.images[0]?.url
                : PhotoBottomHome
            }
          />
        }
      >
        <Meta title={flag === "album" ? card.album.name : card.name} />
      </Card>
    </div>
  );
};
