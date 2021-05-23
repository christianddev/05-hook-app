import todoReducer from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";



describe('todoReducer.js', () => {
    test('should return default value', () => {
        const state = todoReducer(demoTodos, {type: 'someAction'});
        expect(state).toEqual(demoTodos);        
    })

    test('should add new TODO', () => {
        const id = new Date().getTime()
        const newTodo = {
            id: id,
            desc: 'newTODO',
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo
       }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);        
        expect(state.find((s) => s.id === id)).toEqual(newTodo);        
    })

    test('should delete TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
       }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);   
        expect(state.some((s) => s.id === 1)).toBe(false);              
    })

    test('should toggle TODO', () => {
        const action = {
            type: 'toggle',
            payload: 2
       }
        const state = todoReducer(demoTodos, action);
        expect(state.some((s) => s.done === true)).toBe(true);             
    })
    
})