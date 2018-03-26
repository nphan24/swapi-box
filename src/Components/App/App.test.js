import React from 'react';
import App from './App';

describe('App', () => {
  let wrapper;

  it('should render without crashing', () => {
    const wrapper = (<App />, {disableLifeCycleMethods: true});
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


