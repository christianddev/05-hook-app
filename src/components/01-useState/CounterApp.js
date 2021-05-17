import React, { useState } from 'react';
import './counter.css';

export default function CounterApp() {
    const [{counter1, counter2}, setCounter] = useState({counter1: 10, counter2: 20})
    const handleCounter = () => {
        setCounter(({counter1,counter2}) => {
            return {
                counter1: counter1+1,
                counter2: counter2
            }
        });
    }
    console.log('counter', counter1)

    return (
        <div>
            {/* <h1>Counter {counter}</h1> */}
            <hr/>
            <button onClick={handleCounter} className="btn btn-primary"> + 1</button>
        </div>
    )
}
