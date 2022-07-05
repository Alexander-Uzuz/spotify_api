import { FC } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { getCategorysPlaylistsThunk } from "modules/Genre/GenreThunk";
import { useAppDispatch } from "core/redux/hooks";
import { clearPlaylist } from "modules/Genre/GenreSlice";
import Pop from "assets/images/cardPopImg.png";
import HipHop from "assets/images/cardHipHopImg.png";
import "./Genres.scss";

type Props = {};

const { Title } = Typography;

export const Genres: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token") || "";

  const handleGenre = (id: string) => {
    dispatch(getCategorysPlaylistsThunk({ id, token, offset:0 }));
    dispatch(clearPlaylist());
  };

  return (
    <div className="genres__wrapper">
      <div className="genres__container">
        <Title style={{ color: "white" }} className="genres__title" level={3}>
          Top genres
        </Title>
        <div className="genres">
          <Link to="/genre/pop">
            <div
              className="genres__item"
              onClick={() => handleGenre("pop")}
              style={{ background: "#8d67ab" }}
            >
              <Title level={2} className="genres__title">
                Pop
              </Title>
              <div className="img__container">
                <img src={Pop} alt="" />
              </div>
            </div>
          </Link>
          <Link to="/genre/hiphop">
            <div
              className="genres__item"
              style={{ background: "#BA5D07" }}
              onClick={() => handleGenre("hiphop")}
            >
              <Title level={2} className="genres__title">
                Hip-hop
              </Title>
              <div className="img__container">
                <img src={HipHop} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
