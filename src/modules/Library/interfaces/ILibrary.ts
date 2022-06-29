export interface IInitialState {
  playlist: IItem[];
  flag: "album" | "playlists" | "artists";
  currentItemId: string;
  error: null | string;
  loading: boolean;
}

interface IItem {
  id: string;
  name: string;
  img: string;
}

export interface IImage {
  height: number;
  url: string;
  width: number;
}
