import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  let mockFunction;

  beforeEach(() => {
    mockFunction= jest.fn();

    wrapper = shallow(<Nav setInfo={mockFunction} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});