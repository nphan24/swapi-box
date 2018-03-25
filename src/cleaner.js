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

const getHomeWorld = (peopleArray) => {
  try {
    const unresolvedPeople = peopleArray.map(async (person) => {
      const response = await fetch(person.homeworld);
      const data = await response.json();
      const { name, population } = data;
      return ({ ...person, homeworld: name, population });
    });
    const unresolved = Promise.all(unresolvedPeople);
    return unresolved;
  } catch (error) {
    return 'error';
  }
};

const getSpecies = (peopleArray) => {
  try {
    const unresolvedPeople = peopleArray.map(async (person) => {
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
  } catch (error) {
    return 'error';
  }
};

const cleanPlanetData = async (planetsArray) => {
  try {
    const unresolvedPlanets = await planetsArray.map(async (planet) => {
      const residents = await getResidents(planet.residents);
      return ({
        name: planet.name,
        climate: planet.climate, 
        population: planet.population,
        terrain: planet.terrain,
        residents: residents
      });
    });
    return Promise.all(unresolvedPlanets);
  } catch (error) {
    return 'error';
  }
};

const getResidents = async (residentsUrlArray) => {
  try {
    const unresolvedResidents = await residentsUrlArray.map(async(url) => {
      const response = await fetch(url);
      const residentObject = await response.json();
      return residentObject.name;
    });
    return Promise.all(unresolvedResidents);
  } catch (error) {
    return 'error';
  }
};

const cleanVehicleData = async (vehiclesArray) => {
  const modelArray = vehiclesArray.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    };
  });
  return modelArray;
};

export { cleanMovieData, cleanPeopleData, cleanPlanetData, cleanVehicleData };

