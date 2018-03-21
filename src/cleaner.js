const cleanMovieData = (data) => {
  return {
    title: data.title,
    date: data.release_date,
    text: data.opening_crawl,
    episode: data.episode_id
  };
};

const cleanPeopleData = async (peopleArray) => {
  const peopleWithHomeWorld = await getHomeWorld(peopleArray);
  const peopleObject = await getSpecies(peopleWithHomeWorld);
  return peopleObject;
};

const getHomeWorld = async (peopleArray) => {
  try {
    const unresolvedPeople = await peopleArray.map(async (person) => {
      const response = await fetch(person.homeworld);
      const data = await response.json();
      const { name, population } = data;
      return ({ ...person, homeworld: name, population });
    });
    return Promise.all(unresolvedPeople);
  } catch (error) {
    return 'error';
  }
};

const getSpecies = async (peopleArray) => {
  const unresolvedPeople = await peopleArray.map(async (person) => {
    const response = await fetch(person.species);
    const speciesData = await response.json();
    return ({
      name: person.name,
      homeworld: person.homeworld,
      population: person.population,
      species: speciesData.name
    });
  });
  return Promise.all(unresolvedPeople);
};

const cleanPlanetData = async (planetsArray) => {
  // const unresolvedPeople = 
  console.log(planetsArray);
};

export { cleanMovieData, cleanPeopleData, cleanPlanetData };

