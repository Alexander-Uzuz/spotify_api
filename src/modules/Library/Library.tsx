import { FC, useEffect, useContext } from "react";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import {
  getPlaylistsThunk,
  getFollowingArtistsThunk,
  getSaveAlbumsThunk,
} from "./LibraryThunk";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useLocation } from "react-router-dom";
import {
  getPlaylistsItemThunk,
  getArtistItemThunk,
  getAlbumItemThunk,
} from "modules/Playlist/playlistThunk";
import { changeCurrentItem } from "modules/Library/LibrarySlice";
import { Cards } from "common/components/Cards/Cards";
import "./Library.scss";

type Props = {};


export const Library: FC<Props> = () => {
  const { setPlaying } = useContext(MusicPlayerContext);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();
  const { playlist, error, loading, flag, currentItemId, offset, total } = useAppSelector(
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

  const handlePlayer = (id: string) => {
    dispatch(changeCurrentItem(id));
    const data = { token, id };

    if (flag === "playlists") {
      dispatch(getPlaylistsItemThunk(data));
    }
    if (flag === "artists") {
      dispatch(getArtistItemThunk(data));
    }
    if (flag === "album") {
      dispatch(getAlbumItemThunk(data));
    }
    setPlaying(true);
  };

  return (
      <Cards
        title={
          pathname === "/library/playlists"
            ? "Playlists"
            : pathname === "/library/artists"
            ? "Artists"
            : "Albums"
        }
        loading={loading}
        playlist={playlist}
        currentItemId={currentItemId}
        handlePlayer={handlePlayer}
        total={total} 
        offset={offset}
      />
  );
};
