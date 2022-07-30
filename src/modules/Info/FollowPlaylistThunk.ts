import {
  checkFollowPlaylist,
  followPlaylist,
  unfollowPlaylist,
} from "api/follow/followPlaylist";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { switchFollowing } from "./InfoSlice";
import { message } from "antd";

export const checkFollowPlaylistThunk = createAsyncThunk(
  "info/checkFollowPlaylists",
  async function (
    data: { token: string; playlistId: string; userId: string },
    { rejectWithValue }
  ) {
    try {
      const response = await checkFollowPlaylist(data);

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const followPlaylistThunk = createAsyncThunk(
  "info/followPlaylist",
  async function (
    data: { token: string; id: string },
    { rejectWithValue, dispatch }
  ) {
    try {
      const response = await followPlaylist(data);

      dispatch(switchFollowing());

      message.success("Добавлено в медиатеку !");

      return response;
    } catch (err: any) {
      message.warning(`Уппс, ошибка!!!!: ${err.message}`);

      return rejectWithValue(err.message);
    }
  }
);

export const unfollowPlaylistThunk = createAsyncThunk(
  "info/unfollowPlaylist",
  async function (
    data: { token: string; id: string },
    { rejectWithValue, dispatch }
  ) {
    try {
      const response = await unfollowPlaylist(data);

      dispatch(switchFollowing());

      message.success("Удалено из медиатеки");

      return response;
    } catch (err: any) {
      message.warning(`Уппс, ошибка!!!!: ${err.message}`);
      return rejectWithValue(err.message);
    }
  }
);
