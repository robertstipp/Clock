import React from 'react'

const SecondHand = ({secondMovementStyle}) => {
  const style = {
    ...secondMovementStyle,
    "height": "100px",
    "width": "5px",
    "position": "absolute",
    "border": "1px solid red",
    "background-color" :"red"
  }
  return (
    <div style={style}></div>
  )
}

export default SecondHand