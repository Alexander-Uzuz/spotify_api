import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import {libThunk} from './LibraryThunk'
import { Typography, List } from "antd";
import { CardComponent } from "common/components/Card/Card";
import "./Library.scss";

type Props = {};

const { Title } = Typography;

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

export const Library:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const {playlists} = useAppSelector(state => state.lib);


  useEffect(() => {
    const token = localStorage.getItem('token');

    dispatch(libThunk(token))
  }, [])


  return (
    <>
      <Title level={2} className="content__title">
        Playlists
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
        dataSource={playlists}
        renderItem={(item) => (
          <List.Item>
            <CardComponent playlist={item}/>
          </List.Item>
        )}
      />
    </>
  );
};


