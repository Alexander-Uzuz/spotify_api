import { SongsTable } from "common/components/SongsTable/SongsTable";
import { useAppSelector } from "core/redux/hooks";
import { Typography } from "antd";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoHeader } from "../../components/InfoHeader/InfoHeader";
import Cards from "common/components/Cards/CardsContainer";
import { ContextMenu } from "common/components/ContextMenu/ContextMenu";
import { Spin } from "antd";
import { ReactComponent as SpinnerLogo } from "assets/icons/spinner.svg";

const { Title } = Typography;

type Props = {
  type:"playlist" | "album" | "artist";
  handleDispatch: (id: string) => void;
  handleExtraDispatch?: () => void;
  handlePlayer?: (id: string) => void;
  handleFollow?:() => void;
};

export const InfoPage: FC<Props> = (props) => {
  const { handleDispatch, handleExtraDispatch, handlePlayer, handleFollow, type } = props;
  const { loading, offset, total, albums, currentItemId, artistId } =
    useAppSelector((state) => state.info);
  const { id } = useParams();


  useEffect(() => {
    if (id) {
      handleDispatch(id);
    }
  }, [id]);

  useEffect(() => {
    if (artistId.length && handleExtraDispatch) {
      handleExtraDispatch();
    }
  }, [id, artistId]);


  return (
    <>
      {!loading ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <InfoHeader />
            <ContextMenu id={id ? id : ""} type={type} handleFollow={handleFollow}/>
          </div>
          <Title style={{ color: "#FFF", marginTop: "30px" }}>
            Лучшие треки:
          </Title>
          <SongsTable />
          {handlePlayer ? (
            <Cards
              total={total}
              offset={offset}
              title="Альбомы этого исполнителя"
              loading={loading}
              playlist={albums}
              currentItemId={currentItemId}
              handlePlayer={handlePlayer}
              type="album"
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <Spin
          indicator={<SpinnerLogo style={{ fontSize: "200px" }} />}
          className="spin"
        />
      )}
    </>
  );
};
