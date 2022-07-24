import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoHeader } from "../../components/InfoHeader/InfoHeader";
import { SongsTable } from "common/components/SongsTable/SongsTable";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { getPlaylistsItemThunk } from "modules/Player/playerThunk";
import {getPlaylistThunk} from '../../InfoThunk';

type Props = {};

export const InfoPlaylist: FC<Props> = (props) => {
  const { id } = useParams();
  const token = localStorage.getItem("token") || "";
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
        dispatch(getPlaylistThunk({token, id}))
    }
  }, []);

  return (
    <div className="infoplaylist__container">
      <InfoHeader />
      <SongsTable />
      id:{id}
    </div>
  );
};
