import { FC, useEffect, useContext, useCallback } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useAppSelector } from "core/redux/hooks";
import { useAppDispatch } from "core/redux/hooks";
import { getFeaturedPlaylistsThunk } from "modules/Home/HomeThunk";
import { getPlaylistsItemThunk } from "modules/Player/playerThunk";
import { changeCurrentItem } from "./HomeSlice";
import { signInThunk } from "modules/SignIn/SignInThunk";
import { Home } from "./Home";
import { useNavigate } from "react-router-dom";

type Props = {};

const HomeContainer: FC<Props> = (props) => {
  const { currentItemId, featuredPlaylist, loading, offset, total } =
    useAppSelector((state) => state.home);
  const { setPlaying } = useContext(MusicPlayerContext);
  const { error } = useAppSelector((state) => state.home);
  const { _error, user } = useAppSelector((state) => state.signIn);
  const token = localStorage.getItem("token") || "";
  const dispatch = useAppDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    const _token = hash.split("&")[0].split("=")[1];
    if (!_error) {
      (async function () {
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
      localStorage.removeItem("token");
    }
  }, [_error]);

  useEffect(() => {
    if (user.id) {
      dispatch(getFeaturedPlaylistsThunk({ token, offset }));
    }
  }, [user.id]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem("token");
    }
  }, [error]);

  const handlePlay = useCallback(
    (id: string) => {
      dispatch(changeCurrentItem(id));
      dispatch(getPlaylistsItemThunk({ token, id }));
      setPlaying(true);
    },
    [token]
  );

  return (
    <Home
      featuredPlaylist={featuredPlaylist}
      loading={loading}
      currentItemId={currentItemId}
      handlePlayer={handlePlay}
      total={total}
      offset={offset}
      getCards={getFeaturedPlaylistsThunk}
    />
  );
};

export default HomeContainer;
