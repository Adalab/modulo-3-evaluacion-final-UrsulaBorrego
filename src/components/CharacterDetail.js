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
      <div className="characters__detail--card__text">
        <h4 className="characters__detail--card__text--name">
          {props.character.name}
        </h4>
        <p className="characters__detail--card__text--specie">
          Specie: {props.character.specie}
        </p>
        <p className="characters__detail--card__text--others">
          Status: {props.character.status}
        </p>
        <p className="characters__detail--card__text--others">
          Origin: {props.character.origin}
        </p>
        <p className="characters__detail--card__text--others">
          Episodes: {props.character.episodes}
        </p>
      </div>
    </article>
  );
};

export default CharacterDetail;
