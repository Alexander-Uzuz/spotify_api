import { FC } from "react";
import { useAppDispatch } from "core/redux/hooks";
import { getPlaylistThunk } from "../../InfoThunk";
import {InfoPage} from 'modules/Info/components/InfoPage/InfoPage';

type Props = {};

export const InfoPlaylist: FC<Props> = (props) => {
  const token = localStorage.getItem("token") || "";
  const dispatch = useAppDispatch();

  const getPlaylist = (id:string) => dispatch(getPlaylistThunk({ token, id }));

  return <InfoPage handleDispatch={getPlaylist}/>
};
