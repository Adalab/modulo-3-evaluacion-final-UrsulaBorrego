const getDataFromApi = () => {
  return fetch(
    // ESTE ENLACE ES EL SEGURO, CAMBIAR POR EL DE LA API:  "https://rickandmortyapi.com/api/character"
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          photo: character.image,
          name: character.name,
          specie: character.species,
          status: character.status,
          id: character.id,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
