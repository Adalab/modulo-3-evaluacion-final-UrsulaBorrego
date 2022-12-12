// import "../styles/App.scss";
import { useEffect, useState } from "react";
import getDataFromApi from "../services/api";

function App() {
  const [dataCharacter, setDataCharacter] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      console.log(cleanData);
      setDataCharacter(cleanData);
    });
  }, []);

  return <div className="App">Rellename!</div>;
}

export default App;
