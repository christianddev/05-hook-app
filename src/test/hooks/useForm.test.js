import {renderHook, act} from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('useForm.js', () => {
    const initialForm =  {
        name: 'superName',
        enail: 'email@email.com'
    }

    test('should get initial values', () => {
        const {result} = renderHook(() => useForm(initialForm));        
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    })

    test('should change name porpety value', () => {
        const {result} = renderHook(() => useForm(initialForm));        
        const handleInputChange = result.current[1];
        
        const target = {
            name: 'name',
            value: 'otherSuperName'
        };

        act(()=> {
            handleInputChange({target});
        })
        const [values] = result.current;
        expect(values).toEqual({...values, name: 'otherSuperName'});
    })

    test('should reset values', () => {
        const {result} = renderHook(() => useForm(initialForm));        
        const handleInputChange = result.current[1];
        const reset = result.current[2];
        
        const target = {
            name: 'email',
            value: 'other@email.com'
        };

        act(()=> {
            handleInputChange({target});
            reset();
        })
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    })
})