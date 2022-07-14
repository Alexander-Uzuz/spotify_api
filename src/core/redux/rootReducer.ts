import {combineReducers} from '@reduxjs/toolkit';
import signInSlice from 'modules/SignIn/SignInSlice';
import libSlice from 'modules/Library/LibrarySlice';
import playlistSlice from 'modules/Playlist/playlistSlice';
import searchSlice from 'modules/Search/SearchSlice';
import genreSlice from 'modules/Genre/GenreSlice';
import homeSlice from 'modules/Home/HomeSlice';



export const rootReducer = combineReducers({
   signIn:signInSlice,
   lib:libSlice,
   playlist:playlistSlice,
   search:searchSlice,
   genre:genreSlice,
   home:homeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;