import React from 'react';
import { Typography } from 'antd';
import Pop from 'assets/images/cardPopImg.png';
import './Genres.scss';

type Props = {}

const {Title} = Typography;

export const Genres = (props: Props) => {
  return (
    <div className="genres__wrapper">
      <div className="genres__container">
        <Title style={{color:'white'}} className='genres__title' level={3}>Your top genres</Title>
        <div className="genres">
          <div className="genres__item">
            <Title level={2} className='genres__title'>Hip-hop</Title>
            <img src={Pop} alt="" />
          </div>
          
          <div className="genres__item">
            <Title level={2} className='genres__title'>Hip-hop</Title>
            <img src={Pop} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}