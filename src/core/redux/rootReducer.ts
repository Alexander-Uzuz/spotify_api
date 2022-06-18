import {combineReducers} from '@reduxjs/toolkit';
import signInSlice from 'modules/SignIn/SignInSlice';
import libSlice from 'modules/Library/LibrarySlice';
import playlistSlice from 'modules/Playlist/playlistSlice';
import searchSlice from 'modules/Search/SearchSlice';


export const rootReducer = combineReducers({
   signIn:signInSlice,
   lib:libSlice,
   playlist:playlistSlice,
   search:searchSlice,
});

export type RootState = ReturnType<typeof rootReducer>;