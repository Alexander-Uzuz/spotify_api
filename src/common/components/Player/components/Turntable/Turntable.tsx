import React,{FC} from 'react';
import PlayerRepeatIcon from 'assets/icons/repeatPlayer.svg';
import PlayerBackIcon from 'assets/icons/backPlayer.svg';
import PlayerNextIcon from 'assets/icons/nextPlayer.svg';
import PlayerMixIcon from 'assets/icons/mixPlayer.svg';
import { useAppDispatch } from 'core/redux/hooks';
import { prevTrack, nextTrack } from 'modules/Playlist/playlistSlice';
import {Paused} from './components/Paused';
import {Play} from './components/Play'
import {Bar} from './components/Bar';
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
type Props = {
    // curTime:any, 
    // duration:any, 
    // onTimeUpdate:any;
    // handleClick:any;
}

export const Turntable:FC<Props> = () => {
  const {curTime,duration,playing,setPlaying,setClickedTime} = useAudioPlayer();
  const dispatch = useAppDispatch();

  const handlePrevTrack = () => dispatch(prevTrack());
  const handleNextTrack = () => dispatch(nextTrack());

  return (
    <div className="player__turntable">
    <div className="player__turntable-top">
        <img src={PlayerRepeatIcon} alt="" className="player__turntable-top__repeat player__turntable__button" />
        <div className="player__turntable-handle">
            <img src={PlayerBackIcon} alt="" className="player__turntable-handle__back player__turntable__button" onClick={handlePrevTrack}/>
            {
              playing
              ?
              <Paused handleClick={() => setPlaying(false)}/>
              :
              <Play handleClick={() => setPlaying(true)}/>
            }
            <img src={PlayerNextIcon} alt="" className="player__turnable-handle__next player__turntable__button" onClick={handleNextTrack}/>
        </div>
        <img src={PlayerMixIcon} alt="" className="player__turntable-top__mix player__turntable__button"/>
    </div>
    <Bar curTime={curTime} duration={duration} onTimeUpdate={(time:any) => setClickedTime(time)}/>
</div>
  )
}