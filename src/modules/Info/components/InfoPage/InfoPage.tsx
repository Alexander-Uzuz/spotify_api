import { SongsTable } from "common/components/SongsTable/SongsTable";
import { useAppSelector } from "core/redux/hooks";
import { Typography } from "antd";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoHeader } from "../../components/InfoHeader/InfoHeader";
import Cards from "common/components/Cards/CardsContainer";

const { Title } = Typography;

type Props = {
  handleDispatch: (id: string) => void;
  handleExtraDispatch?: () => void;
  handlePlayer?: (id: string) => void;
};

export const InfoPage: FC<Props> = (props) => {
  const { handleDispatch, handleExtraDispatch, handlePlayer } = props;
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
          <InfoHeader />
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
        ""
      )}
    </>
  );
};
