import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockObject;
  let mockFunction;

  beforeEach(()=> {
    mockObject = {
      name: 'Cat',
      homeworld: 'Tatooine',
      population: '5'
    };
    mockFunction = jest.fn();
    wrapper = shallow(<Card info={mockObject} setFavorites={mockFunction} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should create a new card for every element with the correct number of keys', () => {
    expect(wrapper.find('p').length).toEqual(2);
  });

  it('should call setFavorites on click', () => {
    wrapper.find('button').simulate('click');
    expect(setFavorites).toHaveBeenCalledWith(mockObject);
  });
});