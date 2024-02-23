import React, { useState } from 'react'
import Button from './Button'
import DisplayScreen from './DisplayScreen'
import FunctionalityBtn from './FunctionalityBtn'

const Calculator1 = () => {
    const [value, setValue] = useState('')
    const [resultValue, setResultValue] = useState('')

    const handleButtonClick = (buttonContent) => {
        if (value === '' || resultValue) {
            setValue(buttonContent);
            setResultValue("")
        } else {
            setValue((elem) => elem + buttonContent);
        }
    }

    function handleBtn(buttonContent) {
        if (buttonContent === "C") {
            setValue("");
            setResultValue("");
        } else if (buttonContent === "=") {
            try {
                setResultValue(eval(value));
            } catch (error) {
                setResultValue("Error");
            }
        } else if (buttonContent === 'x') {
            setValue(value.slice(0, -1));
        }
    }

    const handleSqrtBtn = (value) => {
        if (value) {
            setResultValue(Math.sqrt(value));
        }else{
            setResultValue("Error")
        }
    }

    return (
        <>
            <div className='calculator'>
                <DisplayScreen value={value} resultValue={resultValue} />
                <div className='buttons'>
                    <FunctionalityBtn handleBtn={handleBtn} />
                    <Button valueBtn={"1"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"2"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"+"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"3"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"4"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"-"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"5"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"6"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"*"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"7"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"8"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"/"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"9"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"0"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"**"} handleButtonClick={handleButtonClick} />
                    <Button valueBtn={"."} handleButtonClick={handleButtonClick} />
                    <input className='sqrt' value='√' type='button' onClick={() => handleSqrtBtn(value)} />
                </div>
            </div>
        </>
    )
}

export default Calculator1