import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import {getPlaylistsThunk, getFollowingArtistsThunk} from './LibraryThunk'
import {useLocation} from 'react-router-dom';
import { Typography, List } from "antd";
import { CardComponent } from "common/components/Card/Card";
import "./Library.scss";

type Props = {};

const { Title } = Typography;

export const Library:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const {playlists, artists} = useAppSelector(state => state.lib);



  useEffect(() => {
    const token = localStorage.getItem('token');

    if(pathname === '/library/playlists'){
      dispatch(getPlaylistsThunk(token))
    }

    if(pathname === '/library/artists'){
      dispatch(getFollowingArtistsThunk(token))
    }
  }, [])


  return (
    <>
      <Title level={2} className="content__title">
        {pathname === '/library/playlists' ? 'Playlists' : 'Artists'}
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
        dataSource={pathname === '/library/playlists' ? playlists : artists}
        renderItem={(item) => (
          <List.Item>
            <CardComponent playlist={item}/>
          </List.Item>
        )}
      />
    </>
  );
};


