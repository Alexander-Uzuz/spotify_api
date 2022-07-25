import { createContext, useState, useEffect } from "react";

const MusicPlayerContext = createContext<any>(null);

const MusicPlayerProvider = (props: any) => {
  const [duration, setDuration] = useState<any>();
  const [curTime, setCurTime] = useState<any>();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<any>();

  useEffect(() => {
    const audio: any = document.getElementById("audio");

    if (!audio) {
      window.location.reload();
    }

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // playing ? audio.play() : audio.pause();

    if (playing) {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then((_: any) => {})
          .catch((error: any) => {});
      }
    } else {
      const pausePromise = audio.pause();

      if (pausePromise !== undefined) {
        pausePromise.then((_: any) => {}).catch((error: any) => {});
      }
    }

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  return (
    <MusicPlayerContext.Provider
      value={{
        curTime,
        duration,
        playing,
        setPlaying,
        setClickedTime,
      }}
    >
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
