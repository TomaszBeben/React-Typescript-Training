import { useEffect, useState } from 'react'

const HooksTraining = () => {
    const [counter, setCounter] = useState < number > (0);
    const [toggle, setToggle] = useState < boolean > (true);

    const reset = () => {
        setCounter(0);
        setToggle(false);
    };

    useEffect(() => {
        let interval: any = null;
        if (toggle) {
            interval = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 1000);
        } else if (!toggle && counter !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [counter, toggle]);

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => reset()}>reset</button>
            <button
                onClick={() => { toggle ? setToggle(false) : setToggle(true) }}>
                {toggle ? 'pause' : 'start'}
            </button>
        </div>
    )
}

export default HooksTraining
