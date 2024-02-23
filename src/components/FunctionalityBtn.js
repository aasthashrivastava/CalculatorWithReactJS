import React from 'react'

const FunctionalityBtn = ({ handleBtn }) => {
  return (
    <>
      <input type='button' id='solve' value={"x"} onClick={(e) => handleBtn(e.target.value)} />
      <input type='button' id='solve' value={"C"} onClick={(e) => handleBtn(e.target.value)} />
      <input type='Button' id='solve' value={"="} onClick={(e) => handleBtn(e.target.value)} />
    </>
  )
}

export default FunctionalityBtn;