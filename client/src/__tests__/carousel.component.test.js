import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '../carousel.jsx';

describe('Carousel', () => {
    it ('renders correctly', () => {
        const test = renderer.create(
            <Carousel/>
        ).toJSON();
        expect(test).toMatchSnapshot();
    })
})