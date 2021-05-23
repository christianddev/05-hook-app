import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch";

describe('useFetch.js', () => {
    test('should return defaut information', () => {
        const {result} = renderHook(() => useFetch('https://breakingbadapi.com/api/quotes/1'));
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    // test('should return information & loading & error equal to false', async() => {
    //     const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
    //     await waitForNextUpdate();

    //     const { data, loading, error } = result.current;

    //     expect( data.length ).toBe(1);
    //     expect( loading ).toBe( false );
    //     expect( error ).toBe( null );
    // });

    test('should return information & loading & error equal to false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apiaaaa/users?page=2'));
        await waitForNextUpdate();
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('Error');
    });
    
})