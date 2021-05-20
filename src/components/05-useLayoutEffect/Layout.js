import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {
    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({});
    const {state: counter, increment} = useCounter(1);
    const {data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    const {quote}= !!data && data[0];

    useLayoutEffect(() => setBoxSize(pTag.current.getBoundingClientRect()), [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
            <blockquote className="blockquote">
                <p ref={pTag}>{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, 0 , 3)}
            </pre>

            <button className="btn btn-primary" onClick={() => increment()}>Next</button>
                       
        </div>
    )
}
    
export default Layout;
