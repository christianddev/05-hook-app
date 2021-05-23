import { mount } from 'enzyme';
import React from 'react';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import UserContext from '../../../components/09-useContext/UserContext';
import { userMock } from '../../fixtures/userMock';

describe('HomeScreen', () => {
    const wrapper = mount(
        <UserContext.Provider value={{user: userMock}}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('should show HomeScreen', () => {
        expect(wrapper).toMatchSnapshot();
    })    
})