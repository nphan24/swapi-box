import { cleanMovieData, 
  cleanPeopleData,
  getHomeWorld,
  getSpecies,
  cleanPlanetData,
  getResidents,
  cleanVehicleData 
} from './cleaner';
import {
  mockFilm,
  expectedMockFilm,
  mockPeopleArray,
  mockWholePeopleData,
  mockHomeWorldFetchResponse,
  mockHomeWorldReturnData,
  mockGetSpeciesFetchResponse,
  mockSpeciesReturnData,
  mockPlanetData,
  expectedWholeMockPlanetData,
  mockResidenturls,
  mockResidentsfetchResponse,
  expectedResidentsArray,
  mockVehiclesArray,
  expectedCleanedVehicleObject
} from './mockData';

describe('cleanMovieData', () => {
  const data = mockFilm;
  const actual = cleanMovieData(data);

  it('should return the expected object given the data', () => {
    expect(actual).toEqual(expectedMockFilm);
  });
});

describe('cleanPeopleData', () => {
  
  it('should return the expected whole people object', async() => {
    const peopleArray = mockPeopleArray;
    const actual = await cleanPeopleData(peopleArray);
    expect(actual).toEqual(mockWholePeopleData);
  });
});

describe('getHomeWorld', () => {

  it('should fetch in the getHomeWorld method', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockHomeWorldFetchResponse);
      })
    }));
    getHomeWorld(mockPeopleArray);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should throw an error if fetching fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expected = 'error';
    const result = await getHomeWorld();
    expect(result).toEqual(expected);
  });

  it('should return the correct object', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockHomeWorldFetchResponse);
      })
    }));
    const result = await getHomeWorld(mockPeopleArray);
    expect(result).toEqual(mockHomeWorldReturnData);
  });
});

describe('getSpecies', () => {

  it('should fetch in getSpecies method', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockGetSpeciesFetchResponse);
      })
    }));
    getSpecies(mockPeopleArray);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should throw an error if fetching fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expected = 'error';
    const result = await getSpecies();
    expect(result).toEqual(expected);
  });

  it('should return the correct people object', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockGetSpeciesFetchResponse);
      })
    }));
    const result = await getSpecies(mockPeopleArray);
    expect(result).toEqual(mockSpeciesReturnData);
  });
});

describe('cleanPlanetData', () => {

  it('should return the expected planet object', async () => {
    const planetsArray = mockPlanetData;
    const actual = await cleanPlanetData(planetsArray);
    expect(actual).toEqual(expectedWholeMockPlanetData);
  });
});

describe('getResidents', () => {

  it('should fetch residents in the getResidents method', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockResidentsfetchResponse);
      })
    }));
    getResidents(mockResidenturls);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should throw an error if fetching residents fail', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const expected = 'error';
    const result = await getResidents();
    expect(result).toEqual(expected);
  });

  it('should return the correct residents name', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockResidentsfetchResponse);
      })
    }));
    const result = await getResidents(mockResidenturls);
    expect(result).toEqual(expectedResidentsArray);
  });
});

describe('cleanerVehicleData', async() => {
  const vehiclesArray = mockVehiclesArray;
  const actual = await cleanVehicleData(vehiclesArray);
  const expected = expectedCleanedVehicleObject;

  it('should return the expected object given the data', () => {
    expect(actual).toEqual(expected);
  });
});