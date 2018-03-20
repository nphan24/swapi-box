import { cleanMovieData, cleanPeopleData } from './cleaner.js';

const root = 'https://swapi.co/api/';

const getMovieData = async () => {
  const randomNumber = Math.floor((Math.random() * 7) + 1);
  const response = await fetch(`${root}films/${randomNumber}`);
  const data = await response.json();
  const movieData = cleanMovieData(data);
  return movieData;
};

const getPeopleData = async () => {
  const response = await fetch(`${root}people`);
  const data = await response.json();
  const peopleArray = cleanPeopleData(data);
  return peopleArray;
};

const getHomeWorld = async () => {
  const response = await fetch(`${root}planets`);
};

export { getMovieData, getPeopleData };



