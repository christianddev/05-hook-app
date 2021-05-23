import React from 'react';
import {shallow, mount } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('TodoApp.js', () => {

    const wrapper = shallow(<TodoApp/>)
    Storage.prototype.setItem = jest.fn(() => {});
    
    test('should show TodoApp', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should add TodoApp', () => {
        const wrapper = mount(<TodoApp/>);
        act(() => {
            demoTodos.forEach((todo) => wrapper.find('TodoAdd').prop('handleAddTodo')(todo));
        });
        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (${demoTodos.length})`);
        expect(localStorage.setItem).toHaveBeenCalledTimes(demoTodos.length);    
    })

    test('should delete one todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDeleteTodo')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (0)`);
    })
    
    
})