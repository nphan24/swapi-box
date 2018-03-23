import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
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
    wrapper = shallow(<CardContainer info={mockArray} setFavorites={mockFunction} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});