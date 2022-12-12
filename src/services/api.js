const getDataFromApi = () => {
  return fetch(
    // ESTE ENLACE ES EL SEGURO, CAMBIAR POR EL DE LA API:  "https://rickandmortyapi.com/api/character"
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          photo: character.image,
          name: character.name,
          specie: character.species,
          planet: character.origin.name,
          status: character.status,
          // episodes: recorrer el array dentro de character.episode para decir en cuántos episodios aparece
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
