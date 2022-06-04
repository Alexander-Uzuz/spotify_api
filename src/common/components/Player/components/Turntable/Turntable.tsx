import {FC} from 'react';
import PlayerRepeatIcon from 'assets/icons/repeatPlayer.svg';
import PlayerBackIcon from 'assets/icons/backPlayer.svg';
import PlayerNextIcon from 'assets/icons/nextPlayer.svg';
import PlayerMixIcon from 'assets/icons/mixPlayer.svg';
import StopPlayerIcon from 'assets/icons/stopPlayer.svg';
import PlayPlayerIcon from 'assets/icons/playPlayer.svg';
import { useAppDispatch } from 'core/redux/hooks';
import { prevTrack, nextTrack } from 'modules/Playlist/playlistSlice';
import {Bar} from './components/Bar';

type Props = {
  curTime:number | undefined;
  duration:number | undefined;
  playing:boolean;
  setPlaying:(playing:boolean) => void;
  setClickedTime:any;
}

export const Turntable:FC<Props> = ({curTime, duration, playing, setPlaying, setClickedTime}) => {
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
              <img src={StopPlayerIcon} alt="" className="player__turnable-handle__play player__turntable__button" onClick={() => setPlaying(false)}/>
              :
              <img src={PlayPlayerIcon} alt="" className="player__turnable-handle__play player__turntable__button" onClick={() => setPlaying(true)}/>
            }
            <img src={PlayerNextIcon} alt="" className="player__turnable-handle__next player__turntable__button" onClick={handleNextTrack}/>
        </div>
        <img src={PlayerMixIcon} alt="" className="player__turntable-top__mix player__turntable__button"/>
    </div>
    <Bar curTime={curTime} duration={duration} onTimeUpdate={(time:number) => setClickedTime(time)}/>
</div>
  )
}


