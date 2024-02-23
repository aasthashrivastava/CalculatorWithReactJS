import React from 'react'

const DisplayScreen = ({ value, resultValue }) => {
  return (
    <div id="displayer">
      <div id="display">{value}</div>
      <div id="result">{resultValue}</div>
    </div>
  )
}

export default DisplayScreen

