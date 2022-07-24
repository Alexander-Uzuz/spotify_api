import { FC, memo } from "react";
import { Typography } from "antd";
import SpotifyBg from "assets/images/spotify_background.jpg";
import {IPlaylist} from './interfaces/IInitialState';
import "./Home.scss";
import  Cards  from "common/components/Cards/CardsContainer";

const { Title } = Typography;

type Props = {
  featuredPlaylist: IPlaylist[];
  loading: boolean;
  currentItemId: string;
  handlePlayer: (id:string) => void;
  total: number;
  offset: number;
  getCards: (data:{token:string, id:string, offset:number}) => any;
};

const HomeWrapper: FC<Props> = (props) => {
  const {featuredPlaylist,loading,currentItemId,handlePlayer,total,offset,getCards} = props;

  return (
    <>
      {featuredPlaylist.length ? (
        <Cards
          playlist={featuredPlaylist}
          loading={loading}
          title="Playlists spotify"
          currentItemId={currentItemId}
          handlePlayer={handlePlayer}
          total={total}
          offset={offset}
          getCards={getCards}
        />
      ) : (
        <div className="home__unauth" style={{ textAlign: "center" }}>
          <Title
            className="home__title"
            level={1}
            style={{
              color: "#FFF",
            }}
          >
            Добро пожаловать в Spotify! Авторизируйтесь и наслаждайтесь лучшим
            музыкальным сервисом вместе с нами.
          </Title>
          <img src={SpotifyBg} alt="spotify_img" />
        </div>
      )}
    </>
  );
};

export const Home = memo(HomeWrapper);
