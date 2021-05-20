import React, { useCallback, useEffect, useState } from 'react';
import ShowIncrement from './ShowIncrement';
import '../02-useEffect/effects.css';

const CallBackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment =  useCallback(
        (num) => {
            setCounter((c) => c +num)
        },
        [setCounter]);

    useEffect(() => {
       // 
    }, [increment])

    return (
        <div>
            <h1>CallBackHook</h1>
            <hr/>
            {counter}
            <ShowIncrement increment={increment}/>
        </div>
    )
}


export default CallBackHook
