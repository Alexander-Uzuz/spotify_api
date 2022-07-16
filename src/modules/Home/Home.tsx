import { FC, useEffect, useContext, useCallback } from "react";
import { Typography } from "antd";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useAppSelector } from "core/redux/hooks";
import { useAppDispatch } from "core/redux/hooks";
import { getFeaturedPlaylistsThunk } from "modules/Home/HomeThunk";
import { getPlaylistsItemThunk } from "modules/Playlist/playlistThunk";
import { changeCurrentItem } from "./HomeSlice";
import { signInThunk } from "modules/SignIn/SignInThunk";
import SpotifyBg from "assets/images/spotify_background.jpg";
import "./Home.scss";
import { Cards } from "common/components/Cards/Cards";

const { Title } = Typography;

type Props = {};

export const Home: FC<Props> = (props) => {
  const { currentItemId, featuredPlaylist, loading, offset, total } =
    useAppSelector((state) => state.home);
  const { setPlaying } = useContext(MusicPlayerContext);
  const { _error, user } = useAppSelector((state) => state.signIn);
  const token = localStorage.getItem("token") || "";
  const dispatch = useAppDispatch();

  console.log("home");

  useEffect(() => {
    const hash = window.location.hash;
    const _token = hash.split("&")[0].split("=")[1];
    if (!_error) {
      (async function () {
        console.log('Ошибки нет')
        window.location.hash = "";
        if (!token && hash) {
          window.localStorage.setItem("token", _token);
          await dispatch(signInThunk(_token));
        }
        if (token) {
          await dispatch(signInThunk(token));
        }
      })();
    } else {
      console.log('Ошибка есть')
      localStorage.removeItem("token");
    }
  }, []);

  useEffect(() => {
    if (user.id) {
      dispatch(getFeaturedPlaylistsThunk({ token, offset }));
    }
  }, [user.id]);

  const handlePlay = (id: string) => {
    dispatch(changeCurrentItem(id));
    dispatch(getPlaylistsItemThunk({ token, id }));
    setPlaying(true);
  };

  return (
    <>
      {featuredPlaylist.length ? (
        <Cards
          playlist={featuredPlaylist}
          loading={loading}
          title="Playlists spotify"
          currentItemId={currentItemId}
          handlePlayer={handlePlay}
          total={total}
          offset={offset}
          getCards={getFeaturedPlaylistsThunk}
        />
      ) : (
        <div className="home__unauth" style={{ textAlign: "center" }}>
          <Title
            className="home__title"
            level={1}
            style={{
              color: "#FFF",
            }}
          >
            Добро пожаловать в Spotify! Авторизируйтесь и наслаждайтесь лучшим
            музыкальным сервисом вместе с нами.
          </Title>
          <img src={SpotifyBg} alt="spotify_img" />
        </div>
      )}
    </>
  );
};
