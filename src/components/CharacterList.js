import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  //.sort para ordenar alfabéticamente las tarjetas
  props.characters.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  const characterElement = props.characters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });

  return (
    <section className="container__characters">
      <ul className="characters__list">{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
