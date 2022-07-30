import {followArtist,unfollowArtist, checkFollowArtist} from 'api/follow/followArtist';
import { message } from 'antd';
import { switchFollowing } from './InfoSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkFollowArtistThunk = createAsyncThunk(
  "info/checkFollowArtist",
  async function (
    data: { token: string; artistId: string },
    { rejectWithValue }
  ) {
    try {
      const response = await checkFollowArtist(data);

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const followArtistThunk = createAsyncThunk(
    "info/followArtist",
    async function (
      data: { token: string; id: string },
      { rejectWithValue, dispatch }
    ) {
      try {
        const response = await followArtist(data);
        console.log(response,'response')
  
        dispatch(switchFollowing());
  
        message.success("Добавлено в медиатеку !");
  
        return response;
      } catch (err: any) {
        if(err.message !== 'Unexpected end of JSON input'){
          message.warning(`Уппс, ошибка: ${err.message}`);
  
          return rejectWithValue(err.message);
        }else{
          message.success("Добавлено в медиатеку !");
          dispatch(switchFollowing());
        }
      }
    }
  );
  
  export const unfollowArtistThunk = createAsyncThunk(
    "info/unfollowArtist",
    async function (
      data: { token: string; id: string },
      { rejectWithValue, dispatch }
    ) {
      try {
        const response = await unfollowArtist(data);
  
        dispatch(switchFollowing());
  
        message.success("Удалено из медиатеки");
  
        return response;
      } catch (err: any) {
        if(err.message !== 'Unexpected end of JSON input'){
          message.warning(`Уппс, ошибка: ${err.message}`);
  
          return rejectWithValue(err.message);
        }else{
          message.success("Удалено из медиатеки!");
          dispatch(switchFollowing());
        }
      }
    }
  );