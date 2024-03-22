import React from 'react'

const MinuteHand = ({minuteMovementStyle}) => {
  const style = {
    ...minuteMovementStyle,
    "height": "100px",
    "width": "5px",
    "position": "absolute",
    "border": "1px solid green",
    "background-color" :"green"
  }
  return (
    <div style={style}></div>
  )
}

export default MinuteHand