import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { getBrowseCategoriesThunk } from "modules/Search/SearchThunk";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import {getCategorysPlaylistsThunk} from "modules/Genre/GenreThunk";
import PodcastsImg from "assets/images/podcasts.png";
import "./Browse.scss";

type Props = {};

const { Title } = Typography;

export const Browse: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const token = (localStorage.getItem('token') || '');
  const { browseCategories } = useAppSelector((state) => state.search);

  useEffect(() => {
    dispatch(getBrowseCategoriesThunk(localStorage.getItem("token")));
  }, []);

  const handleGenre = (id:string) => {
    console.log('hi')
    dispatch(getCategorysPlaylistsThunk({token,id}))
  }

  return (
    <div className="browse__wrapper">
      <div className="browse__container">
        <Title level={2} style={{ color: "white" }}>
          Browse all
        </Title>
        <div className="browses">
          {browseCategories
            ? browseCategories.map((item) => {
                return (
                  <Link onClick={() => handleGenre(item.id)} to={`/genre/${item.id}`} key={item.id}>
                    <div className="browse__item">
                      <Title level={3} className="browse__title">
                        {item.name}
                      </Title>
                      <div className="img__container">
                        <img className="browse__img" src={item.img} alt="" />
                      </div>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
