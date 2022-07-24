import React from 'react';
import { Typography } from 'antd';
import './InfoHeader.scss';
import { useAppSelector } from 'core/redux/hooks';


const {Title,Text} = Typography;

type Props = {}

export const InfoHeader = (props: Props) => {
  const {title,img, subtitle} = useAppSelector(state => state.info)

  return (
    <div className="infoheader__container">
        <img className="infoheader__img" src={img} alt="img"/>
        <div className="infoheader__content">
            <Title className='infoheader__title infoheader__text' level={1}>{title}</Title>
            <Text className='infoheader__text infoheader__description'>{subtitle}</Text>
            {/* <Text className='infoheader__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellendus.</Text> */}
        </div>
    </div>
  )
}

