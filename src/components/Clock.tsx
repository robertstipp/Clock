import React, {useEffect, useState} from 'react'
import HourHand from './HourHand'
import MinuteHand from './MinuteHand'
import SecondHand from './SecondHand'

const getTime = () => {
  const now = new Date
  const hours = now.getHours()
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return {hours,minutes, seconds}
}


const Clock = () => {
  getTime()
  const [time, setTime] = useState(getTime()); 
  const style = {
    "width" : "200px",
    "height" : "200px",
    "display": "flex",
    "flex-direction" : "column",
    "align-items" : "center",
    "border" : "1px solid white",
    "border-radius" : "50%",
    "background-color" : "white",
    "color": "black",
    "position": "relative"
  };

  useEffect(()=>{
    setInterval(()=>{
      setTime(getTime())
    },1000)
  },[])

  const hourAngle = (time.hours % 12) / 12  * 360;
  const minuteAngle = (time.minutes) / 60 * 360;
  const secondAngle = (time.seconds) / 60 * 360;

  const handMovementStyle =  {
    "transform-origin": "bottom",
    "transform" : `rotate(${hourAngle}deg)`
  }
  const minuteMovementStyle =  {
    "transform-origin": "bottom",
    "transform" : `rotate(${minuteAngle}deg)`
  }
  const secondMovementStyle =  {
    "transform-origin": "bottom",
    "transform" : `rotate(${secondAngle}deg)`
  }

  return (
    <div style={style}>
      <HourHand handMovementStyle={handMovementStyle} />
      <MinuteHand minuteMovementStyle={minuteMovementStyle} />
      <SecondHand secondMovementStyle={secondMovementStyle}/>
    </div>
  )

}

export default Clock