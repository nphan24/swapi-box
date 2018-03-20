const cleanMovieData = (data) => {
  return {
    title: data.title,
    date: data.release_date,
    text: data.opening_crawl,
    episode: data.episode_id
  };
};

const cleanPeopleData = (peopleData) => {
  console.log(peopleData);
  return {
    people: peopleData.name,
    homeworld: peopleData.homeworld,
    species: 
  };
};



export { cleanMovieData, cleanPeopleData }

