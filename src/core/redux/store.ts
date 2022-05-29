import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const store = configureStore({
    reducer:rootReducer,
    // preloadedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;