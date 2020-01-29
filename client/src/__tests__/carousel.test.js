import React from 'react';
import { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'
import Carousel from '../carousel.jsx';
import axios from 'axios';

describe('Carousel', () => {
    it ('should be true', () => {
        const foo = true;
        expect(foo).toBe(true)
    });
    it ('should show text', () => {
        const wrapper = shallow(<Carousel />);
        const text = wrapper.find('div div');
        expect(text.text()).toBe('hello from carousel');
    })
    it ('should receive images from axios call', done => {
        const promise = new Promise((resolve, reject) => 
          setTimeout(
              () =>
              resolve({
                  data: {
                      images: [
                          {HouseID: '11', URL: ''}
                      ],
                  },
              }),
            100
          )
        );
        axios.get = jest.fn(() =>promise);
        const wrapper = mount(<Carousel />);
        expect(wrapper.find('images').length).toEqual(0);

        promise.then(() => {
            setImmediate(() => {
                wrapper.update();
                expect(wrapper.find('images').length).toEqual(1);
                axios.get.mockClear();
                done();
            })
        })
        // const instance = wrapper.instance();
        // instance.componentDidMount();
        
        // expect(instance).to.be.instanceOf(Carousel);
        
    })
})