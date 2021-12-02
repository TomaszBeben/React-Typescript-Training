import { FC } from 'react'

type props = {
    counter: number
}

const Header: FC<props> = ({counter}) => {
    return (
        <>
        {counter}
        </>
    )
}

export default Header
