const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          photo: character.image,
          name: character.name,
          specie: character.species,
          origin: character.origin.name,
          status: character.status,
          episodes: character.episode.length,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
