import { mockFilm, 
  expectedMockFilm, 
  mockPeopleData, 
  expectedMockPeopleData, 
  mockPlanetData, 
  expectedMockPlanetData, 
  mockVehicleData, 
  expectedMockVehicleData } from './mockData';
import { getMovieData, 
  getPeopleData, 
  getPlanetData, 
  getVehicleData } from './api';

describe('getMovieData', () => {

  it('should expect fetch to have been called in get movie data method', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockFilm);
      })
    }));
    getMovieData();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should expect fetch to have been called with the expected params', () => {
    const expectedParams = 'https://swapi.co/api/films/1';

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockFilm);
      })
    }));
    getMovieData(1);
    expect(window.fetch).toHaveBeenCalledWith(expectedParams);
  });

  it('should throw an error if fetching fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expected = 'error';
    const result = await getMovieData();
    expect(result).toEqual(expected);
  });

  it('should return the correct clean film data', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockFilm);
      })
    }));
    const result = await getMovieData();
    expect(result).toEqual(expectedMockFilm);
  });
});

describe('getPeopleData', () => {

  it('should expect fetch to have been called in getPeopleData method', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockPeopleData);
      })
    }));
    getPeopleData();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should expect fetch to have been called with the expected params', () => {
    const expectedParams = 'https://swapi.co/api/people';

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockPeopleData);
      })
    }));
    getPeopleData();
    expect(window.fetch).toHaveBeenCalledWith(expectedParams);
  });

  it('should throw an error if fetching fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expected = 'error';
    const result = await getPeopleData();
    expect(result).toEqual(expected);
  });

  it('should return the correct clean people data', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockPeopleData);
      })
    }));
    const result = await getPeopleData();
    expect(result).toEqual(expectedMockPeopleData);
  });
});

describe('getPlanetData', () => {

  it('should expect fetch to have been called in getPlanetData method', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockPlanetData);
      })
    }));
    getPlanetData();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should expect fetch to have been called with the expected params', () => {
    const expectedParams = 'https://swapi.co/api/planets';

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockPlanetData);
      })
    }));
    getPlanetData();
    expect(window.fetch).toHaveBeenCalledWith(expectedParams);
  });

  it('should throw an error if fetching fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expected = 'error';
    const result = await getPlanetData();
    expect(result).toEqual(expected);
  });

  it('should return the correct clean Planet data', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockPlanetData);
      })
    }));
    const result = await getPlanetData();
    expect(result).toEqual(expectedMockPlanetData);
  });
});

describe('getVehicleData', () => {

  it('should expect fetch to have been called in getVehicleData method', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockVehicleData);
      })
    }));
    getVehicleData();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should expect fetch to have been called with the expected params', () => {
    const expectedParams = 'https://swapi.co/api/vehicles';

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockVehicleData);
      })
    }));
    getVehicleData();
    expect(window.fetch).toHaveBeenCalledWith(expectedParams);
  });

  it('should throw an error if fetching fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expected = 'error';
    const result = await getVehicleData();
    expect(result).toEqual(expected);
  });

  it('should return the correct clean Vehicle data', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockVehicleData);
      })
    }));
    const result = await getVehicleData();
    expect(result).toEqual(expectedMockVehicleData);
  });
});