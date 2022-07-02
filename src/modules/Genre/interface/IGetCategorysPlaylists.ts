export interface IGetCategorysPlaylists {
  playlists: {
    href: string;
    items: IGetCategoryPlaylistItem[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
}

export interface IGetCategoryPlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [
    {
      height: null | string;
      url: string;
      width: null | string;
    }
  ];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: null | string;
  public: null | string;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}
