import { useState } from "react";

 export const useCounter = (initialState = 10) => {
    const [counter, setState] = useState(initialState);

    const increment = ( factor = 1) => {
        setState(counter + factor)
    }

    const decrement = (factor = 1) => {
        setState(counter - factor)
    }

    const reset = () => {
        setState((state) => state = initialState)
    }

    return {
        state: counter,
        increment,
        decrement,
        reset
    };
}
