import { FC, useEffect } from "react";
import { Spin } from "antd";
import { ReactComponent as SpinnerLogo } from "assets/icons/spinner.svg";
import { useParams } from "react-router-dom";
import { InfoHeader } from "../../components/InfoHeader/InfoHeader";
import { SongsTable } from "common/components/SongsTable/SongsTable";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { getPlaylistThunk } from "../../InfoThunk";

type Props = {};

export const InfoPlaylist: FC<Props> = (props) => {
  const { id } = useParams();
  const { loading } = useAppSelector((state) => state.info);
  const token = localStorage.getItem("token") || "";
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPlaylistThunk({ token, id }));
    }
  }, []);

  return (
    <div className="infoplaylist__container">
      {!loading ? (
        <>
          <InfoHeader />
          <SongsTable />
        </>
      ) : (
        <Spin
        indicator={<SpinnerLogo style={{ fontSize: "200px" }} />}
        className="spin"
      />
      )}
    </div>
  );
};
