import { FC, useEffect, useRef } from "react";
import VolumeIcon from "assets/icons/volumePlayer.svg";
import { Slider } from "antd";
import { Song } from "./components/Song/Song";
import { useAppSelector } from "core/redux/hooks";
import { useAppDispatch } from "core/redux/hooks";
import { addImgTrack } from "modules/Player/playerSlice";
import { Turntable } from "./components/Turntable/Turntable";
import "./Player.scss";

type Props = {
};



export const Player:FC<Props> = () => {
  const {flag, currentTrack} = useAppSelector(state => state.player);
  const {playlist, currentItemId} = useAppSelector(state => state.lib);
  const audioPlayer = useRef<any>(null);
  const dispatch = useAppDispatch();

  const addImgAlbum = () =>{
    const img = playlist.find((item:any) => item.id === currentItemId)?.img;
    dispatch(addImgTrack(img ? img : ''))
    return img ? img : ''
  }

  useEffect(() => {
    return () => {
      if(currentTrack){
        localStorage.setItem('currentTrack', JSON.stringify(currentTrack));
        localStorage.setItem('flag', flag);
      }
    }
  })

  const handleRange = (value:number) => audioPlayer.current.volume = value / 100;
  
  return (
    <div className="player__wrapper">
      <div className="player__container">
        <audio ref={audioPlayer} 
        id="audio" 
        src={currentTrack?.preview_url ? currentTrack.preview_url : './song.mp3'}>
          <source 
          src={currentTrack?.preview_url ? currentTrack.preview_url : './song.mp3'} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <Song 
        songName={currentTrack?.songName ? currentTrack.songName : "Song"} 
        songArtist={currentTrack?.artist ? currentTrack.artist : "Artist"}
        images={currentTrack?.img ? currentTrack.img : (flag === "album" ? addImgAlbum() : '')}
        />
        <Turntable/>
        <div className="player__right">
          <img src={VolumeIcon} alt="" className="player__right-volume" />
          <Slider onChange={handleRange} className="player__slider" defaultValue={40}/>
        </div>
      </div>
    </div>
  );

}


