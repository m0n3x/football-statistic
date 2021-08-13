import React from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addTeam, removeTeam } from "../../store/actions";

const Card = ({ id, url, name, shortName }) => {
  const favourites = useSelector((state) => state.favourites);

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const team = { id, url, name, shortName };

    dispatch(addTeam({ team }));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeTeam({ id }));
  };

  const isFavourite = favourites.findIndex((team) => team.id === id) !== -1;
  return (
    <div className="card__wrapper">
      <div className="card__img">
        <img className="card__img" src={url} alt="" />
      </div>
      <div className="card__description">
        <h3 className="team__name">{name}</h3>
        <h4 className="team__shortName">short name: {shortName}</h4>
        {!isFavourite ? (
          <button
            type="button"
            className="card__button add"
            onClick={(e) => handleAdd(e)}
          >
            Add team to favourite
          </button>
        ) : (
          <button
            type="button"
            className="card__button remove"
            onClick={(e) => handleRemove(e)}
          >
            Remove team from favourite
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
