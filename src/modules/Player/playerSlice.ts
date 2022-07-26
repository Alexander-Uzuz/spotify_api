import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces/IPlayer";
import {
  getPlaylistsItemThunk,
  getArtistItemThunk,
  getAlbumItemThunk,
} from "./playerThunk";
import { IGetPlaylistInfo } from "modules/Info/interfaces/IGetPlaylist";
import { IGetTopTracksArtist } from "modules/Info/interfaces/IGetTopTracksArtist";
import { getSearchThunk } from "modules/Search/SearchThunk";
import {
  getPlaylistThunk,
  getTopTracksArtistThunk,
  getArtistAlbumItemThunk
} from "modules/Info/InfoThunk";
import { IGetSearch } from "modules/Search/interfaces/IGetSearch";

const initialState: IInitialState = {
  player: {
    basic: [],
    extra: [],
  },
  currentTrack: null,
  error: null,
  loading: false,
  search: false,
  flag: "",
  switchPlayer:"basic",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    prevTrack(state) {
      const currentIndex = state.player[state.switchPlayer].findIndex(
        (item: any) => item.id === state.currentTrack?.id
      );

      if (currentIndex === 0) {
        state.currentTrack = state.player[state.switchPlayer][state.player.basic.length - 1];
      } else {
        state.currentTrack = state.player[state.switchPlayer][currentIndex - 1];
      }
    },
    nextTrack(state) {
      const currentIndex = state.player[state.switchPlayer].findIndex(
        (item: any) => item.id === state.currentTrack?.id
      );

      if (currentIndex === state.player[state.switchPlayer].length - 1) {
        state.currentTrack = state.player[state.switchPlayer][0];
      } else {
        state.currentTrack = state.player[state.switchPlayer][currentIndex + 1];
      }
    },
    addImgTrack(state, action: PayloadAction<string>) {
      if (state.currentTrack) {
        state.currentTrack.img = action.payload;
      }
      state.player[state.switchPlayer].map((item) => (item.img = action.payload));
    },
    playSongTable(state, action: PayloadAction<string>) {
      const song = state.player.basic.find(
        (item) => item.id === action.payload
      );

      if (song) {
        state.switchPlayer = 'basic';
        state.currentTrack = song;
      } else {
        state.switchPlayer = 'extra';
        state.currentTrack = state.player.extra[0];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlaylistsItemThunk.pending, (state) => {
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getArtistItemThunk.pending, (state) => {
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getAlbumItemThunk.pending, (state) => {
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getArtistAlbumItemThunk.pending, (state) => {
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getSearchThunk.pending, (state) => {
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getPlaylistThunk.pending, (state) => {
      state.error = null;
      state.loading = false;
    });
    builder.addCase(getTopTracksArtistThunk.pending, (state) => {
      state.error = null;
      state.loading = false;
    });

    builder.addCase(
      getPlaylistsItemThunk.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.switchPlayer = 'basic';
        state.search = false;
        const arr = action.payload.items.filter(
          (item: any) => item.track?.preview_url
        );

        state.player.basic = arr.map((item: any) => {
          return {
            id: item.track.id ? item.track.id : "",
            preview_url: item.track.preview_url,
            songName: item.track.name,
            artist: item.track.artists[0].name,
            img: item.track.album.images[0].url,
          };
        });
        state.currentTrack = state.player.basic[0];
      }
    );
    builder.addCase(
      getArtistItemThunk.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.switchPlayer = 'basic';
        state.search = false;
        state.player.basic = action.payload.tracks.map((item: any) => {
          return {
            id: item.id,
            preview_url: item.preview_url,
            songName: item.name,
            artist: item.artists[0].name,
            img: item.album.images[0].url,
          };
        });
        state.currentTrack = state.player.basic[0];
      }
    );
    builder.addCase(
      getAlbumItemThunk.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.switchPlayer = 'basic';
        state.search = false;
        const items = action.payload.items.map((item: any) => {
          return {
            id: item.id,
            songName: item.name,
            artist: item.artists[0].name,
            preview_url: item.preview_url,
            img: null,
          };
        });
        state.player.basic = items;
        state.currentTrack = state.player.basic[0];
      }
    );
    builder.addCase(
      getArtistAlbumItemThunk.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.switchPlayer = 'extra';
        state.search = false;
        const items = action.payload.items.map((item: any) => {
          return {
            id: item.id,
            songName: item.name,
            artist: item.artists[0].name,
            preview_url: item.preview_url,
            img: null,
          };
        });
        state.player.extra = items;
        state.currentTrack = state.player.extra[0];
      }
    );
    builder.addCase(
      getSearchThunk.fulfilled,
      (state, action: PayloadAction<IGetSearch>) => {
        state.switchPlayer = 'basic';
        state.search = true;
        state.player.basic = action.payload.tracks.items
          .filter((item) => item.preview_url)
          .map((item) => {
            return {
              id: item.id,
              preview_url: item.preview_url,
              songName: item.name,
              albumName: item.album.name,
              artist: item.artists[0].name,
              img: item.album.images[2].url,
            };
          });
      }
    );
    builder.addCase(
      getPlaylistThunk.fulfilled,
      (state, action: PayloadAction<IGetPlaylistInfo>) => {
        state.switchPlayer = 'basic';
        state.player.basic = action.payload.tracks.items
          .filter((item) => item.track && item.track.preview_url)
          .map((item) => {
            return {
              id: item?.track?.id,
              preview_url: item.track.preview_url,
              songName: item.track.name,
              artist: item.track.artists[0].name,
              albumName: item.track.album.name,
              img: item.track.album.images[0].url,
            };
          });
        state.loading = false;
      }
    );
    builder.addCase(
      getTopTracksArtistThunk.fulfilled,
      (state, action: PayloadAction<IGetTopTracksArtist>) => {
        state.switchPlayer = 'basic';
        state.player.basic = action.payload.tracks.map((item) => {
          return {
            id: item.id,
            preview_url: item.preview_url,
            songName: item.name,
            artist: item.artists[0].name,
            albumName: item.album.name,
            img: item.album.images[0].url,
          };
        });
        state.loading = false;
      }
    );

    builder.addCase(
      getPlaylistsItemThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      getArtistItemThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      getSearchThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.search = false;
        state.error = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      getPlaylistThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      getTopTracksArtistThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
  },
});

export const { prevTrack, nextTrack, addImgTrack, playSongTable } =
  playerSlice.actions;
export default playerSlice.reducer;
