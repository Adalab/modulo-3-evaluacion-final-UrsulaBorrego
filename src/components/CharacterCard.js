const CharacterCard = (props) => {
  return (
    <li className="characters__list--card" key={props.character.id}>
      <a href={props.character.id}>
        <img
          className="characters__list--card__image"
          src={props.character.photo}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <h4 className="characters__list--card__name">{props.character.name}</h4>
        <p className="characters__list--card__specie">
          {props.character.specie}
        </p>
        <p className="characters__list--card__status">
          {props.character.status}
        </p>
      </a>
    </li>
  );
};

export default CharacterCard;
