import { cleanMovieData, cleanPeopleData } from './cleaner.js';

const root = 'https://swapi.co/api/';

const getMovieData = async () => {
  try {
    const randomNumber = Math.floor((Math.random() * 7) + 1);
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
  
}

export { getMovieData, getPeopleData };



