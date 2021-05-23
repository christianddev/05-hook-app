import { mount } from 'enzyme';
import React from 'react';
import AppRouter from '../../../components/09-useContext/AppRouter';
import UserContext from '../../../components/09-useContext/UserContext';
import { userMock } from '../../fixtures/userMock';

describe('AppRouter.js', () => {

    const wrapper = mount(
        <UserContext.Provider value={{user: userMock}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should AppRouter', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
