import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GuessList from './guesslist';

describe('<GuessList />', () => {
    const guesses = [25, 50];
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={guesses} />);
    });

});
