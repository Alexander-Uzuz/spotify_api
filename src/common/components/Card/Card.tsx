import React from 'react'
import { Layout, Typography, List, Card} from "antd";
import PhotoBottomHome from "assets/images/photoBottomHome.png";
import './Card.scss'

type Props = {}

const { Meta } = Card;

export const CardComponent = (props: Props) => {
  return (
    <Card
    hoverable
    className="content__card"
    style={{ width: 231 }}
    cover={
      <img
        className="content__card-img"
        alt="example"
        src={PhotoBottomHome}
      />
    }
  >
    <Meta title={'Title1'} description="www.instagram.com" />
  </Card>
  )
}