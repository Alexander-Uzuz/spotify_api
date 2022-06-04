import React,{FC} from 'react';
import PlayerImg from 'assets/images/playerPhoto.png';
import HeaderIcon from 'assets/icons/heartPlayer.svg';

type Props = {
  songName:string;
  songArtist:string;
  images:string;
}

export const Song:FC<Props> = ({songName,songArtist, images}) => {
  return (
    <div className="player__info">
    <img src={images ? images : PlayerImg} alt="" className="player__img" />
    <div className="player__description">
        <h3 className="player__description-artist">{songArtist}</h3>
        <p className="player__description-song">{songName}</p>
    </div>
    <img src={HeaderIcon} alt="" className='player__like'/>
</div>
  )
}