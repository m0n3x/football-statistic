import React, { useEffect, useState } from "react";
import "./MatchCard.css";
import { FETCHURL, TOKEN } from "../../../../components/Constant/Constant";


const MatchCard = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
    (async () => {
      const data = await fetch(
        `${FETCHURL}/matches/${props.id}`,
        { headers: TOKEN }
      )
        .then((response) => response.json())
        .catch(() => {
          console.error("Failed to fetch data");
        });
      setData(data);
    })();
  }, []);
    return (
        <div className="card__wrapper matches" onClick={() => console.log(data)}> 
            <div className="card__description matches">
                <h3 className="match__league">{props.competition.name} </h3>
                <h3 className="match__teams">{props.homeTeam.name} - {props.awayTeam.name}</h3>
                <h4 className="match__score">{props.score.fullTime.homeTeam} - {props.score.fullTime.awayTeam} </h4>
            </div>   
        </div>
    )
  }

export default MatchCard