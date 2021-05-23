import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

const RealExempleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>RealExempleRef</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <button
                className="btn btn-primary mt-5"
                onClick={() => setShow(!show)}
            >
                SHow/Hide
            </button>
        </div>
    )
}

export default RealExempleRef;
