import React from 'react'

const HourHand = ({handMovementStyle}) => {
  const style = {
    ...handMovementStyle,
    "top": "25px",
    "height": "75px",
    "width": "5px",
    "position": "absolute",
    "border": "1px solid blue",
    "background-color" :"blue",
  }
  return (
    <div style={style}></div>
  )
}

export default HourHand