import React from 'react';
import { todosMock } from "../../fixtures/todosMock";
import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';

describe('TodoList.js', () => {
    
    const handleDeleteTodo = jest.fn();
    const handleToggleTodo = jest.fn();
    const wrapper = shallow(
         <TodoList 
             todos={todosMock} 
             handleToggleTodo={handleToggleTodo} 
             handleDeleteTodo={handleDeleteTodo} 
         />
     ); 

    test('should show TodoList', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should show TodoListItem', () => {
         expect(wrapper.find('TodoListItem').length).toBe(todosMock.length);
         expect(wrapper.find('TodoListItem').at(0).prop('handleToggleTodo')).toEqual(expect.any(Function));
         expect(wrapper.find('TodoListItem').at(0).prop('handleDeleteTodo')).toEqual(expect.any(Function));
     })

    
})