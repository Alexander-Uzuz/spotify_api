import { IInitialState } from "modules/Playlist/interfaces/IPlaylist"

export const setPending = (state:IInitialState) => {
    state.error = null;
    state.loading = false;
}

export const setRejected = (state:IInitialState, action:string) =>{
    state.error = action;
    state.loading = false;
}