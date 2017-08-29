import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Greeter } from './Greeter';

describe('Greeter', () => {

    it('shows two inputs and default text', () => {
        const wrapper = shallow(<Greeter salutation={'Hey '}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});