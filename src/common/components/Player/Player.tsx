import { FC } from "react";
import VolumeIcon from "assets/icons/volumePlayer.svg";
import VolumeLineIcon from "assets/icons/lineVolumePlayer.svg";
import { Song } from "./components/Song/Song";
import { useAppSelector } from "core/redux/hooks";
import { Turntable } from "./components/Turntable/Turntable";
import "./Player.scss";

type Props = {};

export const Player: FC<Props> = (props) => {
  const {currentTrack} = useAppSelector(state => state.playlist)

  return (
    <div className="player__wrapper">
      <div className="player__container">
        <audio id="audio" src={currentTrack?.track.preview_url}>
          <source src={currentTrack?.track.preview_url} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <Song 
        songName={currentTrack?.track.name ? currentTrack?.track.name : 'Без названия'} 
        songArtist={currentTrack?.track.artists[0].name ? currentTrack?.track.artists[0].name : 'Без имени'}
        images={currentTrack?.track.album.images[0].url ? currentTrack?.track.album.images[0].url : ''}
        />
        <Turntable/>
        <div className="player__right">
          <img src={VolumeIcon} alt="" className="player__right-volume" />
          <img src={VolumeLineIcon} alt="" className="player__right-line" />
        </div>
      </div>
    </div>
  );
};
