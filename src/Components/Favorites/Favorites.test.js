import React from 'react';
import Favorites from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Favorites />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});