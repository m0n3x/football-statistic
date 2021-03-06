import React from "react";
import "./PlayerCard.css";

const PlayerCard = (props) => {
    return (
        <div className="card__wrapper players"> 
            <div className="card__description players">
                <h3 className="player__name">{props.name}</h3>
                <h4 className="player__position">position: {props.position}</h4>
                <h4 className="player__birthday">date of birth: {new Date(props.dateOfBirth).toLocaleDateString("en-US")}</h4>
            </div>
            <div className="card__shirt">
                <div className="shirt__number">{props.shirtNumber}</div>
            <img src="https://image.flaticon.com/icons/png/512/687/687263.png" alt=""/>
            </div>
        </div>
    )
  }

export default PlayerCard