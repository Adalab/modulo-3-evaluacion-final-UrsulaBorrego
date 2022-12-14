import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <article className="characters__detail--card">
      <Link className="characters__detail--card__back" to="/">
        ⬅ Go back
      </Link>
      <img
        className="characters__detail--card__image"
        src={props.character.photo}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <h4 className="characters__detail--card__name">{props.character.name}</h4>
      <p className="characters__detail--card__specie">
        Specie: {props.character.specie}
      </p>
      <p className="characters__detail--card__text">
        Status: {props.character.status}
      </p>
      <p className="characters__detail--card__text">
        Origin: {props.character.origin}
      </p>
      <p className="characters__detail--card__text">
        Episodes: {props.character.episodes}
      </p>
    </article>
  );
};

export default CharacterDetail;
