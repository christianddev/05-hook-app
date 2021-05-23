import {renderHook, act} from '@testing-library/react-hooks'
import useCounter from '../../hooks/useCounter';

describe('useCounter.js', () => {
    test('should return default values', () => {
        const {result} = renderHook(() => useCounter());
        const {state, increment, decrement, reset} = result.current;

        expect(state).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    })
    
    test('should return counter at 100', () => {
        const {result:{current:{state}}} = renderHook(() => useCounter(100));

        expect(state).toBe(100);
    })

    test('should increment counter in 2', () => {
        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;
        act(() => increment(2) );        
        const {state} = result.current;
        expect(state).toBe(102);
    })
    
    test('should decrement counter in 3', () => {
        const {result} = renderHook(() => useCounter(100));
        const {decrement} = result.current;
        act(() => decrement(3) );

        const {state} = result.current;
        expect(state).toBe(97);
    })
    
    test('should reset counter', () => {
        const {result} = renderHook(() => useCounter(30));
        const {increment, reset} = result.current;
        act(() => {
            increment(15);
            reset();
        } );
        const {state} = result.current;
        expect(state).toBe(30);
    })
});