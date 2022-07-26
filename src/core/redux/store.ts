import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';


const preloadedState:any = {
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