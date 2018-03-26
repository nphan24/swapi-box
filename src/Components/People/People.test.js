import React from 'react';
import People from './People';
import { shallow } from 'enzyme';

describe('People', () => {
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
    wrapper = shallow(<People 
      info={mockArray} 
      setFavorites={mockFunction} 
      favorites ={mockArray}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});