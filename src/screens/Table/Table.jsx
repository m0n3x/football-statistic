import React, { useEffect, useState } from "react";
import "./Table.css";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import { FETCHURL, TOKEN } from "../../components/Constant/Constant"

const LEAGUES = [
  { name: "English Premier League", id: 2021 },
  { name: "German 1. Bundesliga", id: 2002 },
  { name: "Spanish Primera", id: 2014 },
  { name: "Italian Serie A", id: 2019 },
  { name: "French League 1", id: 2015 },
];

const Table = () => {
  const [data, setData] = useState([]);
  const [activeLeague, setActiveLeague] = useState(LEAGUES[0].id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        setLoading(true);
        const data = await fetch(
          `${FETCHURL}competitions/${activeLeague}/standings`,
          { headers: TOKEN }
        )
          .then((response) => response.json())
          .catch(() => {
            console.error("Failed to fetch data");
            setLoading(false);
          });
    
        setData(data.standings[0].table);
        setLoading(false);
      })();
  }, [activeLeague]);

  return (
    <Layout>
      <div className="table__wrapper">
        <div className="table__header">
          {LEAGUES.map(league => {
            return (
              <div
                onClick={() => setActiveLeague(league.id)}
               className={`table__header ${activeLeague === league.id ? "active" : ""}`}
              >
                <a className={`table__link ${activeLeague === league.id ? "active" : ""}`}>
                  {league.name}
                </a>
              </div>
            );
          })}
        </div>
        <div className="table">
          <div className="table__row">
            <p>Position</p>
            <p>Team</p>
            <p>G</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GS</p>
            <p>GC</p>
            <p>P</p>
          </div>
          {loading && <Loader />}
          {data.map(({ position, team, playedGames, won, draw, lost, goalsFor, goalsAgainst, points }, index) => {
            return (
              <div className={`table__row ${index % 2 === 0 ? "odd" : "even"}`}>
                <p>{position}</p>
                <p>{team.name}</p>
                <p>{playedGames}</p>
                <p>{won}</p>
                <p>{draw}</p>
                <p>{lost}</p>
                <p>{goalsFor}</p>
                <p>{goalsAgainst}</p>
                <p>{points}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Table;


