import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card__wrapper">
            <div className="card__img"><img className="card__img" src={props.url} alt=""/></div>
            <div className="card__description">
                <p className="team__name">{props.name}</p>
                <button className="card__button">Add team to favourite</button>
            </div>
        </div>
    )
  }

export default Card