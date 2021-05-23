import React from 'react';
import { demoTodos } from "../../fixtures/demoTodos";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';

describe('TodoList.js', () => {
    
    const handleDeleteTodo = jest.fn();
    const handleToggleTodo = jest.fn();
    const wrapper = shallow(
         <TodoList 
             todos={demoTodos} 
             handleToggleTodo={handleToggleTodo} 
             handleDeleteTodo={handleDeleteTodo} 
         />
     ); 

    test('should show TodoList', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should show TodoListItem', () => {
         expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
         expect(wrapper.find('TodoListItem').at(0).prop('handleToggleTodo')).toEqual(expect.any(Function));
         expect(wrapper.find('TodoListItem').at(0).prop('handleDeleteTodo')).toEqual(expect.any(Function));
     })

    
})