import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
//IMAGES
// import serieLogo from "../images/Rick_and_Morty_title_card.png";
//STYLES
import "../styles/App.scss";
//COMPONENTS
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

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
  };

  return (
    <>
      <header className="header"></header>

      <main className="main">
        <Filters
          filterByName={filterByName}
          handleFilterName={handleFilterName}
          handleSubmit={handleSubmit}
        ></Filters>
        <CharacterList
          characters={listCharacters(dataCharacter)}
        ></CharacterList>
      </main>
    </>
  );
}

export default App;
