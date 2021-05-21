import { shallow } from 'enzyme';
import React from 'react';
import HookApp from '../HookApp';

describe('HookApp.js', () => {

    test('should show HookApp', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})