import React from 'react';
import { shallow } from 'enzyme';
import RealExempleRef from '../../../components/04-useRef/RealExempleRef';

describe('RealExempleRef.js', () => {
    const wrapper = shallow(<RealExempleRef />);

    test('should show RealExempleRef', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })

    test('should show RealExempleRef', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
})