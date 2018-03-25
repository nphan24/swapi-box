import React from 'react';
import Planets from './Planets';
import { shallow } from 'enzyme';

describe('Planets', () => {
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
    wrapper = shallow(<Planets info={mockArray} setFavorites={mockFunction} 
    favorites={mockArray}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});