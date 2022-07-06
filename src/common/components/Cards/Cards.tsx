import { FC, useContext, useEffect } from "react";
import { useInfinityScroll } from "common/hooks/useInfinityScroll";
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
  const { playing, setPlaying } = useContext(MusicPlayerContext);
  const token = localStorage.getItem("token") || "";
  const {loadingData, setLoadingData} = useInfinityScroll();
  const handlePlay = (id: string) => handlePlayer(id);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  
  const {total, offset} = useAppSelector(state => state.genre)


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
