import {FC} from 'react'
import { Card} from "antd";
import PhotoBottomHome from "assets/images/photoBottomHome.png";
import { useAppDispatch } from 'core/redux/hooks';
import {getPlaylistItemThunk} from 'modules/Playlist/playlistThunk';
import {IGetPlaylist} from 'modules/Library/interfaces/IGetPlaylists';
import {IGetFollowingArtist} from 'modules/Library/interfaces/IGetFollowingArtist';
import {IAlbum} from 'modules/Library/interfaces/IGetSaveAlbums';
import './Card.scss'
import { findByLabelText } from '@testing-library/react';

type Props = {
  // playlist:IGetPlaylist | IGetFollowingArtist | IAlbum;
  card:any;
  flag?:'album' | '';

}

const { Meta } = Card;

//т.к объект альбома это два ключа, а не один как плейлист и артист, пришлось делать костыли с флагами, исправить !!!

export const CardComponent:FC<Props> = ({card, flag}) => {
  const dispatch = useAppDispatch();

  const handleCard = (id:string) => {
    dispatch(getPlaylistItemThunk({token:localStorage.getItem('token'), id}))
  }

  return (
    <Card
    onClick={() => handleCard(card.id)}
    hoverable
    className="content__card"
    style={{ width: 231 }}
    cover={
      <img
        className="content__card-img"
        alt="example"
        src={flag === 'album' ? card.album.images[0].url : (card?.images[0]?.url ? card?.images[0]?.url : PhotoBottomHome)}
      />
    }
  >
    <Meta title={flag === 'album' ? card.album.name : card.name} />
  </Card>
  )
}