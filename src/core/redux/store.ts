import {configureStore, PreloadedState} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const preloadedUserState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : {username:null,avatarUrl:null,id:null};

const preloadedState:PreloadedState<any> = {
    signIn:{
        signInCards:[],
        user:{
            username:preloadedUserState.name,
            id:preloadedUserState.id,
            avatarUrl:preloadedUserState.avatarUrl
        },
        _error:null,
        loading:false
    },
    player:{
        player:{
            basic:[localStorage.getItem('currentTrack') ? [JSON.parse(localStorage.getItem('currentTrack') || '')] : []],
            extra:[]
        } ,
        currentTrack:localStorage.getItem('currentTrack') ? JSON.parse(localStorage.getItem('currentTrack') || '') : null ,
        flag:localStorage.getItem('flag') ? localStorage.getItem('flag') : "artists"
    },
}

export const store = configureStore({
    reducer:rootReducer,
    preloadedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;