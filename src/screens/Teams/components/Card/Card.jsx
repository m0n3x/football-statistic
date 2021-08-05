import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card__wrapper">
            <div className="card__img"><img className="card__img" src={props.url} alt=""/></div>
            <div className="card__description">
                <h3 className="team__name">{props.name}</h3>
                <h4 className="team__shortName">short name: {props.shortName}</h4>
                <button type="button" className="card__button">Add team to favourite</button>
            </div>
        </div>
    )
  }

export default Card