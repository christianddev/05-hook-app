import React from 'react';
import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen"
import UserContext from '../../../components/09-useContext/UserContext';

describe('LoginScreen', () => {
    const setUser = jest.fn(() => {});
    const wrapper = mount(
      <UserContext.Provider value={{setUser}}>
          <LoginScreen/>
      </UserContext.Provider>
    );
    
    test('should show LoginScreen', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call setUser', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toBeCalledWith({id: expect.any(Number), name: expect.any(String)});
    })
    
})
