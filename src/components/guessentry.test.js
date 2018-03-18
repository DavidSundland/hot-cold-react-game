import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GuessEntry from './guessentry';

describe('<GuessEntry />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessEntry />);
    });

    it('Should fire the onGuess callback when a guess is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessEntry onGuess={callback} />);
        const value = '50';
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(Number(value));
    });

    it('Should not change props if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessEntry onGuess={callback} />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });

});
