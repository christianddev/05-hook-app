import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';
import '../02-useEffect/effects.css';

const Memorize = () => {
    const {state: counter, increment,} = useCounter();
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <p>Counter: <Small value={counter}/></p>
            <button
                onClick={() => increment()} 
                className="btn btn-primary">+ 1</button>
            <button
                onClick={() => setShow(!show)} 
                className="btn btn-success ml-3">hide/show {JSON.stringify(show)}</button>
        </div>
    )
}

export default Memorize
