import {FC} from 'react';



type Props = {
    curTime:number, 
    duration:number, 
    onTimeUpdate:any;
}

export const Bar:FC<Props> = ({curTime,duration,onTimeUpdate}) => {
    const curPercentage = (curTime / duration) * 100;

    function formatDuration(duration:number) {
      let minutes:string | number = 0;

      while(duration > 60){
        minutes+=1;
        duration = duration - 60;
      }

      if(minutes.toString().length === 1){
        minutes = '0' + minutes
      }

      let seconds = duration.toString().split('.')[0].length === 1 ? `0${duration.toString().split('.')[0]}` : duration.toString().split('.')[0];

      return `${minutes}:${seconds}` 

    }
 
    function calcClickedTime(e:MouseEvent) {
      const clickPositionInPage = e.pageX;
      const bar:any = document.querySelector(".bar__progress");
      const barStart = bar.getBoundingClientRect().left + window.scrollX;
      const barWidth = bar.offsetWidth;
      const clickPositionInBar = clickPositionInPage - barStart;
      const timePerPixel = duration / barWidth;
      return timePerPixel * clickPositionInBar;
    }
  
    function handleTimeDrag(e:MouseEvent) {
      onTimeUpdate(calcClickedTime(e));
  
      const updateTimeOnMove = (eMove:MouseEvent) => {
        onTimeUpdate(calcClickedTime(eMove));
      };
  
      document.addEventListener("mousemove", updateTimeOnMove);
  
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", updateTimeOnMove);
      });
    }



  return (
    <div className="bar">
      <span className="bar__time">{duration && formatDuration(curTime)}</span>
      <div
        className="bar__progress"
        onMouseDown={(e:any) => handleTimeDrag(e)}
      >
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="bar__time">{duration && formatDuration(duration)}</span>
    </div>
  )
}