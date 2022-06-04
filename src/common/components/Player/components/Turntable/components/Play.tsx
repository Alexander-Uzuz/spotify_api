import React,{FC} from 'react';
import PlayPlayerIcon from 'assets/icons/playPlayer.svg';

type Props = {
    handleClick:any
}

export const Play:FC<Props> = ({handleClick}) => {
  return (
    <img src={PlayPlayerIcon} alt="" className="player__turnable-handle__play player__turntable__button" onClick={handleClick}/>
  )
}