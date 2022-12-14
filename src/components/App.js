import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//STYLES
import "../styles/App.scss";
//COMPONENTS
import getDataFromApi from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterByEpisodes, setFilterByEpisodes] = useState(0);
  const [filterBySpecie, setFilterBySpecie] = useState("all");

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setDataCharacter(cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  const handleFilterEpisodes = (value) => {
    setFilterByEpisodes(value);
  };

  const handleFilterSpecie = (value) => {
    setFilterBySpecie(value);
  };

  //Función para que no recargar la página cada vez que damos a Enter
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //Función para filtrar y pintar las tarjetas
  const filteredCharacters = () => {
    return dataCharacter
      .filter((eachCharacter) =>
        eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
      )
      .filter((eachCharacter) => {
        return filterByEpisodes === 0
          ? true
          : eachCharacter.episodes === parseInt(filterByEpisodes);
      })
      .filter((eachCharacter) => {
        return filterBySpecie === "all"
          ? true
          : eachCharacter.specie === filterBySpecie;
      });
  };

  //Mensaje de error para cuando no hay personaje de lo que hemos escrito
  const errorMessage =
    filteredCharacters().length === 0
      ? `There's no character that matches the word: ${filterByName.toLowerCase()}`
      : null;

  //Recorrido para Routes
  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:characterId", pathname);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  const characterFound = dataCharacter.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <>
      <audio src="rick-and-morty-theme.mp3" autoplay="autoplay"></audio>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Filters
                filterByName={filterByName}
                errorMessage={errorMessage}
                handleFilterName={handleFilterName}
                handleFilterEpisodes={handleFilterEpisodes}
                handleFilterSpecie={handleFilterSpecie}
                handleSubmit={handleSubmit}
              ></Filters>
              <CharacterList
                filterByName={filterByName}
                characters={filteredCharacters(dataCharacter)}
              ></CharacterList>
            </main>
          }
        ></Route>
        <Route
          path="/character/:characterId"
          element={
            <CharacterDetail character={characterFound}></CharacterDetail>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
