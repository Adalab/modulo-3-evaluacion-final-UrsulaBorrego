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

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setDataCharacter(cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  //Función para que no recargar la página cada vez que damos a Enter
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //Función para filtrar y pintar las tarjetas
  const listCharacters = () => {
    return dataCharacter.filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
    );
    // .sort();
  };

  //Mensaje de error para cuando no hay personaje de lo que hemos escrito
  const errorMessage =
    listCharacters().length === 0
      ? `No hay ningún personaje que coincida con la palabra:${filterByName.toLowerCase()}`
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
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Filters
                filterByName={filterByName}
                errorMessage={errorMessage}
                handleFilterName={handleFilterName}
                handleSubmit={handleSubmit}
              ></Filters>
              <CharacterList
                filterByName={filterByName}
                characters={listCharacters(dataCharacter)}
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
