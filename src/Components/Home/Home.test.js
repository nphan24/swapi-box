import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Home/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});