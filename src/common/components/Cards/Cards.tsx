import { FC, useContext, useEffect, useState } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import { Typography, List, Spin } from "antd";
import { CardComponent } from "common/components/Cards/components/Card/Card";
import { ReactComponent as SpinnerLogo } from "assets/icons/spinner.svg";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { useParams } from "react-router-dom";
import { getCategorysPlaylistsThunk } from "modules/Genre/GenreThunk";

type Props = {
  title?: string;
  loading: boolean;
  playlist: {
    id: string;
    img: string;
    name: string;
    description?: string | undefined;
  }[];
  currentItemId: string;
  handlePlayer: (id: string) => void;
};

const { Title } = Typography;

export const Cards: FC<Props> = (props) => {
  const { title, loading, playlist, currentItemId, handlePlayer } = props;
  const token = localStorage.getItem("token") || "";
  const { id } = useParams();
  const {total, offset} = useAppSelector(state => state.genre)
  const { playing, setPlaying } = useContext(MusicPlayerContext);
  const [loadingData, setLoadingData] = useState(false);
  const handlePlay = (id: string) => handlePlayer(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loadingData && total > offset) {
      setTimeout(async () => {
        await dispatch(
          getCategorysPlaylistsThunk({ token, id: id ? id : "", offset })
        );
        setLoadingData(false);
      },1500)
    }
  }, [loadingData]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setLoadingData(true);
    }
  };

  return (
    <>
      <div className="block">
        {!loading ? (
          <>
            <Title level={2} className="content__title">
              {title ? title : "Все плейлисты"}
            </Title>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 6,
              }}
              dataSource={playlist}
              renderItem={(item) => (
                <List.Item>
                  <CardComponent
                    card={item}
                    playing={playing}
                    setPlaying={setPlaying}
                    handlePlay={handlePlay}
                    currentItemId={currentItemId}
                  />
                </List.Item>
              )}
            />
          </>
        ) : (
          <Spin
            indicator={<SpinnerLogo style={{ fontSize: "200px" }} />}
            className="spin"
          />
        )}
      </div>
    </>
  );
};
