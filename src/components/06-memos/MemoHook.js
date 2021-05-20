import React, { useMemo, useState } from 'react';
import heavyProcess from '../../helpers/heavyProcess';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

const MemoHook = () => {
    const {state: counter, increment,} = useCounter(200);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>
            <p>Counter: <small>{counter}</small></p>
            <p>{memoHeavyProcess}</p>
            <button
                onClick={() => increment()} 
                className="btn btn-primary">+ 1</button>
            <button
                onClick={() => setShow(!show)} 
                className="btn btn-success ml-3">hide/show {JSON.stringify(show)}</button>
        </div>
    )
}

export default MemoHook
