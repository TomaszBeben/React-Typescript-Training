import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
    increment: Dispatch<SetStateAction<number>>
}

const FunctionComponent: FC<Props> = ({ increment }) => {

    return (
        <>
            <button onClick={() => { increment((prev) => prev - 1) }}>-</button>
            <button onClick={() => { increment((prev) => prev + 1) }}>+</button>
        </>
    )
}

export default FunctionComponent
