import React from 'react';
import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe('TodoAdd.js', () => {
    const handleAddTodo = jest.fn()
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('should show TodoAdd', () => {
        expect(wrapper).toMatchSnapshot();
    })    

    test('should not call handleAddTodo', () => {
      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({ preventDefault(){}});
      expect(handleAddTodo).not.toHaveBeenCalled();
    })

    test('should call handleAddTodo', () => {
      const value = 'todoXD';
      const event = {target: {value: value, name: 'description'}};
      wrapper.find('input').simulate('change', event)
      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({ preventDefault(){}});
      expect(handleAddTodo).toHaveBeenCalled();
      expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
      expect(handleAddTodo).toHaveBeenCalledWith({id: expect.any(Number), desc: value, done: false});
      expect( wrapper.find('input').prop('value')).toBe('');
    })
    
});