import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

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




  // it('should update film state after getMovieData is called', () => {
  //   const wrapper = shallow(<App />, { disableLifecycleMethods: true });
  //   const mockComponentDidMount = jest.fn();
  //   wrapper.instance().mockComponentDidMount();

  // });

