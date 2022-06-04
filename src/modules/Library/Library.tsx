import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import {
  getPlaylistsThunk,
  getFollowingArtistsThunk,
  getSaveAlbumsThunk,
} from "./LibraryThunk";
import { useLocation } from "react-router-dom";
import { Typography, List, Spin } from "antd";
import { CardComponent } from "common/components/Card/Card";
import { IGetFollowingArtist } from "./interfaces/IGetFollowingArtist";
import {ReactComponent as SpinnerLogo} from 'assets/icons/spinner.svg';
import { IGetPlaylist } from "./interfaces/IGetPlaylists";
import "./Library.scss";

type Props = {
  playing:boolean;
  setPlaying:(playing:boolean) => void;
};

const { Title } = Typography;

export const Library:FC<Props> = ({playing,setPlaying}) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { playlists, artists, albums, error, loading } = useAppSelector(
    (state) => state.lib
  );

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
            dataSource={
              pathname === "/library/playlists"
                ? playlists
                : pathname === "/library/artists"
                ? artists
                : albums
            }
            renderItem={(item: IGetFollowingArtist | IGetPlaylist) => (
              <List.Item>
                <CardComponent
                  card={item}
                  flag={pathname === "/library/albums" ? "album" : (pathname === '/library/playlists' ? 'playlists' : 'artists')}
                  playing={playing}
                  setPlaying={setPlaying}
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


