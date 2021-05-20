import React from 'react'
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {
    const {state: counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    // console.log('state', loading, data)
    const {author, quote}= !!data && data[0];

    return (
        <div>
            <h1>breaking Bad Quotes</h1>
            <hr/>
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading..
                        </div>
                    )
                :
                    (
                        <div>
                            <blockquote className="blockquote">
                                <p >{quote}</p>
                                <footer className="blockquote-footer">{author}</footer>
                            </blockquote>
    
                            <button className="btn btn-primary" onClick={() => increment()}>Next</button>
                        </div>
                    )
            }

        </div>
    )
}
    
export default MultipleCustomHooks;
