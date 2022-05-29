export interface IGetLib {
    href: string;
    items: IGetLibItem[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
  }
  
  export interface IGetLibItem {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: [
      {
        height: null;
        url: string;
        width: null;
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
    };
    primary_color: null | string;
    public: boolean;
    snapshot_id: string;
    tracks: { href: string; total: number };
    type: string;
    uri: string;
  }

  export interface IInitialState{
    playlists:IGetLibItem[],
    error:null | string;
    loading:boolean;
}