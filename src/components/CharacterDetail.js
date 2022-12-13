import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <article className="characters__list--card">
      <Link to="/">Volver</Link>
      <img
        className="characters__list--card__image"
        src={props.character.photo}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h4 className="characters__list--card__name">{props.character.name}</h4>
      <p className="characters__list--card__status">
        Status: {props.character.status}
      </p>
      <p className="characters__list--card__specie">
        Specie:
        {props.character.specie}
      </p>
      <p className="characters__list--card__origin">
        Origin:
        {props.character.origin}
      </p>
      <p className="characters__list--card__episodes">
        Episodes:
        {props.character.episodes}
      </p>
    </article>
  );
};

export default CharacterDetail;
