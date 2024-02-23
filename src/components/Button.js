import React from 'react'

const Button = ({ valueBtn, handleButtonClick }) => {

  return (
    <>
      <div className="buttons">
        <input type='button'
          value={valueBtn}
          onClick={(e) => handleButtonClick(e.target.value)}/>
      </div>
    </>
  )
}

export default Button