import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import {useCounter} from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('RealExempleRef.js', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 15,
            increment: () => {}
        });
    })

    test('should show MultipleCustomHooks', () => {
        useFetch.mockReturnValue({
            data: null, 
            loading: true, 
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show information', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'authorXD',
                quote: 'quoteXDD'
            }], 
            loading: false, 
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('p').text().trim()).toBe('quoteXDD');
        expect(wrapper.find('footer').text().trim()).toBe('authorXD');
    })

})