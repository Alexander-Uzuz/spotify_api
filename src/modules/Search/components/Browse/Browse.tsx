import React,{FC} from 'react';
import './Browse.scss';
import {Typography} from 'antd';
import PodcastsImg from 'assets/images/podcasts.png';

type Props = {}

const {Title} = Typography;

export const Browse:FC<Props> = (props) => {
  return (
    <div className="browse__wrapper">
      <div className="browse__container">
        <Title level={2} style={{color:'white'}}>Browse all</Title>
        <div className="browses">
          <div className="browse__item">
            <Title level={3} className='browse__title'>Podcasts</Title>
            <img className='browse__img' src={PodcastsImg} alt="" />
          </div>
          <div className="browse__item">
            <Title level={3} className='browse__title'>Podcasts</Title>
            <img className='browse__img' src={PodcastsImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}