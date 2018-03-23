import React from 'react';
import Vehicles from './Vehicles';
import { shallow } from 'enzyme';

describe('Vehicles', () => {
  let wrapper;
  let mockFunction;
  let mockArray;

  beforeEach(() => {

    mockArray = [{
      name: 'Cat',
      homeworld: 'Tatooine',
      population: '5'
    }];

    mockFunction = jest.fn();
    wrapper = shallow(<Vehicles info={mockArray} setFavorites={mockFunction} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});