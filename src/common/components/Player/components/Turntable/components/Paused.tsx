import React,{FC} from 'react';
import StopPlayerIcon from 'assets/icons/stopPlayer.svg';

type Props = {
    handleClick:any
}

export const Paused:FC<Props> = ({handleClick}) => {
  return (
    <img src={StopPlayerIcon} alt="" className="player__turnable-handle__play player__turntable__button" onClick={handleClick}/>
  )
}