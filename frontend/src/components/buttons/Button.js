import React from 'react'
import { Button } from 'react-bootstrap'
import { DivContainer } from '../tags/Tags'

export  function OutLineBtnSky({children}) {
    return (
        <DivContainer className="text-center mt-5">
            <Button className='Out-Line-Btn-Sky'>{children}</Button>
        </DivContainer>
    )
}

export  function BtnGradientRoundSky({children}) {
    return (
        <DivContainer className="text-center mt-2">
            <Button className='Btn-Gradient-Round-Sky'>{children}</Button>
        </DivContainer>
    )
}


