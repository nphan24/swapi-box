import { 
  cleanMovieData, 
  cleanPeopleData, 
  cleanPlanetData, 
  cleanVehicleData 
} from './cleaner.js';

const root = 'https://swapi.co/api/';

const getMovieData = async (randomNumber) => {
  try {
    const response = await fetch(`${root}films/${randomNumber}`);
    const data = await response.json();
    const movieData = cleanMovieData(data);
    return movieData;
  } catch (error) {
    return 'error';
  }
};

const getPeopleData = async () => {
  try {
    const response = await fetch(`${root}people`);
    const data = await response.json();
    const peopleObject = cleanPeopleData(data.results);
    return peopleObject;
  } catch (error) {
    return 'error';
  }
};

const getPlanetData = async () => {
  try {
    const response = await fetch(`${root}planets`);
    const data = await response.json();
    const planetObject = cleanPlanetData(data.results);
    return planetObject;
  } catch (error) {
    return 'error';
  }
};

const getVehicleData = async () => {
  try {
    const response = await fetch(`${root}vehicles`);
    const data = await response.json();
    const vehiclesObject = cleanVehicleData(data.results);
    return vehiclesObject;
  } catch (error) {
    return 'error';
  }
};

export { 
  getMovieData, 
  getPeopleData, 
  getPlanetData, 
  getVehicleData 
};



