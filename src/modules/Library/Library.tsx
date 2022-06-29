import { FC, useEffect, useContext } from "react";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import {
  getPlaylistsThunk,
  getFollowingArtistsThunk,
  getSaveAlbumsThunk,
} from "./LibraryThunk";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useLocation } from "react-router-dom";
import { Typography, List, Spin } from "antd";
import { CardComponent } from "common/components/Card/Card";
import {ReactComponent as SpinnerLogo} from 'assets/icons/spinner.svg';
import { getPlaylistsItemThunk, getArtistItemThunk, getAlbumItemThunk } from "modules/Playlist/playlistThunk";
import { changeCurrentItem } from "modules/Library/LibrarySlice";
import "./Library.scss";

type Props = {

};

const { Title } = Typography;

export const Library:FC<Props> = () => {
  const {playing, setPlaying} = useContext(MusicPlayerContext);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');
  const { pathname } = useLocation();
  const { playlist, error, loading,flag,currentItemId } = useAppSelector((state) => state.lib);

  useEffect(() => {
    if (error) {
      localStorage.removeItem("token");
    }
  }, [error]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (pathname === "/library/playlists") {
      dispatch(getPlaylistsThunk(token));
    }

    if (pathname === "/library/artists") {
      dispatch(getFollowingArtistsThunk(token));
    }

    if (pathname === "/library/albums") {
      dispatch(getSaveAlbumsThunk(token));
    }
  }, [pathname]);

  const handlePlay = (id:string) => {
    dispatch(changeCurrentItem(id));
    const data = {token,id};

    if(flag === "playlists"){
      dispatch(getPlaylistsItemThunk(data))
    }
    if(flag === "artists"){
      dispatch(getArtistItemThunk(data))
    }
    if(flag === "album"){
      dispatch(getAlbumItemThunk(data))
    }
    setPlaying(true);
  }



  return (
    <>
      {!loading ? (
        <>
          <Title level={2} className="content__title">
            {pathname === "/library/playlists"
              ? "Playlists"
              : pathname === "/library/artists"
              ? "Artists"
              : "Albums"}
          </Title>
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
            dataSource={playlist}
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
        </>
      ) : (
        <Spin indicator={<SpinnerLogo style={{fontSize:'200px'}}/>} className="spin"/>
      )}
    </>
  );

}


