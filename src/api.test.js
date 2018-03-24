import React from 'react';
import api from './api';
import { shallow } from 'enzyme';

describe('api', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<api/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});