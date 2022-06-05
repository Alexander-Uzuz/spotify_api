import { FC, useRef } from "react";
import VolumeIcon from "assets/icons/volumePlayer.svg";
import { Slider } from "antd";
import { Song } from "./components/Song/Song";
import { useAppSelector } from "core/redux/hooks";
import { Turntable } from "./components/Turntable/Turntable";
import "./Player.scss";

type Props = {
  curTime:number | undefined;
  duration:number | undefined;
  playing:boolean;
  setPlaying:(playing:boolean) => void;
  setClickedTime:any;
};

export const Player:FC<Props> = ({curTime, duration, playing, setPlaying, setClickedTime}) => {
  const {currentTrack} = useAppSelector(state => state.playlist);
  const audioPlayer = useRef<any>(null);

  const handleRange = (value:number) => audioPlayer.current.volume = value / 100;
  
  return (
    <div className="player__wrapper">
      <div className="player__container">
        <audio ref={audioPlayer} id="audio" src={currentTrack?.track.preview_url}>
          <source src={currentTrack?.track.preview_url} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <Song 
        songName={currentTrack?.track.name ? currentTrack?.track.name : 'Без названия'} 
        songArtist={currentTrack?.track.artists[0].name ? currentTrack?.track.artists[0].name : 'Без имени'}
        images={currentTrack?.track.album.images[0].url ? currentTrack?.track.album.images[0].url : ''}
        />
        <Turntable curTime={curTime} duration={duration} playing={playing} setPlaying={setPlaying} setClickedTime={setClickedTime}/>
        <div className="player__right">
          <img src={VolumeIcon} alt="" className="player__right-volume" />
          <Slider onChange={handleRange} className="player__slider" defaultValue={40}/>
        </div>
      </div>
    </div>
  );

}

