import {combineReducers} from '@reduxjs/toolkit';
import signInSlice from 'modules/SignIn/SignInSlice';
import libSlice from 'modules/Library/LibrarySlice';


export const rootReducer = combineReducers({
   signIn:signInSlice,
   lib:libSlice
});

export type RootState = ReturnType<typeof rootReducer>;