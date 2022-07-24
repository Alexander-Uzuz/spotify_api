import {FC, useContext} from 'react';
import PlayerBackIcon from 'assets/icons/backPlayer.svg';
import PlayerNextIcon from 'assets/icons/nextPlayer.svg';
import StopPlayerIcon from 'assets/icons/stopPlayer.svg';
import PlayPlayerIcon from 'assets/icons/playPlayer.svg';
import { MusicPlayerContext } from "core/context/PlayerContext";
import { useAppDispatch } from 'core/redux/hooks';
import { prevTrack, nextTrack } from 'modules/Player/playerSlice';
import {Bar} from './components/Bar';

type Props = {


}

export const Turntable:FC<Props> = () => {
  const dispatch = useAppDispatch();
  const {curTime, duration, playing, setPlaying, setClickedTime} = useContext(MusicPlayerContext);

  const handlePrevTrack = () => dispatch(prevTrack());
  const handleNextTrack = () => dispatch(nextTrack());
  

  return (
    <div className="player__turntable">
    <div className="player__turntable-top">
        <div className="player__turntable-handle">
            <img src={PlayerBackIcon} alt="" className="player__turntable-handle__back player__turntable__button" onClick={handlePrevTrack}/>
            {
              playing
              ?
              <img src={StopPlayerIcon} alt="" className="player__turnable-handle__play player__turntable__button" onClick={() => setPlaying(false)}/>
              :
              <img src={PlayPlayerIcon} alt="" className="player__turnable-handle__play player__turntable__button" onClick={() => setPlaying(true)}/>
            }
            <img src={PlayerNextIcon} alt="" className="player__turnable-handle__next player__turntable__button" onClick={handleNextTrack}/>
        </div>
    </div>
    <Bar curTime={curTime} duration={duration} onTimeUpdate={(time:number) => setClickedTime(time)}/>
</div>
  )
}


