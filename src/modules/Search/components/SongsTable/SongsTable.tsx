import { FC, useContext } from "react";
import { MusicPlayerContext } from "core/context/PlayerContext";
import Play from "assets/icons/playTable.svg";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { playSongTable } from "modules/Playlist/playlistSlice";
import { ISearchDataItem } from "modules/Search/interfaces/IInitialState";
import "./SongsTable.scss";

type Props = {};

export const SongsTable: FC<Props> = () => {
  const { playlist, currentTrack } = useAppSelector((state) => state.playlist);
  const { playing, setPlaying } = useContext(MusicPlayerContext);
  const dispatch = useAppDispatch();

  const handleStop = () => {
    setPlaying(false);
  };
  const handleStart = (data: ISearchDataItem) => {
    dispatch(playSongTable(data.id));
    setPlaying(true);
  };

  const columns: ColumnsType<ISearchDataItem> = [
    {
      title: "#",
      dataIndex: "key",
      key: "1",
      render: (_, data, index) => (
        <div>
          <p
            style={{
              width: "30px",
              height: "30px",
              display: currentTrack?.id === data.id && playing ? "none" : "",
            }}
            className="songsTable__text songsTable__index"
            key={index + 1}
          >
            {index + 1}
          </p>
          {playing && data.id === currentTrack?.id ? (
            <svg
              style={{ display: "block" }}
              onClick={handleStop}
              className="card__play"
              width="30"
              height="30"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="32" cy="32" r="30" fill="#4fd1d9"></circle>
              <path fill="#fff" d="M17 17h30v30H17z"></path>
            </svg>
          ) : (
            <img
              src={Play}
              alt=""
              className="card__play"
              onClick={() => handleStart(data)}
              style={{ width: "30px", height: "30px" }}
            />
          )}
        </div>
      ),
    },
    {
      title: "Название",
      key: "2",
      render: (item, index) => {
        return (
          <div className="name__container" key={`${index}`}>
            <img
              className="songsTable__img"
              src={item.albumName ? item.img : ""}
              alt=""
            />
            <div>
              <p className="songsTable__text">{item.songName}</p>
              <p className="songsTable__text">{item.artist}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Альбом",
      dataIndex: "album",
      key: "3",
      render: (_, item) => (
        <p className="songsTable__text" key={item.id}>
          {item?.albumName}
        </p>
      ),
    },
    {
      title: "Время",
      key: "tags",
      dataIndex: "4",
      render: (_, time) => {
        return (
          <p className="songsTable__text" key={new Date().getTime()}>
            0:32
          </p>
        );
      },
    },
  ];

  return (
    <Table
      className="songsTable"
      columns={columns}
      dataSource={playlist}
      pagination={false}
      rowKey="id"
    />
  );
};
