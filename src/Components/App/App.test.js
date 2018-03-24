import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockFunction;
  let mockArray;
  let mockObject;

  beforeEach(()=> {
    mockFunction = jest.fn();
    mockArray = [{
      name: 'Cat',
      homeworld: 'Tatooine',
      population: '5'
    },
    {
      name:'dog',
      homeworld: 'Earth',
      population: '10'
    }];
  });

  mockObject = {
    name: 'Cat',
    homeworld: 'Tatooine',
    population: '5'
  };

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: 'true',
    json: () => Promise.resolve([mockArray])
  }));

  it('renders without crashing', () => {
    const wrapper = (<App />, {disableLifeCycleMethods: true});
    expect(wrapper).toBeDefined();
  });



  // it('should update film state after getMovieData is called', () => {
  //   const wrapper = shallow(<App />, { disableLifecycleMethods: true });
  //   const mockComponentDidMount = jest.fn();
  //   wrapper.instance().mockComponentDidMount();

  // });
});

