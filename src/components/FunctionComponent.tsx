import React from 'react'
import { FC } from 'react'

type Prop = {
    value: number
}

const FunctionComponent:FC<Prop> = ({ value }) => {
    return (
        <div>
            {value}
        </div>
    )
}

export default FunctionComponent
