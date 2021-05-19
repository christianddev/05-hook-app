import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';

export default function CounterWithCustomHook() {
    const {state, increment, decrement, reset} = useCounter();

    return (
        <div>
            <h1>CounterWithCustomHook {state}</h1>
            <button onClick={() => increment(1)} className="btn btn-primary"> +1</button>
            <button onClick={() => reset(2)} className="btn btn-success">reset</button>
            <button onClick={() => decrement(2)} className="btn btn-secondary"> -1</button>
        </div>
    )
}
