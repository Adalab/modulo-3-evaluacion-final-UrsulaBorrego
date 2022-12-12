import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElement = props.characters.map((character) => {
    return <CharacterCard character={character} />;
  });

  return (
    <section className="container-characters">
      <ul className="characters__list">{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
