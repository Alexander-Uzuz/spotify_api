import {combineReducers} from '@reduxjs/toolkit';
import signInSlice from 'modules/SignIn/SignInSlice';
import libSlice from 'modules/Library/LibrarySlice';
import playerSlice from 'modules/Player/playerSlice';
import searchSlice from 'modules/Search/SearchSlice';
import genreSlice from 'modules/Genre/GenreSlice';
import homeSlice from 'modules/Home/HomeSlice';



export const rootReducer = combineReducers({
   signIn:signInSlice,
   lib:libSlice,
   player:playerSlice,
   search:searchSlice,
   genre:genreSlice,
   home:homeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;