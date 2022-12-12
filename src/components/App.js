import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
//IMAGES
import serieLogo from "../images/Rick_and_Morty_title_card.png";
//STYLES
import "../styles/App.scss";
//COMPONENTS
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";

function App() {
  const [dataCharacter, setDataCharacter] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setDataCharacter(cleanData);
    });
  }, []);

  return (
    <>
      <header className="header"></header>

      <main className="main">
        <input
          className="input__search"
          type="text"
          placeholder="Escribe aquí un personaje"
        />

        <CharacterList characters={dataCharacter}></CharacterList>
      </main>
    </>
  );
}

export default App;
