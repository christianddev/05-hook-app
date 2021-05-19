import React, { useState } from 'react';
import './counter.css';

export default function CounterApp() {
    const [state, setState] = useState({counter1: 10, counter2: 20, counter3: 30})
    const {counter1, counter2} = state; 
    const handleCounter = () => {
        setState(() => {
            return {
                ...state,
                counter1: counter1+1,
            }
        });
    }
    console.log('counter', counter1)

    return (
        <div>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr/>
            <button onClick={handleCounter} className="btn btn-primary"> + 1</button>
        </div>
    )
}
