export const mockFilm = {
  "title": "The Force Awakens",
  "episode_id": 7,
  "opening_crawl": "Luke Skywalker has vanished.",
  "director": "J. J. Abrams",
  "producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
  "release_date": "2015-12-11"
};

export const expectedMockFilm = {
  "title": "The Force Awakens",
  "episode": 7,
  "text": "Luke Skywalker has vanished.",
  "date": "2015-12-11"
};

export const mockPeopleData = {results:[{
  'birth_year': "19BBY",
  'created': "2014-12-09T13:50:51.644000Z",
  'edited': "2014-12-20T21:17:56.891000Z",
  'eye_color':"blue",
  'films':["https://swapi.co/api/films/2/", 
    "https://swapi.co/api/films/6/", 
    "https://swapi.co/api/films/3/", 
    "https://swapi.co/api/films/1/", 
    "https://swapi.co/api/films/7/"],
  'gender': "male",
  'hair_color': "blond",
  'height': "172",
  'homeworld': "https://swapi.co/api/planets/1/",
  'mass': "77",
  'name': "Luke Skywalker",
  'skin_color': "fair",
  'species': 
    ["https://swapi.co/api/species/1/"],
  'starships':
    ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
  'url': 
    "https://swapi.co/api/people/1/",
  'vehicles': 
    ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
}]};

export const expectedMockPeopleData = [{ "homeworld": undefined, 
  "name": "Luke Skywalker", 
  "population": undefined, 
  "species": undefined }];

export const mockPeopleArray = [{
  'birth_year': "19BBY",
  'created': "2014-12-09T13:50:51.644000Z",
  'edited': "2014-12-20T21:17:56.891000Z",
  'eye_color': "blue",
  'films': 
  ["https://swapi.co/api/films/2/", 
    "https://swapi.co/api/films/6/", 
    "https://swapi.co/api/films/3/", 
    "https://swapi.co/api/films/1/", 
    "https://swapi.co/api/films/7/"],
  'gender': "male",
  'hair_color': "blond",
  'height': "172",
  'homeworld': "https://swapi.co/api/planets/1/",
  'mass': "77",
  'name': "Luke Skywalker",
  'skin_color': "fair",
  'species': ["https://swapi.co/api/species/1/"],
  'starships': 
    ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
  'url': "https://swapi.co/api/people/1/",
  'vehicles': 
  ["https://swapi.co/api/vehicles/14/", 
    "https://swapi.co/api/vehicles/30/"]
}];

export const mockWholePeopleData = [{ 
  "homeworld": "Tatooine", 
  "name": "Luke Skywalker", 
  "population": "200000", 
  "species": "Human" 
}];

export const mockHomeWorldFetchResponse = {
  "name": 'Tatooine',
  "rotation_period": '23',
  "orbital_period": '304',
  "diameter": '10465',
  "climate": 'arid',
  "gravity": '1 standard',
  "terrain": 'desert',
  "surface_water": '1',
  "population": '200000',
  "residents":
    ['https://swapi.co/api/people/1/',
      'https://swapi.co/api/people/43/',
      'https://swapi.co/api/people/62/'],
  "films":
    ['https://swapi.co/api/films/5/',
      'https://swapi.co/api/films/4/',
      'https://swapi.co/api/films/6/',
      'https://swapi.co/api/films/3/',
      'https://swapi.co/api/films/1/'],
  "created": '2014-12-09T13:50:49.641000Z',
  "edited": '2014-12-21T20:48:04.175778Z',
  "url": 'https://swapi.co/api/planets/1/'
};

export const mockHomeWorldReturnData = [{  
  "birth_year": "19BBY", "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "eye_color": "blue", "films": ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"], "gender": "male", "hair_color": "blond", "height": "172", "homeworld": "Tatooine", "mass": "77", "name": "Luke Skywalker", "population": "200000", "skin_color": "fair", "species": ["https://swapi.co/api/species/1/"], "starships": ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"], "url": "https://swapi.co/api/people/1/", "vehicles": ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"] }];

export const mockGetSpeciesFetchResponse = {
  "name": 'Human',
  "classification": 'mammal',
  "designation": 'sentient',
  "average_height": '180',
  "skin_colors": 'caucasian, black, asian, hispanic',
  "hair_colors": 'blonde, brown, black, red',
  "eye_colors": 'brown, blue, green, hazel, grey, amber',
  "average_lifespan": '120',
  "homeworld": 'https://swapi.co/api/planets/9/',
  "language": 'Galactic Basic',
  "people":
    ['https://swapi.co/api/people/1/']
};

export const mockSpeciesReturnData = [{  
  "homeworld": "https://swapi.co/api/planets/1/",   "name": "Luke Skywalker", 
  "population": undefined, 
  "species": "Human" 
}];

export const mockPlanetData = [{
  "climate": "temperate",
  "created": "2014-12-10T11:35:48.479000Z",
  "diameter": "12500",
  "edited": "2014-12-20T20:58:18.420000Z",
  "films": ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
  " gravity": "1 standard",
  "name": "Alderaan",
  "population": "2000000000",
  "residents": ["https://swapi.co/api/people/5/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/"],
  "terrain": "grasslands, mountains",
  " url": "https://swapi.co/api/planets/2/"
}];

export const expectedMockPlanetData = [{
  "climate": "temperate",
  "name": "Alderaan",
  "population": "2000000000",
  "residents": [undefined, undefined, undefined],
  "terrain": "grasslands, mountains"
}];

export const expectedWholeMockPlanetData = [{
  "climate": "temperate",
  "name": "Alderaan",
  "population": "2000000000",
  "residents": ["Human", "Human", "Human"],
  "terrain": "grasslands, mountains"
}];

export const mockResidenturls = [
  'https://swapi.co/api/people/5/',
  'https://swapi.co/api/people/68/',
  'https://swapi.co/api/people/81/'
];

export const mockResidentsfetchResponse = {
  "name": 'Human',
  "classification": 'mammal',
  "designation": 'sentient',
  "average_height": '180',
  "skin_colors": 'caucasian, black, asian, hispanic',
  "hair_colors": 'blonde, brown, black, red',
  "eye_colors": 'brown, blue, green, hazel, grey, amber',
  "average_lifespan": '120',
  "homeworld": 'https://swapi.co/api/planets/9/',
  "language": 'Galactic Basic',
  "people": ['https://swapi.co/api/people/1/']
};

export const expectedResidentsArray = [
  "Human", "Human", "Human"
];

export const mockVehicleData = {results:[{
  "cargo_capacity":"50000",
  "consumables": "2 months",
  "cost_in_credits":"150000",
  "created": "2014-12-10T15:36:25.724000Z",
  "crew":"46",
  "edited": "2014-12-22T18:21:15.523587Z",
  "films": ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
  "length": "36.8",
  "model":"Digger Crawler",
  "name":"Sand Crawler",  
  "passengers":"30",
  "url": "https://swapi.co/api/vehicles/4/",
  "vehicle_class":"wheeled"
}]};

export const expectedMockVehicleData = [{
  "name": "Sand Crawler",
  "model": "Digger Crawler",
  "class": "wheeled",
  "passengers": "30"
}];

export const mockVehiclesArray = [{
  "cargo_capacity": "50000",
  "consumables": "2 months",
  "cost_in_credits": "150000",
  "created": "2014-12-10T15:36:25.724000Z",
  "crew": "46",
  "edited": "2014-12-22T18:21:15.523587Z",
  "films": ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
  "length": "36.8",
  "model": "Digger Crawler",
  "name": "Sand Crawler",
  "passengers": "30",
  "url": "https://swapi.co/api/vehicles/4/",
  "vehicle_class": "wheeled"
}];

export const expectedCleanedVehicleObject = {
  "name": "Sand Crawler",
  "model": "Digger Crawler",
  "class": "wheeled",
  "passengers": "30"
};




