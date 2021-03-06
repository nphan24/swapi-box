import React from 'react';
import Summary from './Summary';
import { shallow } from 'enzyme';

describe('Summary', () => {
  let wrapper;
  let mockObject;

  beforeEach(() => {

    mockObject = {
      name: 'Cat',
      homeworld: 'Tatooine',
      population: '5'
    };

    wrapper = shallow(<Summary film={mockObject} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});