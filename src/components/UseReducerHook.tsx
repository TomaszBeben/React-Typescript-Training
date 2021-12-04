import React, { useReducer } from 'react'

type InitialState = {
    counter: number;
}

type IncrementCounter = {
    type: 'increment';
    payload: number;
}
type DecrementCounter = {
    type: 'decrement';
    payload: number;
}
type ActionType = IncrementCounter | DecrementCounter;

const incrementAction = (payload: number) : IncrementCounter => ({
    type: 'increment',
    payload: payload,
})
const decrementAction = (payload: number) : DecrementCounter => ({
    type: 'decrement',
    payload: payload,
})

const reducer = (state: InitialState, action: ActionType) => {
    switch(action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload };
        case 'decrement':
            return { ...state, counter: state.counter - action.payload };
    }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    return (
        <div>
            <p>{state.counter}</p>
            <button onClick={() => dispatch(incrementAction(5))} >+</button>
            <button onClick={() => dispatch(decrementAction(5))} >-</button>
        </div>
    )
}

export default UseReducerHook
