import {Dispatch, FC, SetStateAction } from 'react'

type ButtonProp = {
    increment: Dispatch<SetStateAction<number>>
}

const FunctionComponent:FC<ButtonProp> = ({ increment }) => {
    return (
            <button onClick={()=>{increment((prev)=> prev+ 1)}}>+</button>
    )
}

export default FunctionComponent
