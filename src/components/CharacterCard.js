import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <li key={props.character.id}>
      <Link
        className="characters__list--card"
        to={`/character/${props.character.id}`}
      >
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
      </Link>
    </li>
  );
};

export default CharacterCard;
