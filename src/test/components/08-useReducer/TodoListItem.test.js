import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";

describe('TodoListItem.js', () => {

    const handleDeleteTodo = jest.fn();
    const handleToggleTodo = jest.fn();
    const index = 0;
    const todo = demoTodos[0];
    let wrapper = shallow(
        <TodoListItem 
            index={index} 
            todo={todo} 
            handleToggleTodo={handleToggleTodo} 
            handleDeleteTodo={handleDeleteTodo}  
        />
    );

    test('should show TodoListItem', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call handleDeleteTodo', () => {
        wrapper.find('button').simulate('click');
        expect(handleDeleteTodo).toHaveBeenCalledWith(todo.id);
    })

    test('should call handleToggleTodo', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggleTodo).toHaveBeenCalledWith(todo.id);
    })

    test('should check text', () => {
        expect(wrapper.find('p').text().trim()).toBe(`${index + 1}. ${todo.desc}`);
    })

    test('should check class', () => {
        todo.done = true
        wrapper = shallow(
            <TodoListItem 
                index={index} 
                todo={todo} 
                handleToggleTodo={handleToggleTodo} 
                handleDeleteTodo={handleDeleteTodo}  
            />
        );
        expect(wrapper.find('.complete').exists()).toBe(todo.done);
    })
    
});