import {FC} from 'react';
import PlayerImg from 'assets/images/playerPhoto.png';
import HeaderIcon from 'assets/icons/heartPlayer.svg';
import PlayerRepeatIcon from 'assets/icons/repeatPlayer.svg';
import PlayerBackIcon from 'assets/icons/backPlayer.svg';
import PlayPlayerIcon from 'assets/icons/playPlayer.svg';
import PlayerNextIcon from 'assets/icons/nextPlayer.svg';
import PlayerMixIcon from 'assets/icons/mixPlayer.svg';
import LineIcon from 'assets/icons/linePlayer.svg';
import VolumeIcon from 'assets/icons/volumePlayer.svg';
import VolumeLineIcon from 'assets/icons/lineVolumePlayer.svg';
import './Player.scss';

type Props = {}

export const Player:FC<Props> = (props) => {
  return (
    <div className="player__wrapper">
        <div className="player__container">
            <div className="player__info">
                <img src={PlayerImg} alt="" className="player__img" />
                <div className="player__description">
                    <h3 className="player__description-artist">Oxxxymiron</h3>
                    <p className="player__description-song">Где нас нет</p>
                </div>
                <img src={HeaderIcon} alt="" className='player__like'/>
            </div>
            <div className="player__turntable">
                <div className="player__turntable-top">
                    <img src={PlayerRepeatIcon} alt="" className="player__turntable-top__repeat player__turntable__button" />
                    <div className="player__turntable-handle">
                        <img src={PlayerBackIcon} alt="" className="player__turntable-handle__back player__turntable__button" />
                        <img src={PlayPlayerIcon} alt="" className="player__turnable-handle__play player__turntable__button" />
                        <img src={PlayerNextIcon} alt="" className="player__turnable-handle__next player__turntable__button"/>
                    </div>
                    <img src={PlayerMixIcon} alt="" className="player__turntable-top__mix player__turntable__button"/>
                </div>
                <div className="player__turntable-bottom">
                    <p className='player__turntable-bottom_time'>1:00</p>
                    <img src={LineIcon} alt="" className='player__turntable-bottom_line'/>
                    <p className='player__turntable-bottom_time'>3:23</p>
                </div>
            </div>
            <div className="player__right">
                <img src={VolumeIcon} alt="" className="player__right-volume" />
                <img src={VolumeLineIcon} alt="" className="player__right-line" />
            </div>
        </div>
    </div>
  )
}