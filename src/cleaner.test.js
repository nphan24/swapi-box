import React from 'react';
import cleaner from './cleaner';
import { shallow } from 'enzyme';

describe('cleaner', () => {
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
    wrapper = shallow(<cleaner />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});