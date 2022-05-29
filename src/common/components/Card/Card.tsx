import {FC} from 'react'
import { Card} from "antd";
import PhotoBottomHome from "assets/images/photoBottomHome.png";
import {IGetLibItem} from 'modules/Library/interfaces/ILibrary';
import './Card.scss'

type Props = {
  playlist:IGetLibItem;
}

const { Meta } = Card;

export const CardComponent:FC<Props> = ({playlist}) => {


  return (
    <Card
    hoverable
    className="content__card"
    style={{ width: 231 }}
    cover={
      <img
        className="content__card-img"
        alt="example"
        src={playlist?.images[0]?.url ? playlist?.images[0]?.url : PhotoBottomHome}
      />
    }
  >
    <Meta title={playlist.name} />
  </Card>
  )
}